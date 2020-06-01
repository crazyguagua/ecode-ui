# Popover 气泡卡片
## 何时使用
当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

:::tip
Popover 的属性与 Tooltip 很类似，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。
:::

## 基础用法
:::demo trigger属性用于设置何时触发 Popover，支持四种触发方式：hover，click，focus 和 manual。对于触发 Popover 的元素，有两种写法：使用 slot="reference" 的具名插槽，或使用自定义指令v-popover指向 Popover 的索引ref。
```html
<div class="margin-15">
     <e-popover trigger="click"  title="点击显示popover">
        <e-button slot="reference">点击 激活</e-button>
        <div slot="content">
          <p >这是一段文本</p>
        </div>
    </e-popover>
     <e-popover trigger="hover"  title="移入显示popover">
        <e-button slot="reference">移入 激活</e-button>
        <div slot="content">
          <p >这是一段文本</p>
        </div>
    </e-popover>
    <e-popover trigger="focus"  title="激活状态显示popover">
        <e-button slot="reference">focus 激活</e-button>
        <div slot="content">
          <p >这是一段文本</p>
        </div>
    </e-popover>
    <e-popover trigger="manual" placement="right"  v-model="showPopper" title="手动显示popover" content="这是一段文本">
        <e-button slot="reference" @click="showPopper = !showPopper">{{btnText}}</e-button>
    </e-popover>
</div>
<script>
export default{
    data(){
        return {
            showPopper:true
        }
    },
    computed:{
        btnText(){
            return !this.showPopper?'点击显示':'点击关闭'
        }
    }
}
</script>
```
:::

## API
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| trigger | popover触发方式 | String | hover/click/focus/manual | click |
| title | 标题 | String | - | - |
| popoverClass | poppover 弹出层的自定义样式 | String | - | - |

## Events
| 事件名称      | 说明          | 回调参数      |
|----------     |-------------- |---------- |
| show | popover卡片显示时 | 无|
| hide | popover卡片隐藏时 | 无|
| after-enter | popover卡片入场动画完成后 | 无|
| after-leave | popover卡片离开动画完成后 | 无|