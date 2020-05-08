<template>
  <table :class="['ecode-table-header',{'ecode-table-body-fixed':fixed}]" :style="tableStyle">
     <colgroup>
        <col :name="`${tableName}-column-${c.columnId}`" :width="c.calcWidth" v-for="c in columns" :key="c.columnId" />
     </colgroup>
      <tr>
          <th 
             onMouseDown={this.onMouseDown}
             v-for="c in columns" :key="c.columnId" :class="{'is-hidden':c.fixed != fixed}">
            <span>{{c.title}} </span>
          </th>
      </tr>
  </table>
</template>

<script>
export default {
  name:'ecode-table-header',
  props:{
    tableData:Object,
    fixed:{type:String,default:''}
  },
  computed:{
    columns(){
      return this.tableData.states.columns
    },
    tableName(){
      return this.tableData.table.tableId
    },
    tableStyle(){
      let table = this.tableData.table
      return {
          width:table.tableTotalWidth,
          tableLayout:'fixed'
      }
    },
  },
  methods:{
    onMouseDown(){

    }
  }
}
</script>