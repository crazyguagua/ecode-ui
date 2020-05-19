# 输入框

## 基础用法
::: demo 基本使用(default)、large、small
```html
<div>
    <e-input></e-input>
    <e-input :size="'large'"></e-input>
    <e-input :size="'small'"></e-input>
</div>
```

:::

## 可清除的

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

## 文本域

::: demo type 属性为 textarea
```html
<div >
    <e-input type="textarea"></e-input>
</div>

```

:::
