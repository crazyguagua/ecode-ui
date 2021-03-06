## 虚拟滚动

### 基本用法，高度固定
:::demo
```html
<template>
    <VirtualScroll :itemRender="itemRender" style="height:400px;border:1px solid #ccc;width:500px;" :data="list" :size="60">

    </VirtualScroll>
</template>
<script>
const VerticalItem = require('../components/verticalItem.js').default
export default {

    data(){
        return {
            list:[
               
            ],
            itemRender:VerticalItem
        }
    },
    created(){
        let list = []
        for(let i=0;i<200;i++){
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
    <VirtualScroll :itemRender="itemRender" style="height:400px;border:1px solid #ccc;width:500px;" :data="list" :size="50" variable>

    </VirtualScroll>
</template>
<script>
const  Mock = require('mockjs')
const VerticalItem = require('../components/verticalItem.js').default
const Random = Mock.Random;
let images = [1,2,3].map(x=>Random.image('200x100', '#ccc', Random.word(2,6))); //随机成长3个图片信息 尺寸 颜色 和随机字母的数组
let data = []
    for (let i = 0; i < 1000; i++) {

        let content = Random.cparagraph(0,10);//随机生成0到10段句子

        data.push({
            index:i,
            id: i,//固有id
            title: Random.cword(10,300),//随机长度为在8到20内的汉字字符串
            desc: content,
            tag: Random.cword(2,6),//随机长度为2 到 6 的汉字
            views: Random.integer(100,5000),//100到5000的随机整数
            // image: images.slice(0,Random.integer(1,3)),//截取随机一到三个图片
            time:Random.date()
        })
    }
export default {

    data(){
        return {
            list:[
               
            ],
            itemRender:VerticalItem
        }
    },
    created(){
        this.list = data
    }
}
</script>
```
:::

### 横向滚动
:::demo
```html
<template>
    <VirtualScroll variable direction="horizontal" :itemRender="horizontalItem" style="height:300px;border:1px solid #ccc;width:500px;" :data="list" :size="50" >

    </VirtualScroll>
</template>
<script>
const  Mock = require('mockjs')
const horizontalItem = require('../components/horizontalItem').default
console.log(horizontalItem)
const Random = Mock.Random;
let data = []
const sizes = [380, 390,410, 430, 450,415,470]
    for (let i = 0; i < 1000; i++) {

        let content = Random.cparagraph(0,10);//随机生成0到10段句子

        data.push({
            index:i,
            id: i,//固有id
            title: Random.cword(80,150),//随机长度为在8到20内的汉字字符串
            size:sizes[Math.floor(Math.random()*sizes.length)],
            time:Random.date()
        })
    }
export default {
    data(){
        return {
            list:[
               
            ],
            horizontalItem:horizontalItem
        }
    },
    created(){
        this.list = data
    }
}
</script>
```
:::