## Checkbox 多选框
一组备选项中进行多选。

单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。
### 基础用法
在e-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true。
::: demo 

```html
<div class="checkbox-demo">
   <e-checkbox  v-model="isCheck" >CheckBox</e-checkbox>
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
### 禁用状态
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
### checkbox 属性 。


| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
|value/v-model|绑定值 |string / number / boolean | —   | —   |
|disabled|是否禁用 |boolean | true/false   | false   |

