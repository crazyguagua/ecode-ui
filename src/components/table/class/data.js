import Vue from 'vue'
let columnIdSeed = 1
const TableData = Vue.extend({
    data(){
        return {
            states:{
                columns:[],
                data:[],
                leftFixedColumnWidth : 0,
                rightFixedColumnWidth:0,
                leftFixedColumns:[], //左侧固定列数组
                rightFixedColumns:[], //右侧固定列数组
                fixedColumnBodyTop:0,   //table头部的高度
                currentHoverRow:-1
            }
        }
    },
    methods:{
        updateColumns(){
            let columns = this.states.columns
            let table = this.table
            let leftFixedColumns =[]
            let rightFixedColumns = []
            columns.forEach(column => {
               Vue.set(column,'columnId',columnIdSeed++)
               if(column.fixed && column.fixed === 'left'){
                   leftFixedColumns.push(column)
               }else if(column.fixed && column.fixed ==='right'){
                   rightFixedColumns.push(column)
               }
               if(!column.resize){
                  column.resize = true
               }
               column.ellipsis = false
            });
            this.states.leftFixedColumns = leftFixedColumns
            this.states.rightFixedColumns = rightFixedColumns
        }
    }
})

export default TableData