
import TableData from './data'
export function createData(table,initParam){
    let tableData =  new TableData()
    Object.keys(initParam).forEach(key=>{
        tableData.states[key] = initParam[key]
    })
    tableData.table = table
    return tableData
}