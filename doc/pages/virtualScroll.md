## 虚拟滚动

### 基本用法，高度固定
:::demo
```html
<template>
    <VirtualScroll style="height:300px;border:1px solid #ccc;" :data="list" :size="60">

    </VirtualScroll>
</template>
<script>

export default {

    data(){
        return {
            list:[
               
            ]
        }
    },
    created(){
        let list = []
        for(var i=0;i<20;i++){
            list.push({
                title:'标题  '+i,
                text:'内容  '+i,
                index:i
            })
        }
        this.list = list
    }
}
</script>
```
:::

### 高度不固定 自动计算高度
:::demo
```html
<template>
    <VirtualScroll style="height:300px;border:1px solid #ccc;" :data="list" :size="60">

    </VirtualScroll>
</template>
<script>

export default {

    data(){
        return {
            list:[
               
            ]
        }
    },
    created(){
        let list = []
        for(var i=0;i<20;i++){
            list.push({
                title:'标题  '+i,
                text:'内容  '+i,
                index:i
            })
        }
        this.list = list
    }
}
</script>
```
:::