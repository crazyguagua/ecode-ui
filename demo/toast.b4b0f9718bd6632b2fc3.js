(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{59:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"content ecode-doc"},[s("h1",[t._v("吐司 ，消息提示组件")]),t._v(" "),s("p",[t._v("可提供成功、警告和错误等反馈信息。")]),t._v(" "),s("p",[t._v("顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。")]),t._v(" "),t._m(0),t._v(" "),s("demo-block",[s("div",[s("p",[t._v("可以设置弹出的位置（头部，中间，底部）。")])]),t._v(" "),s("template",{slot:"source"},[s("element-demo0")],1),t._v(" "),s("template",{slot:"highlight"},[s("pre",{pre:!0},[s("code",{pre:!0,attrs:{class:"html"}},[t._v("<e-button @click=\"showToast\">头部提示</e-button>\n<e-button @click=\"showToast1\">中间显示</e-button>\n<e-button @click=\"showToast2\">底部显示</e-button>\n<script>\nexport default{\n    methods:{\n        showToast(){\n            this.eToast('头部提示')\n        },\n        showToast1(){\n            this.eToast('中间显示',{position:'middle'})\n        },\n        showToast2(){\n            this.eToast('底部显示',{position:'bottom'})\n        }\n    }\n}\n<\/script>\n")])])])],2),t._m(1),t._v(" "),s("demo-block",[s("div",[s("p",[t._v("可以添加不同的状态提示: 成功，失败，提示，错误，通知。")])]),t._v(" "),s("template",{slot:"source"},[s("element-demo1")],1),t._v(" "),s("template",{slot:"highlight"},[s("pre",{pre:!0},[s("code",{pre:!0,attrs:{class:"html"}},[t._v("<e-button @click=\"showToast\">成功</e-button>\n<e-button @click=\"showToast1\">失败</e-button>\n<e-button @click=\"showToast2\">提示</e-button>\n<e-button @click=\"showToast3\">错误</e-button>\n<e-button @click=\"showToast4\">通知</e-button>\n<script>\nexport default{\n    methods:{\n        showToast(){\n           this.eToast.success('操作成功！',{})\n        },\n        showToast1(){\n           this.eToast.fail('操作失败！',{})\n        },\n        showToast2(){\n           this.eToast.warn('警告提示！',{})\n        },\n        showToast3(){\n            this.eToast.error('发生错误！',{})\n        },\n         showToast4(){\n            this.eToast.message('这是一个通知',{})\n        }\n    }\n}\n<\/script>\n")])])])],2),t._m(2),t._v(" "),s("demo-block",[s("div",[s("p",[t._v("可以手动关闭toast。")])]),t._v(" "),s("template",{slot:"source"},[s("element-demo2")],1),t._v(" "),s("template",{slot:"highlight"},[s("pre",{pre:!0},[s("code",{pre:!0,attrs:{class:"html"}},[t._v("<e-button @click=\"showToast\">可以手动关闭</e-button>\n<script>\nexport default{\n    methods:{\n        showToast(){\n            this.eToast('手动关闭我',{duration:0,center:true,showClose:true})\n        },\n    }\n}\n<\/script>\n")])])])],2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)],1)};o._withStripped=!0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o])}return t},a={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("e-button",{on:{click:t.showToast}},[t._v("头部提示")]),t._v(" "),s("e-button",{on:{click:t.showToast1}},[t._v("中间显示")]),t._v(" "),s("e-button",{on:{click:t.showToast2}},[t._v("底部显示")])],1)};t._withStripped=!0;return n({render:t,staticRenderFns:[]},{methods:{showToast:function(){this.eToast("头部提示")},showToast1:function(){this.eToast("中间显示",{position:"middle"})},showToast2:function(){this.eToast("底部显示",{position:"bottom"})}}})}(),"element-demo1":function(){var t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("e-button",{on:{click:t.showToast}},[t._v("成功")]),t._v(" "),s("e-button",{on:{click:t.showToast1}},[t._v("失败")]),t._v(" "),s("e-button",{on:{click:t.showToast2}},[t._v("提示")]),t._v(" "),s("e-button",{on:{click:t.showToast3}},[t._v("错误")]),t._v(" "),s("e-button",{on:{click:t.showToast4}},[t._v("通知")])],1)};t._withStripped=!0;return n({render:t,staticRenderFns:[]},{methods:{showToast:function(){this.eToast.success("操作成功！",{})},showToast1:function(){this.eToast.fail("操作失败！",{})},showToast2:function(){this.eToast.warn("警告提示！",{})},showToast3:function(){this.eToast.error("发生错误！",{})},showToast4:function(){this.eToast.message("这是一个通知",{})}}})}(),"element-demo2":function(){var t=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("e-button",{on:{click:this.showToast}},[this._v("可以手动关闭")])],1)};t._withStripped=!0;return n({render:t,staticRenderFns:[]},{methods:{showToast:function(){this.eToast("手动关闭我",{duration:0,center:!0,showClose:!0})}}})}()}},i=s(0),r=Object(i.a)(a,o,[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"%E5%BC%B9%E5%87%BA%E4%BD%8D%E7%BD%AE"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#%E5%BC%B9%E5%87%BA%E4%BD%8D%E7%BD%AE"}},[this._v("¶")]),this._v(" 弹出位置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"%E4%B8%8D%E5%90%8C%E7%9A%84%E7%8A%B6%E6%80%81"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#%E4%B8%8D%E5%90%8C%E7%9A%84%E7%8A%B6%E6%80%81"}},[this._v("¶")]),this._v(" 不同的状态")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"%E6%89%8B%E5%8A%A8%E5%85%B3%E9%97%AD"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#%E6%89%8B%E5%8A%A8%E5%85%B3%E9%97%AD"}},[this._v("¶")]),this._v(" 手动关闭")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[this._v("¶")]),this._v(" API")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Toast.success(config)")]),t._v(" "),s("li",[t._v("Toast.fail(config)")]),t._v(" "),s("li",[t._v("Toast.warn(config)")]),t._v(" "),s("li",[t._v("Toast.error(config)")]),t._v(" "),s("li",[t._v("Toast.message(config)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"config-%E5%8F%82%E6%95%B0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config-%E5%8F%82%E6%95%B0"}},[this._v("¶")]),this._v(" config 参数")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("提示内容")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("—")])]),t._v(" "),s("tr",[s("td",[t._v("duration")]),t._v(" "),s("td",[t._v("消息显示持续时间，单位为毫秒")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("3000")])]),t._v(" "),s("tr",[s("td",[t._v("position")]),t._v(" "),s("td",[t._v("消息弹出位置")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("top/middle/bottom")]),t._v(" "),s("td",[t._v("top")])]),t._v(" "),s("tr",[s("td",[t._v("showClose")]),t._v(" "),s("td",[t._v("是否显示右侧关闭按钮")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[t._v("true/false")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("center")]),t._v(" "),s("td",[t._v("提示文字是否居中")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[t._v("true/false")]),t._v(" "),s("td",[t._v("false")])])])])}],!1,null,null,null);r.options.__file="doc/pages/toast.md";e.default=r.exports}}]);