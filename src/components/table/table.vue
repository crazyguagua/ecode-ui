<template>
   <div class="ecode-table">
       <TableHeader  :columns="columns" />

       </TableBody />
   </div>
</template>

<script>
import TableHeader from './table-header.vue'
import TableBody from './table-body'
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
    data(){
        
        return {


        }
    }
}
</script>

<style>

</style>