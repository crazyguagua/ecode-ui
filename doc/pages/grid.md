## 栅格系统
网页布局，将一行分为24格，可以设置间距，水平方向，垂直方向的对其方式，以及手机端，pad端，pc端适配。

### 基础布局
:::demo 通过span属性设置每一列所占的空间。
```html
    <e-row >
     <e-col span="3"><div class="demo block1"></div></e-col>
     <e-col span="5"><div class="demo block2"></div></e-col>
     <e-col span="16"><div class="demo block3"></div></e-col>
    </e-row>
    <e-row >
     <e-col span="12"><div class="demo block1"></div></e-col>
     <e-col span="12"><div class="demo block2"></div></e-col>
    </e-row>
    <style lang="scss">
        .demo-grid{
            .ecode-row{
                margin-bottom:20px;
            }
            .demo{
                border-radius:4px;
                min-height:38px;
                background:#ccc;
                &.block1{
                    background:#3a3a3a;
                }
                &.block2{
                    background:#949191;
                }
            }
        }
      
    </style>
```
:::

### 设置间隔

:::demo 通过gutter属性设置列之间的间隔
```html
<e-row gutter="20">
    <e-col span="12"><div class="demo block1"></div></e-col>
    <e-col span="12"><div class="demo block2"></div></e-col>
</e-row>
 <style lang="scss">
    .demo-grid{
        .ecode-row{
            margin-bottom:20px;
        }
        .demo{
            border-radius:4px;
            min-height:50px;
            background:#ccc;
            margin-bottom:5px;
            &.block1{
                background:#3a3a3a;
            }
            &.block2{
                background:#949191;
            }
        }
    }
      
</style>
```
:::

### 偏移量
:::demo 设置栅格的偏移量
```html
    <e-row gutter="20">
        <e-col span="8"><div class="demo block1"></div></e-col>
        <e-col span="5" :offset="3"><div class="demo block1"></div></e-col>
        <e-col span="5" :offset="3"><div class="demo block1"></div></e-col>
    </e-row>

    <e-row gutter="20">
        <e-col span="6" :offset="6"><div class="demo block1"></div></e-col>
        <e-col span="6" :offset="6"><div class="demo block1"></div></e-col>
    </e-row>

    <e-row gutter="20">
        <e-col span="12" :offset="6"><div class="demo block1"></div></e-col>
    </e-row>
```
:::

### 对齐方式
:::demo align属性可以设置垂直方向的对其方式
```html
    <e-row gutter="20" align="bottom">
        <e-col span="5"><div class="demo align1"></div></e-col>
        <e-col span="5" ><div class="demo align2"></div></e-col>
        <e-col span="5" ><div class="demo align3"></div></e-col>
    </e-row>
     <e-row gutter="20" justify="space-between">
        <e-col span="5"><div class="demo align1"></div></e-col>
        <e-col span="5" ><div class="demo align2"></div></e-col>
        <e-col span="5" ><div class="demo align3"></div></e-col>
    </e-row>
    <style lang="scss">
        .demo.align1{
            background:#3a3a3a;
            height:50px;
        }
        .demo.align2{
            background:#3a3a3a;
            height:60px;
        }
        .demo.align3{
            background:#3a3a3a;
            height:70px;
        }
    </style>
```
:::

### 响应式
:::demo  分为4个屏幕尺寸：手机，pad,窄屏幕电脑，宽屏幕电脑
```html
    <e-row gutter="20" justify="end">
        <e-col :phone="24" :pad="8" :narrow-pc="3" :pc="5">
            <div class="demo"   ></div>
        </e-col >
        <e-col :phone="23" :pad="8" :narrow-pc="4" :pc="6" >
            <div class="demo" ></div>
        </e-col >
        <e-col :phone="{span:22,offset:2}" :pad="8" :narrow-pc="5" :pc="7" >
            <div class="demo"  ></div>
        </e-col >
    </e-row>
    <style>
        .demo-grid{
        }
    </style>
```

:::

### e-row 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| gutter | 栅格间隔 | number | — | 0 |
| justify | flex 布局下的水平对齐方式 | string | start/end/center/space-around/space-between | start |
| align | flex 布局下的垂直对齐方式 | string | top/middle/bottom | top |

### e-col 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| span | 栅格个数 | number | — | 0 |
| offset | 栅格偏移量  | number | 1-24 | 0 |
| phone | 手机端 栅格和偏移量设置 | number,object | {span:11,offset:1} | - |