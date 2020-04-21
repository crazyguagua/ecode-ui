import Vue from 'vue'
let columnIdSeed = 1
const TableData = Vue.extend({
    data(){
        return {
            states:{
                columns:[],
                data:[]
            }
        }
    },
    methods:{
        updateColumns(){
            let columns = this.states.columns
            let table = this.table
            columns.forEach(column => {
               Vue.set(column,'columnId',columnIdSeed++)
            });
        }
    }
})

export default TableData