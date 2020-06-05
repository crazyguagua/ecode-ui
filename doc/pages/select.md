# Select选择器
下拉选择器

## 何时使用

弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

## 基本用法
 select可以设置`disabled`让下拉框不可选择，option设置`disabled`让某个选项不可选择,select 设置`clearable`属性让下拉框可以清空选项。
:::demo 
```html
<div class="margin-15">
    
    <e-select class="margin-bottom-15" v-model="selected" placeholder="请选择" >
        <e-option v-for="option in options" :disabled="option.disabled" :key="option.value" :label="option.label" :value="option.value">
        </e-option>
    </e-select>
      <e-select disabled class="margin-bottom-15" v-model="selected1" placeholder="请选择" >
        <e-option v-for="option in options" :disabled="option.disabled" :key="option.value" :label="option.label" :value="option.value">
        </e-option>
    </e-select>
    <e-select class="margin-bottom-15" readonly v-model="selected2" placeholder="请选择" >
        <e-option v-for="option in options" :disabled="option.disabled" :key="option.value" :label="option.label" :value="option.value">
        </e-option>
    </e-select>
    <e-select clearable class="margin-bottom-15" v-model="selected3" placeholder="请选择" >
        <e-option v-for="option in options" :disabled="option.disabled" :key="option.value" :label="option.label" :value="option.value">
        </e-option>
    </e-select>

    <e-select size="small" class="margin-bottom-15" v-model="selected4" placeholder="请选择" >
        <e-option v-for="option in options" :disabled="option.disabled" :key="option.value" :label="option.label" :value="option.value">
        </e-option>
    </e-select>
</div>
<script>
export default{
    methods:{
    },
    created(){
        let t1 = Math.random()*5000
        let t2 = Math.random()*5000
        setTimeout(()=>{
            this.options = Object.assign([],this.$teams)
        },t1)
        setTimeout(()=>{
            this.selected = 1
            this.selected4=11
        },t2)
    },
    data(){
        return {
            selected:null,
            selected1:1,
            selected2:3,
            selected3:10,
            selected4:null,
            options:[]
        }
    }
}
</script>
```
:::

## 自定义option模板
e-option 的slot可以自定义内容。
:::demo
```html
    <e-select class="margin-bottom-15" v-model="selected" placeholder="请选择" >
        <e-option v-for="option in options" :disabled="option.disabled" :key="option.value" :label="option.label" :value="option.value">
            <span class="rank">
            第{{option.value}}名
            </span>
            <span class="name">
            {{option.label}}
            </span>
        </e-option>
    </e-select>
    <script>
export default{
    methods:{
    },
    created(){
    },
    data(){
        return {
            selected:1,
            options:this.$teams
        }
    }
}
</script>
```
:::
## 基础多选

:::demo
```html
    <e-select style="width:300px;" multiple clearable class="margin-bottom-15" v-model="selected" placeholder="请选择" >
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
        return {
            selected:[1,2,],
            options:this.$teams
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

