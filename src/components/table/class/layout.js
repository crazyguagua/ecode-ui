import Vue from 'vue'
import {
    getScrollBarWith
} from '@/util/scrollbar'
const MIN_COLUMN_WIDTH = 80
//宽度转换
const transWidth = (width, tableTotalWidth) => {
    if (typeof width === 'string') {
        if (/\d+%$/.test(width)) {
            let percentage = width.substr(0, width.indexOf('%'))
            return tableTotalWidth * parseFloat(percentage) / 100
        } else {
            return parseFloat(width)
        }
    } else {
        return width
    }
}
class Layout {
    constructor(tableData, table) {
        this.tableData = tableData
        this.table = table
        this.scrollbarWidth = getScrollBarWith()
        this.tableBodyHeight = 100
    }
    //更新每一列的宽度
    updateColumnWidth() {
        let containerWidth = this.table.$el.clientWidth
        let columns = this.tableData.states.columns
        //具有最小宽度的列或者没有宽度的列
        let noWidthColumns = columns.filter(item => {
            return !item.width || item.minWidth
        });
        //具有width属性的列宽之和
        let hasWidthColumnTotoalWidth = 0
        //指定width或者minWidth的所有列的宽度之和
        let hasWidthOrMinWithColumnTotoalWidth = 0
        columns.forEach((item, index) => {
            if (item.width) {
                let calcWidth = transWidth(item.width, containerWidth)
                Vue.set(item, 'calcWidth', calcWidth)
                hasWidthColumnTotoalWidth += calcWidth
                hasWidthOrMinWithColumnTotoalWidth += calcWidth
            } else if (item.minWidth) {
                hasWidthOrMinWithColumnTotoalWidth += transWidth(item.minWidth, containerWidth)
            }
        }, 0)

        //自动分配剩余列的宽度 ，减一 防止出现横向滚动条
        let averageWidth = Math.max(Math.floor((containerWidth - hasWidthColumnTotoalWidth - 1) / noWidthColumns.length), MIN_COLUMN_WIDTH)

        noWidthColumns.forEach(element => {
            let minWidth = transWidth(element.minWidth, containerWidth)
            let width = (minWidth && averageWidth < minWidth) ? minWidth : averageWidth
            Vue.set(element, 'calcWidth', transWidth(width, containerWidth))
        });

        //如果全都指定宽度，并且宽度之和小于容器宽度，需要修改容器的宽度
        if (noWidthColumns.length == 0 && hasWidthColumnTotoalWidth < containerWidth) {
            this.table.tableWidth = hasWidthColumnTotoalWidth + 'px'
        }

        //如果宽度之和大于容器宽度，需要修改容器的宽度
        if (hasWidthOrMinWithColumnTotoalWidth > containerWidth) {
            this.table.horizontalScroll = true
            this.table.tableBodyWidth = hasWidthOrMinWithColumnTotoalWidth + 'px'

        } else {
            this.table.horizontalScroll = false
        }
        this.calcFixedColumnWidth()
        this.calcFixedColumnBodyTop()
    }
    //计算固定列的宽度
    calcFixedColumnWidth() {
        let leftFixedW = this.tableData.states.leftFixedColumns.reduce((acc, col) => {
            return acc + col.calcWidth
        }, 0)
        this.tableData.states.leftFixedColumnWidth = leftFixedW
        let rightFixedW = this.tableData.states.rightFixedColumns.reduce((acc, col) => {
            return acc + col.calcWidth
        }, 0)
        this.tableData.states.rightFixedColumnWidth = rightFixedW

    }
    //固定列头部的高度
    calcFixedColumnBodyTop() {
        //固定列body部分滚动，body定位属性距离如容器的top值
        this.tableData.states.fixedColumnBodyTop = this.table.$refs.tableHeader.offsetHeight + 'px'
    }
    //计算整个table的高度 头部加body
    updateTableHeight(totalHeight) {
        if (typeof totalHeight === 'string') {
            totalHeight = parseFloat(totalHeight)
        }

        //整个表格容器的高度
        this.table.totalHeight = totalHeight
        Vue.nextTick(() => {
            let container = this.table.$el
            let tableHeader = this.table.$refs.tableHeader
            let tableBody = this.table.$refs.tableBody
            let allH = container.offsetHeight
            let headerH = tableHeader.offsetHeight
            let tableH = allH - headerH
            this.tableBodyHeight = tableH
            tableBody.style['height'] = tableH + 'px'

            //没有数据也设置body 部分的table高度
            this.table.tableBodyHeight = tableH + 'px'
        })

    }

    //数据变化了，有可能出现滚动条，如果出现纵向滚动条，需要调整最后一列的宽度
    updateScrollY() {
        Vue.nextTick(() => {
            let tableBodyWrapper = this.table.$refs.tableBody
            let tableBody = tableBodyWrapper.querySelector('.ecode-table-body')
            let tableHeight = tableBody.offsetHeight
            let wrapperHeight = tableBodyWrapper.offsetHeight
            if(tableHeight > wrapperHeight ){
                this.table.verticalScroll = true
                this.adjustLastColumn()
            }
           
        })
    }
    //调整最后一列因为出现滚动条造成的问题
    adjustLastColumn() {
        //头部最后一列的宽度加上一个滚动条的宽度
        let cols = this.table.$refs.tableHeader.querySelectorAll('colgroup col')
        let newWidth = parseFloat(cols[cols.length - 1].width) + this.scrollbarWidth
        cols[cols.length - 1].width = newWidth
    }


}

export default Layout