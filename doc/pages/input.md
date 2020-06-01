# 输入框

## 基础用法
基本使用 size:(default)、large、small
::: demo 
```html
<div>
    <e-input></e-input>
    <e-input :size="'large'"></e-input>
    <e-input :size="'small'"></e-input>
</div>
```
:::

## 可清除的
添加属性 clearable
::: demo

```html
<div >
    <e-input clearable v-model="input"></e-input>
</div>
<script>
    export default{
        data(){
            return {
                input:''
            }
        }
    }
</script>
```
:::

## 密码框
添加属性 show-password
::: demo
```html
<div>
    <e-input show-password v-model="input"></e-input>
</div>
<script>
    export default{
        data(){
            return {
                input:''
            }
        }
    }
</script>
```

:::

## 被禁止的
添加属性 disabled
::: demo
```html
<div >
    <e-input disabled v-model="input"></e-input>
</div>
<script>
    export default{
        data(){
            return {
                input:'禁止输入'
            }
        }
    }
</script>
```

:::

## 带icon的输入框
添加属性 带有图标标记输入类型，上方为属性添加的方式，下方为slot的形式
::: demo 
```html
<div >
    <div>   
        <e-input v-model="input" placeholder="请输入" prefix-icon="ecode-search"></e-input>
        <e-input v-model="input1" placeholder="请选择日期" suffix-icon="ecode-date"></e-input>
    </div>
    <div class="input-margin-top">
        <e-input v-model="input2" placeholder="请输入">
            <e-icon slot="prefixIcon" name="ecode-search"/>
        </e-input>
        <e-input v-model="input3" placeholder="请选择日期">
            <e-icon slot="suffixIcon" name="ecode-date"/>
        </e-input>
    </div>
    
</div>
<script>
    export default{
        data(){
            return {
                input:'',
                input1:'',
                input2:'',
                input3:''
            }
        }
    }
</script>
```



:::
## 文本域
type 属性为 textarea
::: demo 
```html
<div class="textarea-demo">
    <e-input type="textarea"></e-input>
</div>

```


:::
## 可自适应文本高度的文本域
通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 autosize 还可以设定为一个对象，指定最小行数和最大行数。
::: demo 
```html
<div class="textarea-demo">
    <div>
        <e-input autosize type="textarea" v-model="textarea"></e-input>
    </div>
    <div class="input-margin-top">
        <e-input :autosize="{minRows:2,maxRows:4}" type="textarea" v-model="textarea1"></e-input>
    </div>
    
</div>
<script>
    export default{
        data(){
            return {
                textarea:'',
                textarea1:''
            }
        }
    }
</script>
```
:::
## 输入长度限制
maxlength 和 minlength 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。对于类型为 text 或 textarea 的输入框，在使用 maxlength 属性限制最大输入长度的同时，可通过设置 show-word-limit 属性来展示字数统计。
::: demo 
```html
<div class="textarea-demo">
    <div>
        <e-input :maxlength ="5" v-model="input" show-word-limit></e-input>
    </div>
    <div class="input-margin-top">
        <e-input type="textarea" :maxlength ="10" v-model="textarea" show-word-limit></e-input>
    </div>
</div>
<script>
    export default{
        data(){
            return {
                textarea:'',
                input:''
            }
        }
    }
</script>
```

:::

### Input Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type         | 类型   | string  | text，textarea 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text |
| value / v-model | 绑定值           | string / number  | — | — |
| maxlength     | 原生属性，最大输入长度      | number          |  —  | — |
| minlength     | 原生属性，最小输入长度      | number          | — | — |
| show-word-limit | 是否显示输入字数统计，只在 `type = "text"` 或 `type = "textarea"` 时有效 | boolean    |  —  | false |
| placeholder   | 输入框占位文本    | string          | — | — |
| clearable     | 是否可清空        | boolean         | — | false |
| show-password | 是否显示切换密码图标| boolean         | — | false |
| disabled      | 禁用            | boolean         | — | false   |
| size          | 输入框尺寸，只在 `type!="textarea"` 时有效      | string          | default、large、small  | — |
| prefix-icon   | 输入框头部图标    | string          | — | — |
| suffix-icon   | 输入框尾部图标    | string          | — | — |
| rows          | 输入框行数，只对 `type="textarea"` 有效  |  number | — |  2   |
| autosize      | 自适应内容高度，只对 `type="textarea"` 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }  |  boolean / object | — |  false   |
| name | 原生属性 | string | — | — |
| readonly | 原生属性，是否只读 | boolean | — | false |
| max | 原生属性，设置最大值 | — | — | — |
| min | 原生属性，设置最小值 | — | — | — |
| step | 原生属性，设置输入字段的合法数字间隔 | — | — | — |
| form | 原生属性 | string | — | — |

### Input Slots
| name | 说明 |
|------|--------|
| prefix | 输入框头部内容，只对 `type="text"` 有效 |
| suffix | 输入框尾部内容，只对 `type="text"` 有效 |
| prepend | 输入框前置内容，只对 `type="text"` 有效 |
| append | 输入框后置内容，只对 `type="text"` 有效 |

### Input Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| change | 仅在输入框失去焦点或用户按下回车时触发 | (value: string \| number) |
| input | 在 Input 值改变时触发 | (value: string \| number) |
| clear | 在点击由 `clearable` 属性生成的清空按钮时触发 | — |

### Input Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | — |
| blur | 使 input 失去焦点 | — |


