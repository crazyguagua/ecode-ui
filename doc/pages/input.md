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
<div >
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

<<<<<<< HEAD
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
    <e-input v-model="input" placeholder="请输入" prefix-icon="ecode-search"></e-input>
    <e-input v-model="input1" placeholder="请选择日期" suffix-icon="ecode-date"></e-input>
    <div class="input-icon-demo">
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
<style>
.input-icon-demo{
    margin-top:20px
}
</style>
```

## 文本域


:::

## 文本域
type 属性为 textarea
::: demo 
```html
<div >
    <e-input type="textarea"></e-input>
</div>

```

:::
