<template>
   <div class="ecode-table" :class="tableCls">
       <TableHeader  :tableData="tableData" />

       <TableBody :tableData="tableData" />
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
        }
    },
    mounted(){
        this.tableData.updateColumns()
        this.doLayout()
    },
    data(){
        let tableData = createData(this,this.$props)
        let layout = new Layout(tableData,this)
        return {
            tableData:tableData,
            layout:layout
        }
    },
    methods:{
        doLayout(){
            
            this.layout.updateColumnWidth()
        }
    },
    beforeDestroy(){
        this.tableData = null
    }
}
</script>

<style>

</style>