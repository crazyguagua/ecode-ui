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
    <e-popover content="xxxxxxxxxxxxxx" placement="bottom-end">
        <e-button slot="reference">hover 激活</e-button>
    </e-popover>
    <e-popover>
     <e-button slot="reference">click 激活</e-button>
    </e-popover>
    <e-popover>
        <e-button slot="reference">focus 激活</e-button>
    </e-popover>
    <e-popover>
        <e-button slot="reference">手动 激活</e-button>
    </e-popover>
</div>
```
:::

## API
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| trigger | popover触发方式 | String | hover/click/focus/manual | click |
| title | 标题 | String | - | - |