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
        //具有最小宽度的列或者没有宽度的列
        let noWidthColumns = columns.filter(item=>{
            return item.width == undefined || item.minWidth
        });
        //具有width属性的列宽之和
        let hasWidthColumnTotoalWidth = 0
        //指定width或者minWidth的所有列的宽度之和
        let hasWidthOrMinWithColumnTotoalWidth = 0
        columns.forEach((item,index)=>{
            if(item.width){
               Vue.set(item,'width',item.width)
               hasWidthColumnTotoalWidth +=item.width
               hasWidthOrMinWithColumnTotoalWidth += item.width
            }else if(item.minWidth) {
                hasWidthOrMinWithColumnTotoalWidth += item.minWidth
            }
       },0)
         
        //自动分配剩余列的宽度
        let averageWidth = Math.max((containerWidth - hasWidthColumnTotoalWidth)/noWidthColumns.length,80)

        noWidthColumns.forEach(element => {
           let width = (element.minWidth&&averageWidth<element.minWidth)?element.minWidth:averageWidth
           Vue.set(element,'width',width)
        });

        //如果全都指定宽度，并且宽度之和小于容器宽度，需要修改容器的宽度
        if(noWidthColumns.length == 0 && hasWidthColumnTotoalWidth<containerWidth ){
            this.table.tableWidth = hasWidthColumnTotoalWidth + 'px'
        }
        
        //如果宽度之和大于容器宽度，需要修改容器的宽度
        if(hasWidthOrMinWithColumnTotoalWidth > containerWidth ){
            this.table.tableWidth = hasWidthOrMinWithColumnTotoalWidth + 'px'
        }
    }
}

export default Layout