## 按钮
### 基础按钮

::: demo 主要按钮、次要按钮、虚线按钮、文字按钮。
```html
<div class="button-demo">
    <e-button type="primary"> 主要按钮</e-button> 
    <e-button type="default"> 次要按钮</e-button> 
    <e-button type="dashed"> 虚线按钮</e-button> 
    <e-button type="text"> 文字按钮</e-button>
</div>

```

:::

### 带有图标

::: demo 当需要在按钮中加入图标可以设置icon属性,shape属性可以指定按钮形状。
```html
<div class="button-demo">
    <e-button icon="ecode-search"> 查询</e-button> 
    <e-button icon="ecode-search" icon-position="right"> 查询</e-button> 
    <e-button icon="ecode-search" type="primary" shape="circle"></e-button> 
    <e-button icon="ecode-search" type="primary" shape="round"></e-button> 
    <e-button icon="ecode-search" type="primary" shape="round">查询</e-button> 
</div>

```

:::

### 按钮尺寸

::: demo 通过 size 属性设置按钮尺寸。按钮有大（large）、中(normal)、小(small)三种尺寸。
```html
<div class="button-demo">
    <e-button  size="large"> 大按钮</e-button> 
    <e-button  > 中等按钮</e-button> 
    <e-button  size="small"> 小按钮</e-button> 
</div>

```

:::

### 幽灵按钮

::: demo 在有色背景中显示的按钮。
```html
<div class="button-demo-ghost">
    <e-button ghost type="primary" > 主要</e-button> 
    <e-button  ghost > 次要</e-button> 
    <e-button ghost  type="dashed"> 虚线</e-button> 
</div>

```

:::

### 不可用状态

::: demo 给按钮设置disabled 属性让按钮不可用。
```html
<div class="button-demo">
    <e-button disabled type="primary" > 主要</e-button> 
    <e-button  disabled > 次要</e-button> 
    <e-button disabled  type="dashed"> 虚线</e-button> 
</div>

```

:::

### 危险按钮

::: demo 给按钮设置disabled 属性让按钮不可用。
```html
<div class="button-demo">
    <e-button danger  type="primary" > 主要</e-button> 
    <e-button  danger > 次要</e-button> 
    <e-button danger  type="dashed"> 虚线</e-button> 
    <e-button danger  type="text"> 文字</e-button> 
</div>

```

:::

### loading按钮

::: demo 给按钮设置loading按钮。
```html
<div class="button-demo">
    <e-button loading  type="primary" > 主要</e-button> 
    <e-button  danger  loading> 次要</e-button> 
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
