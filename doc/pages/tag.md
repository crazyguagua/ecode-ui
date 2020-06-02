# Tag 标签
进行标记和分类的小标签。
## 何时使用
* 用于标记事物的属性和维度。
* 进行分类。
## 基础用法
:::demo 通过`closable` 设置可关闭
```html
<e-tag> Tag 1</e-tag> <e-tag closable @close="handleClose"> 可关闭</e-tag>

<script>
export default {
    methods:{
        handleClose(){
            this.eToast.warn('点击了关闭')
        }
    }
}
</script>
```
:::

## 颜色
参考了ant-design 添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。 
:::demo 
```html
<div class="margin-bottom-15">
<e-tag color="magenta"> magenta </e-tag> <e-tag color="red"> red </e-tag>
<e-tag color="volcano"> volcano </e-tag> <e-tag color="orange"> orange </e-tag>
<e-tag color="gold"> gold </e-tag> <e-tag color="lime"> lime </e-tag>
<e-tag color="green"> green </e-tag> <e-tag color="cyan"> cyan </e-tag>
<e-tag color="blue"> blue </e-tag> <e-tag color="geekblue"> geekblue </e-tag>
<e-tag color="purple"> purple </e-tag>
</div>
<div>
    <e-tag color="#03a9f4"> #03a9f4</e-tag>
    <e-tag color="#F44336"> #F44336</e-tag>
    <e-tag color="hsl(133, 85%, 50%)"> hsl(133, 85%, 50%); </e-tag>
</div>
```
:::

## 动态编辑标签
动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现
:::demo 
```html
<div class="margin-bottom-15">
    <e-tag v-for="(tag,index ) in tags" color="magenta" :key="tag.key"  closable @close="onClose(index)">
    {{tag.name}}
    </e-tag>
    <e-button v-if="!showInput" @click="add" icon="ecode-add" type="default">添加</e-button>
    <e-input ref="saveTagInput" @blur="onBlur" v-else v-model="tagName" size="small" />
</div>
<script>
export default{
    data(){
        return {
            tags:[
                {
                    key:1,name:'标签1'
                },
                 {
                    key:2,name:'标签2'
                }, {
                    key:3,name:'标签3'
                }
            ],
            tagName:'',
            showInput:false
        }
    },
    methods:{
        add(){
            this.showInput = true
             this.$nextTick(_ => {
                this.$refs.saveTagInput.$refs.input.focus();
            });
        },
        onClose(index){
            this.tags.splice(index,1)
        },
        onBlur(){
            this.showInput =false
            let key = this.tags.length+1
            this.tags.push({
                name:`${this.tagName}`,
                key:key
            })
            this.tagName = ''
        }
    }
}
</script>
```
:::

## ETag API
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| closable | 是否可以关闭 | String | Boolean | true/false | false|
| transitionName  | 过渡动画名 |  String   | - | ecode-fade|
| color  | tag颜色，预设值或者自定义颜色 |  String   | 'magenta','red','volcano','orange','gold','lime','green','cyan','blue','geekblue','purple' 或者rgb 颜色 16进制颜色 | - |


## ETag 事件
| 事件名称      | 说明          | 回调参数     |
|---------- |-------------- |----------  |
| close | 关闭tag事件   | - |
| click | 点击tag事件   | - |
