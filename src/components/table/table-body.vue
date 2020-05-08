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
          // tableLayout:table.horizontalScroll?'fixed':'auto'
          tableLayout:'fixed'
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
            <tr key={row.id} onMouseenter={()=>{this.onMouseenter(index)}} class={[{'hovering-row':this.currentHoverRow == index}]}>
                {
                  this.columns.map(c=>{
                    return (
                      <td key={c.key}>
                       <div class="table-cell">
                          {
                            c.render?c.render(h,row,c):row[c.key]
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
    })
  }
};
</script>

<style>
</style>