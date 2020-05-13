<script>
const MIN_COLUMN_WIDTH = 80
import EIcon from '@/components/icon/icon'
export default {
  name: "ecode-table-header",
  components:{EIcon},
  props: {
    tableData: Object,
    fixed: { type: String, default: "" }
  },
  data(){
    return {
      isDragging : false,
      dragingColumn:null
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
    //处理列拖拽事件
    onMouseDown(e, column) {
      if(!this.border || !column.resize || !this.dragingColumn){ //鼠标没有出现拖拽cursor不让点击拖拽
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
        let resizeDivLeft = e.clientX - tableLeft   //鼠标屏幕坐标 减去 table的left值
        resizeDivLeft = Math.min(maxLeft,Math.max(minLeft,resizeDivLeft))
        resizeDiv.style.left = resizeDivLeft +'px'
        resizeDiv.style.display = 'block'
        
      }
      const handleMouseUp = (e)=>{
        let newWidth = e.clientX - thLeft  //鼠标屏幕坐标 减去 当前th的left值
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
         //通过dragingColumn来控制只有出现手型，才可以点击拖拽
         this.dragingColumn = column
       }else{
          target.style.cursor = ''
          this.dragingColumn = null
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
       let sortDiv = null
       if(column.sortable){
         //三种状态，未排序，升序，降序  click.native = nativeOnClick
         let orderDiv = null
         if(column.order == null){
           orderDiv = <e-icon name='ecode-sort' nativeOnClick={ (e)=>{this.handleSort(e,column,'desc')}} />
         }else if(column.order === 'asc'){
           orderDiv = <e-icon name='ecode-sort-asc' class="sort-enable" nativeOnClick={(e)=>{this.handleSort(e,column,null)}} />
         }else{
           orderDiv = <e-icon name='ecode-sort-desc' class="sort-enable" nativeOnClick={(e)=>{this.handleSort(e,column,'asc')}} />
         }
         sortDiv = <div class='sort'>{orderDiv} </div>
       }
       return <div class="headerCell"  >
          <span>{content}</span>
          {sortDiv}
       </div>
    },
    //排序
    handleSort(event,column,order){
       event.stopPropagation();//防止事件冒泡  ，点击箭头，不冒泡给headerCell
       if(column.sortable === 'remote'){
          //远程排序
       }
       column.order = order
       this.tableData.doSort(column,order)

    },
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