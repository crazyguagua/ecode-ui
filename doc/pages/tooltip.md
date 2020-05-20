# tooltip 提示
简单的文字提示气泡框。 
## 何时使用
鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 title 提示，提供一个按钮/文字/操作的文案解释。

## 基本用法

:::demo
```html
<div class="margin-15">
    <e-tooltip content="2019-2020 夏季赛冠军" >
        <div class="inline-block marin-15"><e-button>WE</e-button></div>
    </e-tooltip>

     <e-tooltip content="2019-2020英超冠军" >
        <div class="inline-block  marin-15"><e-button>利物浦</e-button></div>
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