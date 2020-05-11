<script>
const MIN_COLUMN_WIDTH = 80
export default {
  name: "ecode-table-header",
  props: {
    tableData: Object,
    fixed: { type: String, default: "" }
  },
  data(){
    return {
      isDragging : false,
      dragState:{}
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
      return this.table.border
    },
    table(){
      return this.tableData.table
    }
  },
  methods: {
    onMouseDown(e, column) {
      if(!this.border || !column.resize ){
        return
      }
      let clientX = e.clientX;
      this.isDragging = true
      let tableEl = this.table.$el
      let tableRect = tableEl.getBoundingClientRect()
      let tableLeft = tableRect.left
      let maxLeft = tableRect.width
      //当前列th
      let columnId = `${this.tableName}-column-${column.columnId}`
      let th = this.$el.querySelector('th[name="'+columnId+'"]')
      let thRect = th.getBoundingClientRect()
      let thLeft = thRect.left  //单元格的 left
      let resizeDiv = this.table.$refs.resizeDiv

      //th的最小宽度
      let minLeft = (thLeft - tableLeft) + MIN_COLUMN_WIDTH
      const handleMouseMove =(e)=>{
        let resizeDivLeft = e.clientX - tableLeft
        resizeDivLeft = Math.min(maxLeft,Math.max(minLeft,resizeDivLeft))
        resizeDiv.style.left = resizeDivLeft +'px'
        resizeDiv.style.display = 'block'
        
      }
      const handleMouseUp = (e)=>{
        let newWidth = e.clientX - thLeft
        this.isDragging = false
        resizeDiv.style.display = 'none'
        column.width = newWidth
        //重新计算列宽
        this.table.layout.updateColumnWidth()
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
       }else{
          target.style.cursor = ''
       }
    },
    renderHeader(h,column){
      let content= null
       if(column.type==='index'){
          content =  column.title||'序号'
       }else if(column.headerRender){
         content = column.headerRender(h,column)
       }else{
         content = column.title
       }
       let sortDiv = <div class='sort'></div>
       return <div class="headerCell">
          {content}
          {sortDiv}
       </div>
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
                 name={`${this.tableName}-column-${c.columnId}`}
                onMousedown={e => this.onMouseDown(e, c)}
                onMousemove={e=>this.onMouseMove(e,c)}
                key={c.columnId}
                class="{'is-hidden':c.fixed != fixed}"
              >
                {this.renderHeader(h,c)}
              </th>
            );
          })}
        </tr>
      </table>
    );
  }
};
</script>