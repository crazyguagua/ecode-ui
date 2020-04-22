<template>
 <div class="ecode-table-header-wrapper">
  <table class="ecode-table-header" :style="tableStyle">
     <colgroup>
        <col :name="`${tableName}-column-${c.columnId}`" :width="c.width" v-for="c in columns" :key="c.columnId" />
     </colgroup>
      <tr>
          <th v-for="c in columns" :key="c.columnId">
            <span>{{c.title}} </span>
          </th>
      </tr>
  </table>
</div>
</template>

<script>
export default {
  name:'ecode-table-header',
  props:{
    tableData:Object
  },
  computed:{
    columns(){
      return this.tableData.states.columns
    },
    tableName(){
      return this.tableData.table.tableId
    },
    tableStyle(){
      return this.tableData.table.tableStyle
    }
  }
}
</script>