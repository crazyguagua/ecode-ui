<template>
   <div class="ecode-table" :class="tableCls" >
       <TableHeader  :tableData="tableData" ref="tableHeader" />

       <TableBody :tableData="tableData" ref="tableBody" />
   </div>
</template>

<script>
import TableHeader from './table-header.vue'
import TableBody from './table-body'
import { createData } from './class/helper'
import Layout from './class/layout'

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
        tableStyle(){
            return {
                width:this.tableWidth,
                tableLayout:this.tableWidth!='100%'?'fixed':'auto'
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
            tableWidth:'100%'
        }
    },
    methods:{
        doLayout(){
            
            this.layout.updateColumnWidth()
        },
        bindEvents(){
            this.$refs.tableBody.$el.addEventListener('scroll',this.syncScroll,{ passive: true })
        },
        syncScroll(e){
            console.log(e)
        }
    },
    beforeDestroy(){
        this.tableData = null
        this.layout = null
    }
}
</script>

<style>

</style>