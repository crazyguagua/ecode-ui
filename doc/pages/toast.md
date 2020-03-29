## 吐司 ，移动端消息提示

:::demo
```html
<e-button @click="showToast">点击</e-button>
<script>
export default{
    methods:{
        showToast(){
            this.eToast('这是一个提示')
        }
    }
}
</script>
```
:::