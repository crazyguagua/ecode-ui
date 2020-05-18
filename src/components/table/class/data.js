import Vue from 'vue'
let columnIdSeed = 1
let keySeed
const TableData = Vue.extend({
    created(){
        this.insideData={
            dataMap:{}//rowKey,item  方便根据rowKey查找  
        }
        //非响应式数据
    },
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
                currentHoverRow:null,
                currentSort:null,//当前排序列
                currentSelectRow:null,
                selectedAll:false,//全部选中
                selectedRows:[], //当前选中行数组
                indeterminate:false,//半选
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
        //初始化数据 可能有排序，过滤
        initData(data){
            const current = this.states.currentSort
            if(current){
                let orderMethod = current.orderMethod //自定义的排序方法
                let key = current.key
            }
            let dataMap = {}  //方便映射key和数据
            let dataArray = []
            dataArray =  data.map((item,index)=>{
               let _rowKey = this.getRowKey(item,index)
               item._rowKey = _rowKey
               dataMap[_rowKey] = item
               return {
                   ...item,
               }
            })
            this.insideData.dataMap = dataMap
            return dataArray
        },
        setData(data){
            let dataFreez = Object.freeze(data)
            this.states._data = dataFreez
            //需要更新currentRow
            this.updateCurrentRow()
            this.clearSelectMultiple()
            this.states.data = this.initData(dataFreez)

            Vue.nextTick(()=>{
                this.table.layout.updateScrollY()
            }) 
        },
        //row的标识
        getRowKey(item,index){
            let rowKey = this.table.rowKey
            let now = Date.now()
            let newRowKey = null
            if(rowKey && typeof rowKey ==='string'){
                 newRowKey = item[rowKey]
            }else if(rowKey && typeof rowKey === 'function'){
                 newRowKey = rowKey(item)
            }else{
                 newRowKey = `${now}_${index}`
            }
            return  '_row_key_'+newRowKey
        },
        //数据变化时要更新currentRow,可能当前选中列不在数据列表中了
        updateCurrentRow(){
            if(this.states.currentSelectRow ){
                let index = this.data.findIndex(item=>item._key === this.states.currentSelectRow._key)
                if(index==-1){
                    this.states.currentSelectRow = null
                }
            }
        },
        setColumn(columns){
            this.states.columns =columns
            this.updateColumns();
            Vue.nextTick(()=>{
                this.table.doLayout();
            })
        },
        //切换当前选中列
        changeCurrentSelectRow(row){
            let isNew = this.states.currentSelectRow != row
            if(row && isNew){
                this.states.currentSelectRow = row
            }else if(!row){
                this.states.currentSelectRow = null
            }
        },
        //当前行是否选中
        isSelected(row){
            let flag = this.states.selectedRows.indexOf(row._rowKey) > -1
            return flag
        },
        //选中行处理  更新选中列数组
        updateSelectedRow(row,selected,index){
            let selectedRows = this.states.selectedRows
            let _rowKey = row._rowKey
            let oldIndex =  selectedRows.indexOf(_rowKey)
            if(oldIndex==-1 && selected){
                selectedRows.splice(index,0,_rowKey)
            }else if(oldIndex>-1 && !selected){
                selectedRows.splice(oldIndex,1)
            }
            if(selectedRows.length >0 && selectedRows.length == this.states._data.length){
                this.states.selectedAll = true
            }else{
                this.states.selectedAll = false
            }
            this.states.indeterminate =selectedRows.length>0 && selectedRows.length != this.states._data.length
            this.triggerSelectionChange()
        },
        //全选更新
        updateSelectAll(selected){
            this.states.selectedAll  = selected
            this.states.indeterminate = false
            if(selected){
                this.states.selectedRows = this.states.data.map(item=>item._rowKey)
            }else{
                this.states.selectedRows =[]
            }
            this.triggerSelectionChange()
        },
        //通知选项发生变化
        triggerSelectionChange(){
            //slice 防止被外面修改
            let dataMap = this.insideData.dataMap
            let selection = this.states.selectedRows.map(key=>dataMap[key])
            this.table.$emit('selection-change',selection.slice())
        },
        //清空多选
        clearSelectMultiple(){
            this.states.selectedRows=[]
            this.states.selectedAll = false
            this.states.indeterminate = false
            this.triggerSelectionChange()
        }
    }
})

export default TableData