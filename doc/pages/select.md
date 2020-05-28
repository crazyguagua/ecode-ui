# Select选择器
下拉选择器

## 何时使用

弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

## 基本用法
:::demo
```html
<div class="margin-15">
    <e-select v-model="selected" placeholder="请选择" >
        <e-option v-for="option in options" :key="option.value" :label="option.label" :value="option.value">
        </e-option>
    </e-select>
</div>
<script>
export default{
    methods:{
        onChange(){
            alert(0)
        }
    },
    data(){
        return {
            selected:1,
            options:[{
                label:'利物浦【世俱杯冠军X1，欧洲超级杯冠军X4，欧冠冠军X6，联赛杯冠军X8，足总杯冠军X7，英格兰顶级联赛冠军X18】',value:1
            },{
                label:'曼城',value:2
            },{
                label:'莱切斯特',value:3
            },{
                label:'切尔西',value:4
            },{
                label:'曼联',value:5
            },{
                label:'狼队',value:6
            },{
                label:'谢菲尔德联',value:7
            },{
                label:'热刺',value:8
            },{
                label:'阿森纳',value:9
            },{
                label:'伯恩利',value:10
            },{
                label:'水晶宫',value:11
            },{
                label:'埃弗顿',value:12
            },{
                label:'纽卡斯尔',value:13
            },{
                label:'南安普顿',value:14
            },{
                label:'布莱顿',value:15
            },{
                label:'西汉姆',value:16
            },{
                label:'沃特福德',value:17
            },{
                label:'伯恩茅斯',value:18
            },{
                label:'阿斯顿维拉',value:19
            },{
                label:'诺维奇',value:20
            }]
        }
    }
}
</script>
```
:::

## ESelect API
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 绑定值 | String | boolean / string / number | - | -|