## Checkbox 多选框
一组备选项中进行多选。

单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。
### 基础用法

::: demo 
```html
<div class="button-demo">
   <e-checkbox  v-model="checked" >CheckBox</e-checkbox>
</div>
<script >
    export default {
        data(){
            return {
                checked:false
            }
        }
    }
</script>
```
:::
### checkbox 属性 


| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
|value/v-model|绑定值 |string / number / boolean | —   | —   |
