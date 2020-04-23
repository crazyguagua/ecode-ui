<template>
   <div class="ecode-table" :class="tableCls" :style="wrapperStyle">
       <TableHeader  :tableData="tableData" ref="tableHeader" />

       <TableBody :tableData="tableData" ref="tableBody" />
   </div>
</template>

<script>
import TableHeader from './table-header.vue'
import TableBody from './table-body'
import { createData } from './class/helper'
import Layout from './class/layout'
import { debounce, throttle } from 'throttle-debounce';
let seed = 1 
export default {
    name:'ecode-table',
    components:{
        TableHeader,TableBody
    },
    props:{
        data:{
            type:Array,
            default(){
                return []
            }
        },
        columns:{
            type:Array,
            default(){
                return []
            }
        },
        bordered:{
            type:Boolean,
            default:false
        },
        height:{type:Number},
        rowKey: [String, Function],
    },
    created(){
        this.tableId = 'ecode-table-'+seed++
    },
    computed:{
        tableCls(){
            return {
                'ecode-table-bordered':this.bordered
            }
        },
        wrapperStyle(){
            if(this.totalHeight){
                return {
                    height:this.totalHeight+'px'
                }
            }else{
                return {}
            }
        }
    },
    mounted(){
        this.bindEvents()
        this.tableData.updateColumns()
        this.doLayout()
    },
    data(){
        let tableData = createData(this,this.$props)
        let layout = new Layout(tableData,this)
        return {
            tableData:tableData,
            layout:layout,
            tableBodyWidth:null,
            tableTotalWidth:null,
            horizontalScroll:false,
            totalHeight:null
        }
    },
    methods:{
        doLayout(){
            //计算每一列的宽度 和表格整体的宽度
            this.layout.updateColumnWidth()
        },
        bindEvents(){
            this.$refs.tableBody.$el.addEventListener('scroll',this.syncScroll,{ passive: true })
        },
        syncScroll:throttle(20,function(){
            // 这里不能用箭头函数
            let { scrollLeft } = this.$refs.tableBody.$el
            // console.log(scrollLeft)
            //同步tableBody的横向滚动距离到tableHeader
            this.$refs.tableHeader.$el.scrollLeft = scrollLeft
        }),
        unbindEvents(){
            this.$refs.tableBody.$el.removeEventListener('scroll',this.syncScroll)
        }
    },
    beforeDestroy(){
        this.tableData = null
        this.layout = null
        this.unbindEvents()
    },
    watch:{
        height:{
            immediate:true,
            handler(newVal,oldVal){
                this.layout.updateTableHeight(newVal)
            }
        }
    }
}
</script>

<style>

</style>