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
                    {key:'rank',title:'排名',width:200},
                     {key:'name',title:'球队',width:200},
                      {key:'score',title:'积分',width:200},
                       {key:'star',title:'球星',}
                ]
            }
        }
    }
    </script>
```
:::

### 带边框的表格

:::demo bordered 属性可以让表格带边框 
```html
<div class="table-demo">
         <e-table :data="data" bordered :columns="columns"></e-table>
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

### 出现滚动条的表格

:::demo 
```html
<div class="table-demo">
         <e-table :data="data" bordered :columns="columns"></e-table>
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
                      column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',}
                ],
                columns:[
                    {key:'rank',title:'排名',width:80},
                     {key:'name',title:'球队',width:180},
                      {key:'score',title:'积分',width:80},
                       {key:'star',title:'球星',minWidth:180},
                       {key:'column1',title:'column1',width:280},
                       {key:'column3',title:'column3',width:280},
                       {key:'column4',title:'column3',width:280},
                       {key:'column4',title:'column4',width:280},
                       {key:'column5',title:'column5',width:280},
                ]
            }
        }
    }
    </script>

```

:::