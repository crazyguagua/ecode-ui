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
                input:''
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

