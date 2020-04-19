<template>
   <div class="ecode-table">
       <TableHeader  />

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
        data:Array,
    }
}
</script>

<style>

</style>