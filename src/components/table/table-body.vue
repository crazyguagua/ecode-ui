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
            <tr key={row.id} onMouseleave={this.onMouseleave} onMouseenter={()=>{this.onMouseenter(index)}} class={this.getTrClass(row,index)}>
                {
                  this.columns.map(c=>{
                    return (
                      <td key={c.key}>
                       <div class="table-cell">
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
      return [{'hovering-row':this.currentHoverRow == index},
        this.tableData.table.stripe&& index%2==1?'stripe-row':''
      ]
    },
    renderCell(h,row,column,rowIndex){
      if(column.type === 'index'){
        return <div class="table-cell">
                    {rowIndex+1}
                </div>
      }
      return column.render?column.render(h,row,column):row[column.key]
    }
  }
};
</script>

<style>
</style>