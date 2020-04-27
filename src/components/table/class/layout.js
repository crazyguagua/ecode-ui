import Vue from 'vue'
import {getScrollBarWith} from '@/util/scrollbar'

const transWidth = (width,tableTotalWidth)=>{
    if(typeof width === 'string'){
        if(/\d+%$/.test(width)){
            let percentage =  width.substr(0,width.indexOf('%'))
            return tableTotalWidth* parseFloat(percentage)/100
        }else{
            return parseFloat(width)
        }
    }else{
        return width
    }
}
class Layout{
    constructor(tableData,table){
        this.tableData = tableData 
        this.table = table
        this.scrollbarWidth = getScrollBarWith()
    }
     //更新每一列的宽度
    updateColumnWidth(){
        let containerWidth = this.table.$el.clientWidth
        let columns = this.tableData.states.columns
        //具有最小宽度的列或者没有宽度的列
        let noWidthColumns = columns.filter(item=>{
            return !item.width || item.minWidth 
        });
        //具有width属性的列宽之和
        let hasWidthColumnTotoalWidth = 0
        //指定width或者minWidth的所有列的宽度之和
        let hasWidthOrMinWithColumnTotoalWidth = 0
        columns.forEach((item,index)=>{
            if(item.width){
               let calcWidth = transWidth(item.width,containerWidth)
               Vue.set(item,'calcWidth',calcWidth)
               hasWidthColumnTotoalWidth += calcWidth
               hasWidthOrMinWithColumnTotoalWidth += calcWidth
            }else if(item.minWidth) {
                hasWidthOrMinWithColumnTotoalWidth += transWidth(item.minWidth,containerWidth)
            }
       },0)
         
        //自动分配剩余列的宽度
        let averageWidth = Math.max((containerWidth - hasWidthColumnTotoalWidth)/noWidthColumns.length,80)

        noWidthColumns.forEach(element => {
           let minWidth = transWidth(element.minWidth,containerWidth)
           let width = (minWidth&&averageWidth<minWidth)?minWidth:averageWidth
           Vue.set(element,'calcWidth',transWidth(width,containerWidth))
        });

        //如果全都指定宽度，并且宽度之和小于容器宽度，需要修改容器的宽度
        if(noWidthColumns.length == 0 && hasWidthColumnTotoalWidth<containerWidth ){
            this.table.tableWidth = hasWidthColumnTotoalWidth + 'px'
        }
        
        //如果宽度之和大于容器宽度，需要修改容器的宽度
        if(hasWidthOrMinWithColumnTotoalWidth > containerWidth ){
            this.table.horizontalScroll = true
            //获得滚动条的宽度
            //去掉一个滚动条的宽度，否则对不齐
            this.table.tableBodyWidth = hasWidthOrMinWithColumnTotoalWidth  + 'px'
            this.table.tableTotalWidth = hasWidthOrMinWithColumnTotoalWidth + this.scrollbarWidth + 'px'
            //头部最后一列的宽度加上一个滚动条的宽度
            Vue.nextTick(()=>{
               let cols =  this.table.$refs.tableHeader.$el.querySelectorAll('colgroup col')
               let newWidth = parseFloat(cols[cols.length-1].width) + this.scrollbarWidth
               cols[cols.length-1].width = newWidth
            })
        }
    }
    //计算整个table的高度 头部加body
    updateTableHeight(totalHeight){
        if(typeof totalHeight === 'string'){
            totalHeight = parseFloat(totalHeight)
        }

        //整个表格容器的高度
        this.table.totalHeight = totalHeight
        Vue.nextTick(()=>{
            let container = this.table.$el
            let tableHeader = this.table.$refs.tableHeader.$el
            let tableBody = this.table.$refs.tableBody.$el
            let allH = container.offsetHeight
            let headerH = tableHeader.offsetHeight
            tableBody.style['height'] = allH - headerH +'px'
        })
    }


}

export default Layout