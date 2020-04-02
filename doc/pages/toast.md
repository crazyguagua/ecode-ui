## 吐司 ，移动端消息提示

:::demo
```html
<e-button @click="showToast">点击</e-button>
<e-button @click="showToast1">中间显示</e-button>
<e-button @click="showToast2">底部显示</e-button>
<script>
export default{
    methods:{
        showToast(){
            this.eToast('这是一个提示这是一个提示这是一个提示这是一个提示这是一个提示')
        },
        showToast1(){
            this.eToast('中间显示',{duration:1000,position:'middle'})
        },
        showToast2(){
            this.eToast('底部显示',{duration:1000,position:'bottom'})
        }
    }
}
</script>
```
:::