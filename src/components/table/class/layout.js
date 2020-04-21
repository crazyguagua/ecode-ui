import Vue from 'vue'
class Layout{
    constructor(tableData,table){
        this.tableData = tableData 
        this.table = table
    }

    updateColumnWidth(){
        //更新每一列的宽度
        let containerWidth = this.table.$el.clientWidth
        let columns = this.tableData.states.columns
        let columnCount = columns.length
        let noWidthColumns = columns.filter(item=>typeof item.width !='number');
        let hasWidtColumnTotoalWidth = columns.reduce((prev,next,index,array)=>{
             if(next.width){
                return prev+next.width
             }else if(next.minWidth){
                return prev + next.minWidth
             }else {
                 return prev
             }
        },0)
        //自动分配剩余列的宽度
        let averageWidth = Math.max((containerWidth - hasWidtColumnTotoalWidth)/noWidthColumns.length,80)

        noWidthColumns.forEach(element => {
           Vue.set(element,'width',averageWidth)
        });
    }
}

export default Layout