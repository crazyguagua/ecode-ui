<script>
export default {
  name: "ecode-table-body",
  props: {
    tableData: Object
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
    leftFixedColumns(){
      return this.tableData.states.leftFixedColumns
    }
  },
  render(h){
    const colGroup = 
          <colgroup>
                {this.columns.map(c=>{
                      return <col name={`${this.tableName}-column-${c.columnId}`} width={c.calcWidth} key={c.columnId} />;
                      
                })}
          </colgroup>

    const trs = this.data.map(row=>{
        return (
            <tr key={row.id}>
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
    let leftFixedTable;
    //左侧固定列
    if(this.leftFixedColumns.length>0){
           const leftFixedColumnsTr = this.data.map(row=>{
              return (
                <tr>
                    {
                      this.columns.map(item=>{
                         return <td key={item.key} class={item.fixed!='left'?'is-hidden':''}>
                          <div class={['table-cell']} >
                            {
                                item.render?item.render(h,row,item):row[item.key]
                            }
                          </div>
                         </td>
                      })
                    }
                </tr>
              )
          })
          //固定列必须也是完整的表格，这样才能保证固定列的高度和不固定的列高度一致，有可能存在固定列不换行，而其他列换行，高度不一致
          const leftFixedGroup = 
                  <colgroup>
                    {
                      this.columns.map(c=>{
                        return <col name={`${this.tableName}-column-left-fixed-${c.columnId}`} width={c.calcWidth} key={`left-fixed-${c.columnId}`} />
                      })
                    }
                  </colgroup>
          leftFixedTable = 
          <div class="ecode-table-left-fixed-wrapper">
            <table class="ecode-table-body-fixed ecode-table-body-left-fixed" style={this.tableStyle} >
              {leftFixedGroup}
              {leftFixedColumnsTr}
            </table>
          </div>
          
   }
   
    return (
       <div class="ecode-table-body-wrapper">
          <table  class="ecode-table-body" style={this.tableStyle}>
              {colGroup}
              {trs}
          </table>
          {leftFixedTable}
        </div>
    )

  }
};
</script>

<style>
</style>