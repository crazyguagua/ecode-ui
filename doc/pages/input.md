## 输入框

### 基础用法
::: demo 基本使用 size:(default)、large、small
```html
<div>
    <e-input></e-input>
    <e-input :size="'large'"></e-input>
    <e-input :size="'small'"></e-input>
</div>
```
:::

### 可清除的

::: demo 添加属性 clearable
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

### 密码框

::: demo 添加属性 show-password
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

### 被禁止的

::: demo 添加属性 disabled
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

### 带icon的输入框

::: demo 添加属性 带有图标标记输入类型
```html
<div >
    <e-input v-model="input" placeholder="请选择日期"
    suffix-icon="ecode-date"></e-input>
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

### 文本域

::: demo type 属性为 textarea
```html
<div >
    <e-input type="textarea"></e-input>
</div>

```

:::
