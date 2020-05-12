## table 表格组件

### 基础表格
:::demo 配置data和column。
```html
  <div class="table-demo">
        <e-table :data="data" :columns="columns"></e-table>
  </div>
  
  <script>
    export default {
        data(){
            return {
                data:[
                    {rank:1,name:'利物浦',score:'101',star:"萨拉赫，马内 菲尔米诺",id:"001"},
                    {rank:2,name:'曼城',score:'80',star:"萨内，阿奎罗，斯特林",id:"002"},
                    {rank:3,name:'莱斯特城',score:'70',star:"瓦尔迪，詹姆斯麦迪逊，蒂莱曼斯",id:"003"},
                    {rank:4,name:'切尔西',score:'66',star:"坎特，威廉，吉鲁",id:"004"}
                ],
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

### 斑马纹
:::demo table设置 stripe属性，行与行之间，不同的颜色区分。
```html
  <div class="table-demo">
        <e-table :data="data"  stripe :columns="columns"></e-table>
  </div>
  
  <script>
    export default {
        data(){
            return {
                data:[
                    {rank:1,name:'利物浦',score:'101',star:"萨拉赫，马内 菲尔米诺",id:"001"},
                    {rank:2,name:'曼城',score:'80',star:"萨内，阿奎罗，斯特林",id:"002"},
                    {rank:3,name:'莱斯特城',score:'70',star:"瓦尔迪，詹姆斯麦迪逊，蒂莱曼斯",id:"003"},
                    {rank:4,name:'切尔西',score:'66',star:"坎特，威廉，吉鲁",id:"004"}
                ],
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

### 带边框的表格

:::demo border 属性可以让表格带边框。
```html
<div class="table-demo">
         <e-table :data="data" border :columns="columns"></e-table>
  </div>
  <script>
    export default {
        data(){
            return {
                data:[
                    {rank:1,name:'利物浦',score:'101',star:"萨拉赫，马内 菲尔米诺",id:"001"},
                    {rank:2,name:'曼城',score:'80',star:"萨内，阿奎罗，斯特林",id:"002"},
                    {rank:3,name:'莱斯特城',score:'70',star:"瓦尔迪，詹姆斯麦迪逊，蒂莱曼斯",id:"003"},
                    {rank:4,name:'切尔西',score:'66',star:"坎特，威廉，吉鲁",id:"004"}
                ],
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

### 可调整列宽的表格
:::demo 给需要调整列宽的列指定 resize属性为true，同时table必须指定border属性。
```html
  <div class="table-demo">
        <e-table :data="data" border :columns="columns"></e-table>
  </div>
  
  <script>
    export default {
        data(){
            return {
                data:[
                    {rank:1,name:'利物浦',score:'101',star:"萨拉赫，马内 菲尔米诺",id:"001"},
                    {rank:2,name:'曼城',score:'80',star:"萨内，阿奎罗，斯特林",id:"002"},
                    {rank:3,name:'莱斯特城',score:'70',star:"瓦尔迪，詹姆斯麦迪逊，蒂莱曼斯",id:"003"},
                    {rank:4,name:'切尔西',score:'66',star:"坎特，威廉，吉鲁",id:"004"}
                ],
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

### 自定义索引
:::demo column配置type="index"。
```html
  <div class="table-demo">
        <e-table :data="data" border :columns="columns"></e-table>
  </div>
  
  <script>
    export default {
        data(){
            return {
                data:[
                    {rank:1,name:'利物浦',score:'101',star:"萨拉赫，马内 菲尔米诺",id:"001"},
                    {rank:2,name:'曼城',score:'80',star:"萨内，阿奎罗，斯特林",id:"002"},
                    {rank:3,name:'莱斯特城',score:'70',star:"瓦尔迪，詹姆斯麦迪逊，蒂莱曼斯",id:"003"},
                    {rank:4,name:'切尔西',score:'66',star:"坎特，威廉，吉鲁",id:"004"}
                ],
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

### 排序
:::demo column配置sortable 。
```html
  <div class="table-demo">
        <e-table :data="data" border :columns="columns"></e-table>
  </div>
  
  <script>
    export default {
        data(){
            return {
                data:[
                    {rank:1,name:'利物浦',score:'101',star:"萨拉赫，马内 菲尔米诺",id:"001"},
                    {rank:2,name:'曼城',score:'80',star:"萨内，阿奎罗，斯特林",id:"002"},
                    {rank:3,name:'莱斯特城',score:'70',star:"瓦尔迪，詹姆斯麦迪逊，蒂莱曼斯",id:"003"},
                    {rank:4,name:'切尔西',score:'66',star:"坎特，威廉，吉鲁",id:"004"}
                ],
                columns:[
                    {type:'index',title:'编号'},
                    {key:'rank',title:'排名' ,sortable :true},
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

### 动态加载数据
:::demo 
```html
  <div class="table-demo">
        <e-table :data="data" :loading="loading" border :columns="columns"></e-table>
  </div>
  
  <script>
    export default {
        data(){
            return {
                data:[
                   
                ],
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
                this.data =  [{rank:1,name:'利物浦',score:'101',star:"萨拉赫，马内 菲尔米诺",id:"001"},
                    {rank:2,name:'曼城',score:'80',star:"萨内，阿奎罗，斯特林",id:"002"},
                    {rank:3,name:'莱斯特城',score:'70',star:"瓦尔迪，詹姆斯麦迪逊，蒂莱曼斯",id:"003"},
                    {rank:4,name:'切尔西',score:'66',star:"坎特，威廉，吉鲁",id:"004"}]
            },3000)
        }
    }
    </script>
```
:::



### 固定表格头部

:::demo  通过height属性设置table的高度，表格内容滚动，头部保持固定。
```html
<div class="table-demo">
    <e-table :data="data" border :columns="columns" height="300px" ></e-table>
  </div>
  <script>
    export default {
        data(){
            return {
                data:[
                    {rank:1,name:'利物浦',score:'101',star:"萨拉赫，马内 菲尔米诺",id:"001",
                        column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',
                    },
                    {rank:2,name:'曼城',score:'80',star:"萨内，阿奎罗，斯特林",id:"002",
                      column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',},
                    {rank:3,name:'莱斯特城',score:'70',star:"瓦尔迪，詹姆斯麦迪逊，蒂莱曼斯",id:"003",
                      column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',},
                    {rank:4,name:'切尔西',score:'66',star:"坎特，威廉，吉鲁",id:"004",
                      column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',},
                        {rank:5,name:'曼联',score:'60',star:"拉屎福德 林加德 德赫亚",id:"005",
                      column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',},
                        {rank:6,name:'狼队',score:'60',star:"劳尔希门尼斯，阿达马特劳雷，鲁本内维斯",id:"006",
                      column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',}
                ],
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

### 固定列

:::demo  列配置fixed属性，使列固定在左侧或者右侧。
```html
<div class="table-demo">
    <e-table :data="data" stripe border :columns="columns" height="300px" ></e-table>
  </div>
  <script>
    export default {
        data(){
            return {
                data:[
                    {rank:1,name:'利物浦',score:'101',star:"萨拉赫，马内 菲尔米诺",id:"001",
                        column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',
                    },
                    {rank:2,name:'曼城',score:'80',star:"萨内，阿奎罗，斯特林",id:"002",
                      column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',},
                    {rank:3,name:'莱斯特城',score:'70',star:"瓦尔迪，詹姆斯麦迪逊，蒂莱曼斯",id:"003",
                      column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',},
                    {rank:4,name:'切尔西',score:'66',star:"坎特，威廉，吉鲁",id:"004",
                      column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',},
                        {rank:5,name:'曼联',score:'60',star:"拉屎福德 林加德 德赫亚",id:"005",
                      column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',},
                        {rank:6,name:'狼队',score:'60',star:"劳尔希门尼斯，阿达马特劳雷，鲁本内维斯",id:"006",
                      column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',}
                ],
                columns:[
                    {key:'rank',title:'排名',width:'80px',fixed:'left'},
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

### 自定义单元格内容
:::demo column中通过render配置传入jsx或者render函数。
```html
<div class="table-demo">
         <e-table :data="data" border :columns="columns"></e-table>
  </div>
  <script>
    export default {
        data(){
            return {
                data:[
                    {rank:1,name:'利物浦',score:'101',star:"萨拉赫，马内 菲尔米诺",id:"001"},
                    {rank:2,name:'曼城',score:'80',star:"萨内，阿奎罗，斯特林",id:"002"},
                    {rank:3,name:'莱斯特城',score:'70',star:"瓦尔迪，詹姆斯麦迪逊，蒂莱曼斯",id:"003"},
                    {rank:4,name:'切尔西',score:'66',star:"坎特，威廉，吉鲁",id:"004"}
                ],
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