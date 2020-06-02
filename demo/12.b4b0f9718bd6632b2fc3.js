(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{65:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"content ecode-doc"},[r("h1",[t._v("Popover 气泡卡片")]),t._v(" "),t._m(0),t._v(" "),r("p",[t._v("当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。")]),t._v(" "),r("p",[t._v("和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("demo-block",[r("div",[r("p",[t._v('trigger属性用于设置何时触发 Popover，支持四种触发方式：hover，click，focus 和 manual。对于触发 Popover 的元素，有两种写法：使用 slot="reference" 的具名插槽，或使用自定义指令v-popover指向 Popover 的索引ref。')])]),t._v(" "),r("template",{slot:"source"},[r("element-demo0")],1),t._v(" "),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[t._v('<div class="margin-15">\n     <e-popover trigger="click"  title="点击显示popover">\n        <e-button slot="reference">点击 激活</e-button>\n        <div slot="content">\n          <p >这是一段文本</p>\n        </div>\n    </e-popover>\n     <e-popover trigger="hover"  title="移入显示popover">\n        <e-button slot="reference">移入 激活</e-button>\n        <div slot="content">\n          <p >这是一段文本</p>\n        </div>\n    </e-popover>\n    <e-popover trigger="focus"  title="激活状态显示popover">\n        <e-button slot="reference">focus 激活</e-button>\n        <div slot="content">\n          <p >这是一段文本</p>\n        </div>\n    </e-popover>\n    <e-popover trigger="manual" placement="right"  v-model="showPopper" title="手动显示popover" content="这是一段文本">\n        <e-button slot="reference" @click="showPopper = !showPopper">{{btnText}}</e-button>\n    </e-popover>\n</div>\n<script>\nexport default{\n    data(){\n        return {\n            showPopper:true\n        }\n    },\n    computed:{\n        btnText(){\n            return !this.showPopper?\'点击显示\':\'点击关闭\'\n        }\n    }\n}\n<\/script>\n')])])])],2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)],1)};o._withStripped=!0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},v={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"margin-15"},[r("e-popover",{attrs:{trigger:"click",title:"点击显示popover"}},[r("e-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("点击 激活")]),t._v(" "),r("div",{attrs:{slot:"content"},slot:"content"},[r("p",[t._v("这是一段文本")])])],1),t._v(" "),r("e-popover",{attrs:{trigger:"hover",title:"移入显示popover"}},[r("e-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("移入 激活")]),t._v(" "),r("div",{attrs:{slot:"content"},slot:"content"},[r("p",[t._v("这是一段文本")])])],1),t._v(" "),r("e-popover",{attrs:{trigger:"focus",title:"激活状态显示popover"}},[r("e-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("focus 激活")]),t._v(" "),r("div",{attrs:{slot:"content"},slot:"content"},[r("p",[t._v("这是一段文本")])])],1),t._v(" "),r("e-popover",{attrs:{trigger:"manual",placement:"right",title:"手动显示popover",content:"这是一段文本"},model:{value:t.showPopper,callback:function(e){t.showPopper=e},expression:"showPopper"}},[r("e-button",{attrs:{slot:"reference"},on:{click:function(e){t.showPopper=!t.showPopper}},slot:"reference"},[t._v(t._s(t.btnText))])],1)],1)])};t._withStripped=!0;return n({render:t,staticRenderFns:[]},{data:function(){return{showPopper:!0}},computed:{btnText:function(){return this.showPopper?"点击关闭":"点击显示"}}})}()}},s=r(0),p=Object(s.a)(v,o,[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"%E4%BD%95%E6%97%B6%E4%BD%BF%E7%94%A8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#%E4%BD%95%E6%97%B6%E4%BD%BF%E7%94%A8"}},[this._v("¶")]),this._v(" 何时使用")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip"},[e("p",[this._v("Popover 的属性与 Tooltip 很类似，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"}},[this._v("¶")]),this._v(" 基础用法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[this._v("¶")]),this._v(" API")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("可选值")]),t._v(" "),r("th",[t._v("默认值")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("trigger")]),t._v(" "),r("td",[t._v("popover触发方式")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("hover/click/focus/manual")]),t._v(" "),r("td",[t._v("click")])]),t._v(" "),r("tr",[r("td",[t._v("title")]),t._v(" "),r("td",[t._v("标题")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[t._v("popoverClass")]),t._v(" "),r("td",[t._v("poppover 弹出层的自定义样式")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td",[t._v("-")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[this._v("¶")]),this._v(" Events")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("事件名称")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("回调参数")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("show")]),t._v(" "),r("td",[t._v("popover卡片显示时")]),t._v(" "),r("td",[t._v("无")])]),t._v(" "),r("tr",[r("td",[t._v("hide")]),t._v(" "),r("td",[t._v("popover卡片隐藏时")]),t._v(" "),r("td",[t._v("无")])]),t._v(" "),r("tr",[r("td",[t._v("after-enter")]),t._v(" "),r("td",[t._v("popover卡片入场动画完成后")]),t._v(" "),r("td",[t._v("无")])]),t._v(" "),r("tr",[r("td",[t._v("after-leave")]),t._v(" "),r("td",[t._v("popover卡片离开动画完成后")]),t._v(" "),r("td",[t._v("无")])])])])}],!1,null,null,null);p.options.__file="doc/pages/popover.md";e.default=p.exports}}]);