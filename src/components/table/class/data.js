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
                currentHoverRow:-1,
                currentSort:null,//当前排序列
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
               if(typeof column.resize =='undefined' && typeof table.resize !='undefined' ){
                   column.resize = table.resize
               }else{
                   column.resize = true
               }
               column.ellipsis = false
               Vue.set(column,'order',null)
            });
            this.states.leftFixedColumns = leftFixedColumns
            this.states.rightFixedColumns = rightFixedColumns
        },
        //排序
        doSort(column,sortType){
            let sortM = column.sortMethod
            let key = column.key
            if(!key && !sortM)return
            let sortFn = null
            const compResult = sortType == 'asc'?1:(sortType =='desc'?-1:0)
            if(sortM){
                sortFn = sortM
            }else{
                sortFn = (ca,cb)=>{
                    //默认数字排序和字符排序
                    let a = ca[key]
                    let b = cb[key]
                    if(typeof a=='number' && typeof b=='number'){
                        return (a-b) * compResult   // compResult：1 升序 compResult：-1 降序
                    }
                    if(typeof a=='string' && typeof b==='string'){
                        return a.localeCompare(b, 'zh-CN') * compResult
                    }
                    return 0
                }
            }
            if(compResult ==0 ){ //恢复默认顺序
                this.states.data = this.states._data 
            }else{
                this.states.data = this.states._data.map(item=>{
                    return {
                        ...item
                    }
                 }).sort(sortFn)
            }
        },
        //初始化排序
        initSort(data){
            const current = this.states.currentSort
            if(current){
                let orderMethod = current.orderMethod //自定义的排序方法
                let key = current.key
            }
           
            return data.map(item=>{
               return {
                   ...item
               }
            })
        },
        setData(data){
            this.states._data = data
            this.states.data = this.initSort(data)
            Vue.nextTick(()=>{
                this.table.layout.updateScrollY()
            }) 
        },
        setColumn(columns){
            this.states.columns =columns
            this.updateColumns();
            Vue.nextTick(()=>{
                this.table.doLayout();
            })
        }
    }
})

export default TableData