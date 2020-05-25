## radio
在一组备选项中进行单选
 

## 基础用法
由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。
::: demo 要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。
```html
<div>
    <e-radio v-model="radio" label="1">单选框</e-radio>
    <e-radio v-model="radio" label="2">单选框</e-radio>
</div>
<script>
export default {

    data(){
        return {
            radio: '1'
        }
    }

}

</script>
```
:::


## 禁用状态
单选框不可用的状态。
::: demo 只要在e-radio元素中设置disabled属性即可，它接受一个Boolean，true为禁用。
```html
<div>
    <e-radio v-model="radio" label="1">单选框</e-radio>
    <e-radio v-model="radio" disabled label="2">禁用</e-radio>
</div>
<script>
export default {

    data(){
        return {
            radio: '2'
        }
    }

}

</script>
```

:::


## 单选框组
适用于在多个互斥的选项中选择的场景
::: demo 结合el-radio-group元素和子元素el-radio可以实现单选组，在el-radio-group中绑定v-model，在el-radio中设置好label即可，无需再给每一个el-radio绑定变量，另外，还提供了change事件来响应变化，它会传入一个参数value。
```html
<div>
    <e-radio-group v-model="radio">
        <e-radio label="上路">上路</e-radio>
        <e-radio label="中路">中路</e-radio>
        <e-radio label="下路">下路</e-radio>
    </e-radio-group>
</div>
<script>
export default {

    data(){
        return {
            radio: '下路'
        }
    }

}

</script>
```
:::
