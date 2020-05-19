# Checkbox 多选框
一组备选项中进行多选。

单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。
## 基础用法
在e-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true。
::: demo 

```html
<div class="checkbox-demo">
   <e-checkbox  v-model="isCheck" >CheckBox</e-checkbox> <span> 是否选中: {{isCheck}}</span>
</div>
<script>
    export default {
        data(){
            return {
                isCheck:true
            }
        }
    }
</script>
```
:::
## 禁用状态
设置disabled属性
::: demo 

```html
<div class="checkbox-demo">
   <e-checkbox disabled v-model="isCheck" >CheckBox</e-checkbox>
</div>
<script>
    export default {
        data(){
            return {
                isCheck:true
            }
        }
    }
</script>
```
:::

## 多选框组
::: demo `e-checkbox-group` 把多个`e-checkbox`作为一组来管理，v-model 绑定数组类型的变量。`e-checkbox` 的 label属性是该 `checkbox` 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。

```html
<div class="checkbox-demo">
    <div class="margin-bottom-15"><span >当前选中：{{checked}}</span></div>
   <e-checkbox-group v-model="checked">
     <e-checkbox v-for="checkbox in checkboxes" :key="checkbox.value" :disabled="checkbox.disabled" :label="checkbox.label" ></e-checkbox>
   </e-checkbox-group>
</div>
<script>
    export default {
        data(){
            return {
                checkboxes:[{
                    label:'香蕉',value:1
                },{
                    label:'橘子',value:2
                },{
                    label:'苹果',value:3
                },{
                    label:'菠萝蜜',value:4,disabled:true
                }],
                checked:['香蕉']
            }
        }
    }
</script>
```
:::

## 支持半选状态
`indeterminate` 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果。
::: demo 

```html
<div class="checkbox-demo">
  <div style="padding:10px"><span>当前选择：{{checked}}</span></div>
   <e-checkbox v-model="checkAll" :indeterminate="indeterminate" @change="handleCheckAll">全选</e-checkbox>
   <e-checkbox-group v-model="checked" @change="handleGroupChange">
     <e-checkbox v-for="checkbox in checkboxes" :key="checkbox.value" :disabled="checkbox.disabled" :label="checkbox.label" >{{checkbox.label}}</e-checkbox>
   </e-checkbox-group>
</div>
<script>
    export default {
        data(){
            return {
                checkboxes:[{
                    label:'香蕉',value:1
                },{
                    label:'橘子',value:2
                },{
                    label:'苹果',value:3
                },{
                    label:'榴莲',value:4
                },{
                    label:'哈密瓜',value:5
                }],
                checkAll:false,
                checked:[],
                indeterminate:false
            }
        },
        methods:{
            handleGroupChange(value){
                this.checkAll = this.checkboxes.length === value.length
                this.indeterminate = !this.checkAll && value.length>0
            },
            handleCheckAll(v){
                 if(v){
                     this.checked = this.checkboxes.map(item=>item.label)
                 }else{
                     this.checked = []
                 }
                 this.indeterminate = false
            }
        }
    }
</script>
```
:::

## 按钮样式多选框组
::: demo `e-checkbox-group`设置`button` 属性

```html
<div class="checkbox-demo">
    <div class="margin-bottom-15"><span >当前选中：{{checked}}</span></div>
   <e-checkbox-group v-model="checked" button>
     <e-checkbox v-for="checkbox in checkboxes" :key="checkbox.value" :disabled="checkbox.disabled" :label="checkbox.label" ></e-checkbox>
   </e-checkbox-group>
</div>
<script>
    export default {
        data(){
            return {
                checkboxes:[{
                    label:'香蕉',value:1
                },{
                    label:'橘子',value:2
                },{
                    label:'苹果',value:3
                },{
                    label:'菠萝蜜',value:4,disabled:true
                }],
                checked:['香蕉']
            }
        }
    }
</script>
```
:::

## checkbox 属性 。


| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
|value/v-model|绑定值 |string / number / boolean | —   | —   |
|disabled|是否禁用 |boolean | true/false   | false   |
|label|选中状态的值（只有在e-checkbox-group或者绑定对象类型为array时有效） |string / number / boolean | —  | — |
|indeterminate|设置半选状态，只负责样式控制 |boolean | true/false  | false |
|button|按钮风格的checkbox |boolean | true/false  | false |

## checkbox 事件 。


| 事件名称      | 说明          |  事件回调参数  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
|change| 选中状态发生变化后 | 更新后的值   |

## checkbox-group 属性 。


| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
|value/v-model|绑定值 |Array | —   | —   |
|button|按钮风格的checkbox |boolean | true/false  | false |

## checkbox-group 事件 。


| 事件名称      | 说明          |  事件回调参数  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
|change| 选中状态发生变化后 | 更新后的值(数组)   |