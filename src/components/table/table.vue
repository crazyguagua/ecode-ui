<script>
import TableHeader from "./table-header.vue";
import TableBody from "./table-body";
import { createData } from "./class/helper";
import Layout from "./class/layout";
import { debounce, throttle } from "throttle-debounce";
import { addResizeListener, removeResizeListener } from "@/util/resize-event";
let seed = 1;
export default {
  name: "ecode-table",
  components: {
    TableHeader,
    TableBody
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    bordered: {
      type: Boolean,
      default: false
    },
    height: { type: [String, Number] },
    rowKey: [String, Function]
  },
  created() {
    this.tableId = "ecode-table-" + seed++;
  },
  computed: {
    tableCls() {
      return {
        "ecode-table-bordered": this.bordered
      };
    },
    tableStyle(){
      let table = this.tableData.table
      return {
          width:table.tableBodyWidth,
          // tableLayout:table.horizontalScroll?'fixed':'auto'
          tableLayout:'fixed'
      }
    },
    wrapperStyle() {
      if (this.totalHeight) {
        return {
          height: this.totalHeight + "px"
        };
      } else {
        return {};
      }
    },
    leftFixedColumn() {
      return this.tableData.states.leftFixedColumns;
    },
    tableName(){
      return this.tableData.table.tableId
    },
  },
  mounted() {
    this.bindEvents();
    this.tableData.updateColumns();
    this.doLayout();
  },
  data() {
    let tableData = createData(this, this.$props);
    let layout = new Layout(tableData, this);
    return {
      tableData: tableData,
      layout: layout,
      tableBodyWidth: null,
      tableTotalWidth: null,
      horizontalScroll: false,
      totalHeight: null
    };
  },
  methods: {
    doLayout() {
      //计算每一列的宽度 和表格整体的宽度
      this.layout.updateColumnWidth();
    },
    bindEvents() {
      let el = this.$refs.tableBody.$el;
      el.addEventListener("scroll", this.syncScroll, { passive: true });
      // window.addEventListener('resize',this.tableResize)
      //上面那样没有防抖效果，用饿了吗的方法
      addResizeListener(this.$el, this.tableResize);
    },
    tableResize() {
      //重新计算表格的宽度
      this.doLayout();
    },
    syncScroll: throttle(20, function() {
      // 这里不能用箭头函数
      let { scrollLeft } = this.$refs.tableBody.$el;
      // console.log(scrollLeft)
      //同步tableBody的横向滚动距离到tableHeader
      this.$refs.tableHeader.$el.scrollLeft = scrollLeft;
    }),
    unbindEvents() {
      let el = this.$refs.tableBody.$el;
      el.removeEventListener("scroll", this.syncScroll);
      // window.removeEventListener('resize',this.tableResize)
      removeResizeListener(this.$el, this.tableResize);
    },
    //渲染左侧固定列
    leftFixedColumnRender() {
      let leftFixedTable = null;
      //左侧固定列
      if (this.leftFixedColumn.length > 0) {
        const leftFixedColumnsTr = this.data.map(row => {
          return (
            <tr>
              {this.columns.map(item => {
                return (
                  <td
                    key={item.key}
                    class={item.fixed != "left" ? "is-hidden" : ""}
                  >
                    <div class={["table-cell"]}>
                      {item.render ? item.render(h, row, item) : row[item.key]}
                    </div>
                  </td>
                );
              })}
            </tr>
          );
        });
        //固定列必须也是完整的表格，这样才能保证固定列的高度和不固定的列高度一致，有可能存在固定列不换行，而其他列换行，高度不一致
        const leftFixedGroup = (
          <colgroup>
            {this.columns.map(c => {
              return (
                <col
                  name={`${this.tableName}-column-left-fixed-${c.columnId}`}
                  width={c.calcWidth}
                  key={`left-fixed-${c.columnId}`}
                />
              );
            })}
          </colgroup>
        );
        leftFixedTable = (
          <div class="ecode-table-fixed-left" style={{width:this.tableData.states.leftFixedColumnWidth+'px'}}>
          <div class="ecode-table-header-wrapper">
            <table class="ecode-table-header" style={this.tableStyle}>
                <colgroup>
                    {
                        this.leftFixedColumn.map((c,index)=>{
                            return (
                                <col name={`${this.tableName}-column-left-fixed-${c.columnId}`} width={c.calcWidth} key={`${this.tableName}-column-left-fixed-${c.columnId}`} />
                            )
                        })
                    }
                </colgroup>
                <tr>
                    {
                        this.leftFixedColumn.map((item,index)=>{
                            return (
                                <th>
                                    <span>
                                        {item.title}
                                    </span>
                                </th>
                            )
                        })
                    }
                </tr>
            </table>
            </div>
            <div class="ecode-table-fixed-left-body-wrapper">
              <table
                class="ecode-table-body-fixed ecode-table-body-left-fixed"
                style={this.tableStyle}
              >
                {leftFixedGroup}
                {leftFixedColumnsTr}
              </table>
            </div>
          </div>
        );
      }
      return leftFixedTable;
    }
  },
  beforeDestroy() {
    this.tableData = null;
    this.layout = null;
    this.unbindEvents();
  },
  watch: {
    height: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal && newVal != oldVal) {
          this.layout.updateTableHeight(newVal);
        }
      }
    }
  },
  render(h) {
    let leftFixedTable = this.leftFixedColumnRender();
    return (
      <div class={["ecode-table", this.tableCls]} style={this.wrapperStyle}>
        <TableHeader tableData={this.tableData} ref="tableHeader" />

        <TableBody tableData={this.tableData} ref="tableBody" />
        {leftFixedTable}
      </div>
    );
  }
};
</script>