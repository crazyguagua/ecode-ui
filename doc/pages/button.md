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

::: demo 在有色背景中显示的按钮
```html
<div class="button-demo">
    <e-button  size="large"> 大按钮</e-button> 
    <e-button  > 中等按钮</e-button> 
    <e-button  size="small"> 小按钮</e-button> 
</div>

```

:::