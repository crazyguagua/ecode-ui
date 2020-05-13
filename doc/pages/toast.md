## 吐司 ，消息提示组件
可提供成功、警告和错误等反馈信息。

顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。
### 弹出位置
:::demo 可以设置弹出的位置（头部，中间，底部）。
```html
<e-button @click="showToast">头部提示</e-button>
<e-button @click="showToast1">中间显示</e-button>
<e-button @click="showToast2">底部显示</e-button>
<script>
export default{
    methods:{
        showToast(){
            this.eToast('头部提示')
        },
        showToast1(){
            this.eToast('中间显示',{position:'middle'})
        },
        showToast2(){
            this.eToast('底部显示',{position:'bottom'})
        }
    }
}
</script>
```
:::

### 不同的状态
:::demo 可以添加不同的状态提示: 成功，失败，提示，错误，通知。
```html
<e-button @click="showToast">成功</e-button>
<e-button @click="showToast1">失败</e-button>
<e-button @click="showToast2">提示</e-button>
<e-button @click="showToast3">错误</e-button>
<e-button @click="showToast4">通知</e-button>
<script>
export default{
    methods:{
        showToast(){
           this.eToast.success('操作成功！',{})
        },
        showToast1(){
           this.eToast.fail('操作失败！',{})
        },
        showToast2(){
           this.eToast.warn('警告提示！',{})
        },
        showToast3(){
            this.eToast.error('发生错误！',{})
        },
         showToast4(){
            this.eToast.message('这是一个通知',{})
        }
    }
}
</script>
```
:::

### 手动关闭
:::demo 可以手动关闭toast。
```html
<e-button @click="showToast">可以手动关闭</e-button>
<script>
export default{
    methods:{
        showToast(){
            this.eToast('手动关闭我',{duration:0,center:true,showClose:true})
        },
    }
}
</script>
```
:::

### API
- Toast.success(config)
- Toast.fail(config)
- Toast.warn(config)
- Toast.error(config)
- Toast.message(config)

### config 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| message | 提示内容 | String | — | —  |
| duration | 消息显示持续时间，单位为毫秒 | number | —  | 3000 |
| position | 消息弹出位置 | string | top/middle/bottom | top |
| showClose | 是否显示右侧关闭按钮 | bool | true/false | false |
| center | 提示文字是否居中 | bool | true/false | false |
