<script>
import { debounce } from "throttle-debounce";
export default {
  name: "ecode-table-body",
  props: {
    tableData: Object,
     fixed:{type:String,default:''}
  },
  computed:{
    columns(){
      return this.tableData.states.columns
    },
    data(){
      return this.tableData.states.data
    },
     tableName(){
      return this.tableData.table.tableId
    },
    tableStyle(){
      let table = this.tableData.table
      return {
          width:table.tableBodyWidth,
          tableLayout:'fixed',
          height:this.tableData.table.tableBodyHeight
      }
    },
    currentHoverRow(){
      return this.tableData.states.currentHoverRow
    }
  },
  render(h){
    const colGroup = 
          <colgroup>
                {this.columns.map(c=>{
                      return <col name={`${this.tableName}-column-${c.columnId}`} width={c.calcWidth} key={c.columnId} />;
                      
                })}
          </colgroup>
 
    const trs = this.data.map((row,index)=>{
        
        return (
            <tr key={row._rowKey} onClick={(event)=>this.selectRow(event,row)} onMouseleave={this.onMouseleave} onMouseenter={()=>{this.onMouseenter(index)}} class={this.getTrClass(row,index)}>
                {
                  this.columns.map(c=>{
                    return (
                      <td key={c.key}>
                       <div class="table-cell" >
                          {
                            this.renderCell(h,row,c,index)
                          }
                        </div>
                      </td>
                    )
                  })
                }
            </tr>
        )
    }) 

    return (
          <table  class="ecode-table-body" style={this.tableStyle}>
              {colGroup}
              {trs}
          </table>
    )

  },
  methods:{
    onMouseenter:debounce(30,function(index){
        this.tableData.states.currentHoverRow = index
    }),
    onMouseleave:debounce(30,function(){
        this.tableData.states.currentHoverRow = null
    }),
    //行样式 ，hover和stripe时用到
    getTrClass(row,index){
      let table = this.tableData.table
      let currentSelectRow = this.tableData.states.currentSelectRow
      let highlight = ''
      if(table.highlightCurrentRow && currentSelectRow){
          highlight =currentSelectRow._rowKey === row._rowKey?'highlight':''
      }
      return [{'hovering-row':this.currentHoverRow == index},
        table.stripe&& index%2==1?'stripe-row':'',
        highlight
      ]
    },
    //渲染单元格
    renderCell(h,row,column,rowIndex){
      if(column.type === 'index'){
        return rowIndex+1
      }else if(column.type === 'select'){
          return  <e-checkbox  nativeOn-click={ //阻止事件冒泡给tr，防止触发单选
                          e=>e.stopPropagation()} value={this.tableData.isSelected(row)}
                    on-input={ (selected)=>this.tableData.updateSelectedRow(row,selected,rowIndex)}
                  >
                  </e-checkbox>
       }
      return column.render?column.render(h,row,column):row[column.key]
    },
    selectRow(event,row){
      if(this.tableData.table.highlightCurrentRow){
         this.tableData.changeCurrentSelectRow(row)
      }
     
    }
  }
};
</script>