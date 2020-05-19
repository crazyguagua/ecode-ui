# table 表格组件

## 基础表格
:::demo 配置data和column。
```html
  <div class="table-demo">
        <e-table :data="data" :columns="columns"></e-table>
  </div>
  
  <script>
    export default {
        data(){
            return {
                data:this.tableData,
                columns:[
                    {key:'rank',title:'排名'},
                     {key:'name',title:'球队'},
                      {key:'score',title:'积分'},
                       {key:'star',title:'球星',}
                ]
            }
        }
    }
    </script>
```
:::

## 斑马纹
:::demo table设置 stripe属性，行与行之间，不同的颜色区分。
```html
  <div class="table-demo">
        <e-table :data="data"  stripe :columns="columns"></e-table>
  </div>
  
  <script>
    export default {
        data(){
            return {
                data:this.tableData,
                columns:[
                    {key:'rank',title:'排名'},
                     {key:'name',title:'球队'},
                      {key:'score',title:'积分'},
                       {key:'star',title:'球星',}
                ]
            }
        }
    }
    </script>
```
:::

## 带边框的表格

:::demo border 属性可以让表格带边框。
```html
<div class="table-demo">
         <e-table :data="data" border :columns="columns"></e-table>
  </div>
  <script>
    export default {
        data(){
            return {
                data:this.tableData,
                columns:[
                    {key:'rank',title:'排名',width:80},
                     {key:'name',title:'球队',width:80},
                      {key:'score',title:'积分',width:80},
                       {key:'star',title:'球星',minWidth:80}
                ]
            }
        }
    }
    </script>

```

:::

## 可调整列宽的表格
:::demo 给需要调整列宽的列指定 resize属性为true，同时table必须指定border属性。
```html
  <div class="table-demo">
        <e-table :data="data" border :columns="columns"></e-table>
  </div>
  
  <script>
    export default {
        data(){
            return {
                data:this.tableData,
                columns:[
                    {key:'rank',title:'排名'},
                     {key:'name',title:'球队'},
                      {key:'score',title:'积分'},
                       {key:'star',title:'球星',}
                ]
            }
        }
    }
    </script>
```
:::

## 自定义索引
:::demo column配置type="index"。
```html
  <div class="table-demo">
        <e-table :data="data" border :columns="columns"></e-table>
  </div>
  
  <script>
    export default {
        data(){
            return {
                data:this.tableData,
                columns:[
                    {type:'index',title:'编号'},
                    {key:'rank',title:'排名'},
                     {key:'name',title:'球队'},
                      {key:'score',title:'积分'},
                       {key:'star',title:'球星',}
                ]
            }
        }
    }
    </script>
```
:::

## 排序
:::demo column配置sortable 。
```html
  <div class="table-demo">
        <e-table :data="data" border :columns="columns"></e-table>
  </div>
  
  <script>
    export default {
        data(){
            return {
                data:this.tableData,
                columns:[
                    {type:'index',title:'编号'},
                    {key:'rank',title:'排名' },
                     {key:'name',title:'球队',sortable :true},
                      {key:'score',title:'积分'},
                       {key:'star',title:'球星',}
                ]
            }
        }
    }
    </script>
```
:::

## 动态加载数据
:::demo 
```html
  <div class="table-demo">
        <e-table :data="data" :loading="loading" border :columns="columns"></e-table>
  </div>
  
  <script>
    export default {
        data(){
            return {
                data:this.tableData,
                columns:[
                    {key:'rank',title:'排名'},
                     {key:'name',title:'球队'},
                      {key:'score',title:'积分'},
                       {key:'star',title:'球星',width:300}
                ],
                loading:false
            }
        },
        created(){
            this.loading = true
            setTimeout(()=>{
                 this.loading = false
                this.data =  this.tableData
            },3000)
        }
    }
    </script>
```
:::



## 固定表格头部

:::demo  通过height属性设置table的高度，表格内容滚动，头部保持固定。
```html
<div class="table-demo">
    <e-table :data="data" border :columns="columns" height="300px" ></e-table>
  </div>
  <script>
    export default {
        data(){
            return {
                data:this.tableData,
                columns:[
                    {key:'rank',title:'排名',width:'80px'},
                     {key:'name',title:'球队',width:'50%'},
                      {key:'score',title:'积分',width:80},
                       {key:'star',title:'球星',minWidth:180},
                       {key:'column1',title:'column1',width:280},
                       {key:'column3',title:'column3',width:280},
                       {key:'column4',title:'column3',width:280},
                       {key:'column5',title:'column5',width:280},
                ]
            }
        }
    }
    </script>

```

:::

## 固定列

:::demo  列配置fixed属性，使列固定在左侧或者右侧。
```html
<div class="table-demo">
    <e-table :data="data" stripe border :columns="columns" height="300px" ></e-table>
  </div>
  <script>
    export default {
        data(){
            return {
                data:this.tableData,
                columns:[
                    {key:'rank',title:'排名',width:'180px',fixed:'left'},
                     {key:'name',title:'球队',width:'50%'},
                      {key:'score',title:'积分',width:80},
                       {key:'star',title:'球星',minWidth:180},
                       {key:'column1',title:'column1',width:280},
                       {key:'column3',title:'column3',width:280},
                       {key:'column4',title:'column3',width:280},
                       {key:'column5',title:'column5',width:280},
                        {key:'op',fixed:'right',width:'180px',title:'操作',render(h,row,col){
                           return <div >
                                       <e-button   size="small" >编辑</e-button>
                                       <e-button  danger  size="small" >删除</e-button>
                                  </div>
                       }}
                ]
            }
        }
    }
    </script>

```

:::

## 自定义单元格内容
:::demo column中通过render配置传入jsx或者render函数。
```html
<div class="table-demo">
         <e-table :data="data" border :columns="columns"></e-table>
  </div>
  <script>
    export default {
        data(){
            return {
                data:this.tableData,
                columns:[
                    {key:'rank',title:'排名',width:'80px'},
                     {key:'name',title:'球队'},
                      {key:'score',title:'积分',width:'80px'},
                       {key:'star',title:'球星',render(h,row,col){
                           return h('div',[
                               h('span',row.star),h('e-icon',{props:{name:'ecode-zuqiu'}})
                           ])
                       }},
                       {key:'op',width:'180px',title:'操作',render(h,row,col){
                           return <div >
                                       <e-button danger type="primary"  size="small" >删除</e-button>
                                  </div>
                       }}
                ]
            }
        }
    }
    </script>

```
:::

## 行单选
选择单行数据时使用色块表示。
:::demo 
```html
<div class="table-demo">
    <div class="margin-15">
        <e-button size="normal" type="primary" @click="select(data[1])">选中第二行</e-button>
        <e-button size="normal" @click="select">取消选中</e-button>
    </div>
    <e-table ref="table" @current-change="onCurrentChange" :data="data" border highlight-current-row :columns="columns"></e-table>
  </div>
  <script>
    export default {
        data(){
            return {
                data:this.tableData,
                columns:[
                    {type:'index',width:100},
                    {key:'rank',title:'排名',width:'80px'},
                     {key:'name',title:'队伍'},
                      {key:'score',title:'积分',width:'80px'},
                       {key:'star',title:'明星',key:'star'}

                ],
                cRow:null
            }
        },
        methods:{
            onCurrentChange(row){
                this.cRow = row
            },
            select(row){
                this.$refs.table.selectRow(row)
            },
        }
    }
    </script>

```
:::

## 行多选
在第一列设置`type=select`，第一列会生成checkbox，自动带有全选功能。
:::demo 
```html
<div class="table-demo">
    <div class="margin-15">当前选中行：{{selectRows}}</div>
    <e-table ref="table" @selection-change="onChange"  :data="data" border :columns="columns"></e-table>
  </div>
  <script>
    export default {
        data(){
            return {
                data:this.tableData,
                columns:[
                    {type:'select',width:60},
                    {key:'rank',title:'排名',width:'80px'},
                     {key:'name',title:'队名'},
                      {key:'score',title:'战绩',width:'80px'},
                       {key:'star',title:'首发',key:'star'}

                ],
                selectRows:[]
            }
        },
        methods:{
            onChange(selectRows){
                this.selectRows = selectRows.map(item=>item.name)
            }
        }, 
        created(){
        }
    }
    </script>

```
:::