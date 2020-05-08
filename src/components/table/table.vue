<script>
import TableHeader from "./table-header.vue";
import TableBody from "./table-body";
import { createData } from "./class/helper";
import Layout from "./class/layout";
import { debounce, throttle } from "throttle-debounce";
import { addResizeListener, removeResizeListener } from "@/util/resize-event";
import { getScrollBarWith } from "@/util/scrollbar";
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
    tableStyle() {
      let table = this.tableData.table;
      return {
        width: table.tableBodyWidth,
        tableLayout: "fixed"
      };
    },
    fixedTableHeight() {
      //如果出现横向滚动条，固定列的高度需要减去滚动条
      let table = this.tableData.table;
      let totalHeight = table.totalHeight; // 设置了高度的
      let height = totalHeight;
      if (this.horizontalScroll) {
        //出现滚动条
        height -= getScrollBarWith();
      }
      return height + "px";
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
    rightFixedColumn() {
      return this.tableData.states.rightFixedColumns;
    },
    tableName() {
      return this.tableData.table.tableId;
    }
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
      tableBodyWidth: null, //固定列父容器的宽度
      tableTotalWidth: null,
      horizontalScroll: false, //是否出现横向滚动条
      totalHeight: null, //如果指定了表格的高度
      shadowPosition: "right" //横向滚动的方向，默认中间滚动，用于显示固定列的阴影
    };
  },
  methods: {
    doLayout() {
      //计算每一列的宽度 和表格整体的宽度
      this.layout.updateColumnWidth();
    },
    bindEvents() {
      let el = this.$refs.tableBody;
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
      let {
        scrollLeft,
        scrollTop,
        scrollWidth,
        offsetWidth
      } = this.$refs.tableBody;
      let {
        leftFixedTableWrapper,
        rightFixedTableWrapper
      } = this.$refs;
      // console.log(scrollLeft)
      //同步tableBody的横向滚动距离到tableHeader
      this.$refs.tableHeader.scrollLeft = scrollLeft;
      if (leftFixedTableWrapper) {
        //同步固定列的body部分滚动的距离
        leftFixedTableWrapper.scrollTop = scrollTop;
      }
      if (rightFixedTableWrapper) {
        //同步固定列的body部分滚动的距离
        rightFixedTableWrapper.scrollTop = scrollTop;
      }

      //处理是否显示固定列一侧的阴影
      let maxScrollLeft = scrollWidth - offsetWidth - 1;

      if (scrollLeft > 0 && scrollLeft < maxScrollLeft) {
        //左侧和右侧固定列都显示阴影
        this.shadowPosition = "both";
      } else if (scrollLeft == 0) {
        //右侧固定列显示阴影
        this.shadowPosition = "right";
      } else {
        //左侧固定列显示阴影
        this.shadowPosition = "left";
      }
    }),
    //销毁时解除事件绑定
    unbindEvents() {
      let el = this.$refs.tableBody.$el;
      el.removeEventListener("scroll", this.syncScroll);
      // window.removeEventListener('resize',this.tableResize)
      removeResizeListener(this.$el, this.tableResize);
    },
    //渲染固定列
    renderFixedColumn(position) {
      let fixedTable = null;
      //固定列必须也是完整的表格，这样才能保证固定列的高度和不固定的列高度一致，有可能存在固定列不换行，而其他列换行，高度不一致

      //最外层容器的宽度
      let fixedDivWidth =
        position == "left"
          ? this.tableData.states.leftFixedColumnWidth
          : this.tableData.states.rightFixedColumnWidth;
      let fixedColumns = this.columns; 
      let divStyle = {
        width: fixedDivWidth + "px",
        bottom:this.layout.scrollbarWidth + "px"
      };
      if (position == "right") {
        divStyle.right = this.layout.scrollbarWidth + "px";
      }
      let bodyStyle={}

      bodyStyle.top=this.tableData.states.fixedColumnBodyTop

      fixedTable = (
        <div
          class={[`ecode-table-fixed-${position}`, "ecode-table-fixed"]}
          style={divStyle}
        >
        <div class={[`ecode-table-header-${position}-wrapper`]} >
          <TableHeader
            tableData={this.tableData}
            fixed={position}
          ></TableHeader>
        </div>
        <div class={[`ecode-table-fixed-${position}-body-wrapper`]} style={bodyStyle}  ref={`${position}FixedTableWrapper`}>
          <TableBody tableData={this.tableData} fixed={position}></TableBody>
        </div>
        </div>
      );
      return fixedTable;
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
    let leftFixedTable = null;
    let rightFixedTable = null;
    //只有出现横向滚动条并且配置了固定列才渲染固定列
    if (this.horizontalScroll && this.leftFixedColumn.length > 0) {
      leftFixedTable = this.renderFixedColumn("left");
    }
    let rightPatch = null;
    if (this.horizontalScroll && this.rightFixedColumn.length > 0) {
      rightFixedTable = this.renderFixedColumn("right");
      //右侧固定列定位距离一个滚动条的宽度，空出一个小div，需要打一个补丁盖住
      const patchStyle = {
        width: this.layout.scrollbarWidth + "px",
        height: this.tableData.states.fixedColumnBodyTop
      };
      rightPatch = <div class="fixed-right-patch" style={patchStyle}></div>;
    }

    return (
      <div
        class={[
          "ecode-table",
          this.tableCls,
          `scroll-shadow-position-${this.shadowPosition}`
        ]}
        style={this.wrapperStyle}
      >
        <div class={["ecode-table-header-wrapper"]}  ref="tableHeader">
          <TableHeader tableData={this.tableData}  />
        </div>
        <div class={["ecode-table-body-wrapper"]}  ref="tableBody">
          <TableBody tableData={this.tableData}  />
        </div>
        {leftFixedTable}
        {rightFixedTable}
        {rightPatch}
      </div>
    );
  }
};
</script>