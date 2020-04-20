<template>
   <div class="ecode-table">
       <TableHeader  :columns="columns" />

       </TableBody />
   </div>
</template>

<script>
import TableHeader from './table-header.vue'
import TableBody from './table-body'
import { createData } from './class/helper'

let seed = 1 
export default {
    name:'table',
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
        rowKey: [String, Function],
    },
    created(){
        this.tableId = 'ecode-table-'+seed++
    },
    data(){
        this.store = createData(this)
        return {


        }
    }
}
</script>

<style>

</style>