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
    <style lang="scss">
        .demo-grid{
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