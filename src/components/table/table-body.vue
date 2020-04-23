<template>
  <div class="ecode-table-body-wrapper">
    <div  v-if="data.length ==0 ">
        未查询到数据
    </div>
    <table  v-else class="ecode-table-body" :style="tableStyle">
      <colgroup>
        <col :name="`${tableName}-column-${c.columnId}`" :width="c.width" v-for="c in columns" :key="c.columnId" />
      </colgroup>
        <tr v-for="d in data" :key="d.id">
           <td v-for="c in columns" :key="d.key">
             <div class="table-cell">
               {{d[c.key]}}
             </div>
           </td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ecode-table-body",
  props: {
    tableData: Object
  },
  computed:{
    columns(){
      return this.tableData.states.columns
    },
    data(){
      return this.tableData.states.data
    },
     tableName(){
      return this.tableData.table.tableId
    },
    tableStyle(){
      let table = this.tableData.table
      return {
          width:table.tableBodyWidth,
          tableLayout:table.tableBodyWidth?'fixed':'auto'
      }
    },
  }
};
</script>

<style>
</style>