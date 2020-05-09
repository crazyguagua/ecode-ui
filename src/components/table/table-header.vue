<script>
export default {
  name: "ecode-table-header",
  props: {
    tableData: Object,
    fixed: { type: String, default: "" }
  },
  data(){
    return {
      isDragging : false
    }
  },
  computed: {
    columns() {
      return this.tableData.states.columns;
    },
    tableName() {
      return this.tableData.table.tableId;
    },
    tableStyle() {
      let table = this.tableData.table;
      return {
        width: table.tableTotalWidth,
        tableLayout: "fixed"
      };
    },
    border(){
      return this.tableData.table.border
    }
  },
  methods: {
    onMouseDown(e, column) {
      if(!border || !column.resize ){
        return
      }
      let clientX = e.clientX;
      this.$parent.showResizeDiv = true;
      const handleMouseMove =(e)=>{
        this.isDragging = true
      }
      const handleMouseUp = ()=>{
        this.isDragging = false
        document.removeEventListener('mousemove',handleMouseMove)
        document.removeEventListener('mouseup',handleMouseUp)
      }
      document.addEventListener('mousemove',handleMouseMove)
      document.addEventListener('mouseup',handleMouseUp)
    },

    //鼠标移入th，显示 cursor:col-resize
    onMouseMove(e,column){
       if(this.isDragging || !this.border || !column.resize){
         //没有resize 或者正在拖拽中
         return
       }
       let target = e.target
       while(target && target.tagName !== 'TH'){ //有可能事件对象是th的子元素
          target = target.parentNode
       }
       let rect = target.getBoundingClientRect()
       //只有在鼠标距离右边很近的时候才显示可拖拽的cursor
       if(rect.right - e.pageX <10){
         target.style.cursor = 'col-resize'
       }
    }
  },
  render(h) {
    
    return (
      <table
        class={["ecode-table-header", { "ecode-table-body-fixed": this.fixed }]}
        style={this.tableStyle}
      >
        <colgroup>
          {this.columns.map((c, index) => {
            return (
              <col
                name={`${this.tableName}-column-${c.columnId}`}
                width={c.calcWidth}
                key={c.columnId}
              />
            );
          })}
        </colgroup>
        <tr>
          {this.columns.map((c, index) => {
            return (
              <th

                onMousedown={e => this.onMouseDown(e, c)}
                onMousemove={e=>this.onMouseMove(e,c)}
                key={c.columnId}
                class="{'is-hidden':c.fixed != fixed}"
              >
                <span>{c.title} </span>
              </th>
            );
          })}
        </tr>
      </table>
    );
  }
};
</script>