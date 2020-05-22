# tooltip 提示
简单的文字提示气泡框。 
## 何时使用
鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 title 提示，提供一个按钮/文字/操作的文案解释。

:::tip
tooltip 默认是鼠标移入的时候才插入document节点中，鼠标移出，dom就会被移除。
:::

## 基本用法

:::demo 用具名 slot 分发content，替代e-tooltip中的content属性。
```html
<div class="margin-15">
    <e-tooltip :enterable="false" content="2019-2020 夏季赛冠军" >
        <div class="inline-block marin-15"><e-button>WE</e-button></div>
    </e-tooltip>

     <e-tooltip >
        <div class="inline-block  marin-15"><e-button>利物浦</e-button></div>
        <div class="" slot="content">
            <h3>2019-2020英超冠军</h3>
            <p>利物浦!!!!!!</p>
            <p><em>YNWA</em></p>
        </div>
    </e-tooltip>

     <e-tooltip placement="top"  content="这个tooltip可以一直显示" :value="true" >
        <div class="inline-block marin-15 always"><e-icon name="ecode-fail"></e-icon>一直显示</div>
    </e-tooltip>
</div>
```
:::

## 12个方位

:::demo
```html
<div class="center-box">
    <div class="left-box">
      <e-tooltip placement="left-start" > 
          <e-button>LT</e-button>
          <div slot="content"> LeftTop <p >气泡在左侧且头部对齐</p></div>
      </e-tooltip>
       <e-tooltip  placement="left" > 
           <e-button>Left</e-button>
            <div slot="content"> Left <p >气泡在左侧且中部对齐</p></div>
        </e-tooltip>
        <e-tooltip  placement="left-end" > 
              <e-button>LB</e-button>
             <div slot="content"> LeftBottom <p >气泡在左侧且底部对齐</p></div>
        </e-tooltip>
    </div>
    <div class="right-box">
         <e-tooltip  placement="right-start" > 
            <e-button>RT</e-button>
             <div slot="content"> RightTop <p >气泡在右侧且顶部对齐</p></div>
         </e-tooltip>
         <e-tooltip  placement="right" > 
            <e-button>Right</e-button>
             <div slot="content"> Right <p >气泡在右侧且中对齐</p></div>
         </e-tooltip>
         <e-tooltip  placement="right-end" > 
            <e-button>RB</e-button>
             <div slot="content"> RightBottom <p >气泡在右侧且底部对齐</p></div>
         </e-tooltip>
    </div>
    <div class="top-box">
         <e-tooltip  placement="top-start" > 
            <e-button>TL</e-button>
             <div slot="content"> TopLeft <p >气泡在上部且左侧对齐</p></div>
         </e-tooltip>
        <e-tooltip  placement="top" > 
            <e-button>TOP</e-button>
             <div slot="content"> TOP <p >气泡在上部且中部对齐</p></div>
         </e-tooltip>
       <e-tooltip  placement="top-end" > 
            <e-button>TR</e-button>
             <div slot="content"> TopRight <p >气泡在上部且右侧对齐</p></div>
         </e-tooltip>
    </div>
    <div class="bottom-box">
         <e-tooltip  placement="bottom-start" > 
            <e-button>BL</e-button>
             <div slot="content"> BottomLeft <p >气泡在下部且左侧对齐</p></div>
         </e-tooltip>
         <e-tooltip  placement="bottom" > 
            <e-button>Bottom</e-button>
             <div slot="content"> Bottom <p >气泡在下部且中部对齐</p></div>
         </e-tooltip>
        <e-tooltip  placement="bottom-end" > 
            <e-button>BR</e-button>
             <div slot="content"> BottomRight <p >气泡在下部且右侧对齐</p></div>
         </e-tooltip>
    </div>
</div>
```
:::

## 主题
深色dark 和浅色light，通过配置`theme`属性实现。
:::demo
```html
<div class="margin-15">
    <e-tooltip  content="这是一个深色的tooltip" theme="dark" >
        <div class="inline-block marin-15"><e-button type="primary">深色</e-button></div>
    </e-tooltip>

     <e-tooltip placement="bottom-end" content="这是一个浅色的tooltip" theme="light" >
        <div class="inline-block  marin-15"><e-button >浅色</e-button></div>
    </e-tooltip>
     <e-tooltip  placement="right-start" content="这是一个朴素的tooltip" theme="plain" >
        <div class="inline-block  marin-15"><e-button >朴素</e-button></div>
    </e-tooltip>
</div>
```
:::

## API
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value/v-model | 是否一直显示tooltip | Boolean | true/false | false |
| theme | 默认提供的主题 | String | dark/light | dark |
| placement | tooltip 出现的位置 | string | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end  | top |
| content | 显示的内容，也可以通过 slot#content 传入 DOM | string/slot | - | - |
| enterable | 鼠标是否可以进入tooltip | bool | true/false | true |
| tooltipClass | tooltip自定义样式 | string | - |  |
| transition | tooltip自定义过渡动画 | string | - | ecode-fade |
