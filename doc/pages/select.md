

## 大数据下拉框

:::demo
```html
    <e-select  clearable class="margin-bottom-15" v-model="selected" placeholder="请选择" :data="options" >
        <e-option v-for="option in options" :disabled="option.disabled" :key="option.value" :label="option.label" :value="option.value">
        </e-option>
    </e-select>
<script>
export default{
    methods:{
    },
    created(){
    },
    data(){
        var arr = []
        for(let i=0;i<10000;i++){
            arr.push({
                label:'数据'+i,
                value:'值：'+i
            })
        }
        return {
            selected:[],
            options:arr
        }
    }
}
</script>
```
:::
## ESelect API
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 绑定值 | String | Boolean / string / number | - | -|
| disabled  | 是否禁用 |  Boolean   | true/false | false|
| clearable  | 是否可以清空选项 |  Boolean   | true/false | false|
| readonly  | 是否只读 |  Boolean   | true/false | false|
| size  | 输入框尺寸 |  String   | medium/small/mini | medium|
| multiple  | 是否多选 |  Boolean   | true/false | false |

