## Checkbox 多选框
一组备选项中进行多选
### 基础用法

::: demo 
```html
<div class="button-demo">
   
</div>

```
:::
### API 
通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：type -> shape -> size -> loading -> disabled。

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 按钮类型 | string | — | primary default dashed text |default
| shape | 按钮形状  | string | rect circle round | rect |
| size | 按钮大小 | string | normal large small | normal |
| loading | 加载按钮 | boolean | true false | false |
| ghost | 幽灵按钮 | boolean | true false | false |
| icon | 按钮图标 | string | - | - |
| iconPosition | 按钮图标位置 |  string| left right | left |
| wave | 是否显示波浪效果 |  boolean| false true | true |
