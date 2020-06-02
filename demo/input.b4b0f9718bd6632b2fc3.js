(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{68:function(t,e,n){"use strict";n.r(e);var v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content ecode-doc"},[n("h1",[t._v("输入框")]),t._v(" "),t._m(0),t._v(" "),n("p",[t._v("基本使用 size:(default)、large、small")]),t._v(" "),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),t._v(" "),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v("<div>\n    <e-input></e-input>\n    <e-input :size=\"'large'\"></e-input>\n    <e-input :size=\"'small'\"></e-input>\n</div>\n")])])])],2),t._m(1),t._v(" "),n("p",[t._v("添加属性 clearable")]),t._v(" "),n("demo-block",[n("template",{slot:"source"},[n("element-demo1")],1),t._v(" "),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v("<div >\n    <e-input clearable v-model=\"input\"></e-input>\n</div>\n<script>\n    export default{\n        data(){\n            return {\n                input:''\n            }\n        }\n    }\n<\/script>\n")])])])],2),t._m(2),t._v(" "),n("p",[t._v("添加属性 show-password")]),t._v(" "),n("demo-block",[n("template",{slot:"source"},[n("element-demo2")],1),t._v(" "),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v("<div>\n    <e-input show-password v-model=\"input\"></e-input>\n</div>\n<script>\n    export default{\n        data(){\n            return {\n                input:''\n            }\n        }\n    }\n<\/script>\n")])])])],2),t._m(3),t._v(" "),n("p",[t._v("添加属性 disabled")]),t._v(" "),n("demo-block",[n("template",{slot:"source"},[n("element-demo3")],1),t._v(" "),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v("<div >\n    <e-input disabled v-model=\"input\"></e-input>\n</div>\n<script>\n    export default{\n        data(){\n            return {\n                input:'禁止输入'\n            }\n        }\n    }\n<\/script>\n")])])])],2),t._m(4),t._v(" "),n("p",[t._v("添加属性 带有图标标记输入类型，上方为属性添加的方式，下方为slot的形式")]),t._v(" "),n("demo-block",[n("template",{slot:"source"},[n("element-demo4")],1),t._v(" "),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<div >\n    <div>   \n        <e-input v-model="input" placeholder="请输入" prefix-icon="ecode-search"></e-input>\n        <e-input v-model="input1" placeholder="请选择日期" suffix-icon="ecode-date"></e-input>\n    </div>\n    <div class="input-margin-top">\n        <e-input v-model="input2" placeholder="请输入">\n            <e-icon slot="prefixIcon" name="ecode-search"/>\n        </e-input>\n        <e-input v-model="input3" placeholder="请选择日期">\n            <e-icon slot="suffixIcon" name="ecode-date"/>\n        </e-input>\n    </div>\n    \n</div>\n<script>\n    export default{\n        data(){\n            return {\n                input:\'\',\n                input1:\'\',\n                input2:\'\',\n                input3:\'\'\n            }\n        }\n    }\n<\/script>\n')])])])],2),t._m(5),t._v(" "),n("p",[t._v("type 属性为 textarea")]),t._v(" "),n("demo-block",[n("template",{slot:"source"},[n("element-demo5")],1),t._v(" "),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<div class="textarea-demo">\n    <e-input type="textarea"></e-input>\n</div>\n\n')])])])],2),t._m(6),t._v(" "),n("p",[t._v("通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 autosize 还可以设定为一个对象，指定最小行数和最大行数。")]),t._v(" "),n("demo-block",[n("template",{slot:"source"},[n("element-demo6")],1),t._v(" "),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<div class="textarea-demo">\n    <div>\n        <e-input autosize type="textarea" v-model="textarea"></e-input>\n    </div>\n    <div class="input-margin-top">\n        <e-input :autosize="{minRows:2,maxRows:4}" type="textarea" v-model="textarea1"></e-input>\n    </div>\n    \n</div>\n<script>\n    export default{\n        data(){\n            return {\n                textarea:\'\',\n                textarea1:\'\'\n            }\n        }\n    }\n<\/script>\n')])])])],2),t._m(7),t._v(" "),n("p",[t._v("maxlength 和 minlength 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。对于类型为 text 或 textarea 的输入框，在使用 maxlength 属性限制最大输入长度的同时，可通过设置 show-word-limit 属性来展示字数统计。")]),t._v(" "),n("demo-block",[n("template",{slot:"source"},[n("element-demo7")],1),t._v(" "),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<div class="textarea-demo">\n    <div>\n        <e-input :maxlength ="5" v-model="input" show-word-limit></e-input>\n    </div>\n    <div class="input-margin-top">\n        <e-input type="textarea" :maxlength ="10" v-model="textarea" show-word-limit></e-input>\n    </div>\n</div>\n<script>\n    export default{\n        data(){\n            return {\n                textarea:\'\',\n                input:\'\'\n            }\n        }\n    }\n<\/script>\n')])])])],2),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15)],1)};v._withStripped=!0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var v in n)Object.prototype.hasOwnProperty.call(n,v)&&(t[v]=n[v])}return t},a={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",[e("e-input"),this._v(" "),e("e-input",{attrs:{size:"large"}}),this._v(" "),e("e-input",{attrs:{size:"small"}})],1)])};t._withStripped=!0;return r({render:t,staticRenderFns:[]},{})}(),"element-demo1":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("e-input",{attrs:{clearable:""},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1)])};t._withStripped=!0;return r({render:t,staticRenderFns:[]},{data:function(){return{input:""}}})}(),"element-demo2":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("e-input",{attrs:{"show-password":""},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1)])};t._withStripped=!0;return r({render:t,staticRenderFns:[]},{data:function(){return{input:""}}})}(),"element-demo3":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("e-input",{attrs:{disabled:""},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1)])};t._withStripped=!0;return r({render:t,staticRenderFns:[]},{data:function(){return{input:"禁止输入"}}})}(),"element-demo4":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",[n("e-input",{attrs:{placeholder:"请输入","prefix-icon":"ecode-search"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._v(" "),n("e-input",{attrs:{placeholder:"请选择日期","suffix-icon":"ecode-date"},model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}})],1),t._v(" "),n("div",{staticClass:"input-margin-top"},[n("e-input",{attrs:{placeholder:"请输入"},model:{value:t.input2,callback:function(e){t.input2=e},expression:"input2"}},[n("e-icon",{attrs:{slot:"prefixIcon",name:"ecode-search"},slot:"prefixIcon"})],1),t._v(" "),n("e-input",{attrs:{placeholder:"请选择日期"},model:{value:t.input3,callback:function(e){t.input3=e},expression:"input3"}},[n("e-icon",{attrs:{slot:"suffixIcon",name:"ecode-date"},slot:"suffixIcon"})],1)],1)])])};t._withStripped=!0;return r({render:t,staticRenderFns:[]},{data:function(){return{input:"",input1:"",input2:"",input3:""}}})}(),"element-demo5":function(){var t=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"textarea-demo"},[e("e-input",{attrs:{type:"textarea"}})],1)])};t._withStripped=!0;return r({render:t,staticRenderFns:[]},{})}(),"element-demo6":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"textarea-demo"},[n("div",[n("e-input",{attrs:{autosize:"",type:"textarea"},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1),t._v(" "),n("div",{staticClass:"input-margin-top"},[n("e-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea"},model:{value:t.textarea1,callback:function(e){t.textarea1=e},expression:"textarea1"}})],1)])])};t._withStripped=!0;return r({render:t,staticRenderFns:[]},{data:function(){return{textarea:"",textarea1:""}}})}(),"element-demo7":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"textarea-demo"},[n("div",[n("e-input",{attrs:{maxlength:5,"show-word-limit":""},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),n("div",{staticClass:"input-margin-top"},[n("e-input",{attrs:{type:"textarea",maxlength:10,"show-word-limit":""},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1)])])};t._withStripped=!0;return r({render:t,staticRenderFns:[]},{data:function(){return{textarea:"",input:""}}})}()}},i=n(0),_=Object(i.a)(a,v,[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"}},[this._v("¶")]),this._v(" 基础用法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"%E5%8F%AF%E6%B8%85%E9%99%A4%E7%9A%84"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#%E5%8F%AF%E6%B8%85%E9%99%A4%E7%9A%84"}},[this._v("¶")]),this._v(" 可清除的")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"%E5%AF%86%E7%A0%81%E6%A1%86"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#%E5%AF%86%E7%A0%81%E6%A1%86"}},[this._v("¶")]),this._v(" 密码框")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"%E8%A2%AB%E7%A6%81%E6%AD%A2%E7%9A%84"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#%E8%A2%AB%E7%A6%81%E6%AD%A2%E7%9A%84"}},[this._v("¶")]),this._v(" 被禁止的")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"%E5%B8%A6icon%E7%9A%84%E8%BE%93%E5%85%A5%E6%A1%86"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#%E5%B8%A6icon%E7%9A%84%E8%BE%93%E5%85%A5%E6%A1%86"}},[this._v("¶")]),this._v(" 带icon的输入框")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"%E6%96%87%E6%9C%AC%E5%9F%9F"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#%E6%96%87%E6%9C%AC%E5%9F%9F"}},[this._v("¶")]),this._v(" 文本域")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"%E5%8F%AF%E8%87%AA%E9%80%82%E5%BA%94%E6%96%87%E6%9C%AC%E9%AB%98%E5%BA%A6%E7%9A%84%E6%96%87%E6%9C%AC%E5%9F%9F"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#%E5%8F%AF%E8%87%AA%E9%80%82%E5%BA%94%E6%96%87%E6%9C%AC%E9%AB%98%E5%BA%A6%E7%9A%84%E6%96%87%E6%9C%AC%E5%9F%9F"}},[this._v("¶")]),this._v(" 可自适应文本高度的文本域")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"%E8%BE%93%E5%85%A5%E9%95%BF%E5%BA%A6%E9%99%90%E5%88%B6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#%E8%BE%93%E5%85%A5%E9%95%BF%E5%BA%A6%E9%99%90%E5%88%B6"}},[this._v("¶")]),this._v(" 输入长度限制")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"input-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-attributes"}},[this._v("¶")]),this._v(" Input Attributes")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("可选值")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("type")]),t._v(" "),n("td",[t._v("类型")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("text，textarea 和其他 "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types"}},[t._v("原生 input 的 type 值")])]),t._v(" "),n("td",[t._v("text")])]),t._v(" "),n("tr",[n("td",[t._v("value / v-model")]),t._v(" "),n("td",[t._v("绑定值")]),t._v(" "),n("td",[t._v("string / number")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("maxlength")]),t._v(" "),n("td",[t._v("原生属性，最大输入长度")]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("minlength")]),t._v(" "),n("td",[t._v("原生属性，最小输入长度")]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("show-word-limit")]),t._v(" "),n("td",[t._v("是否显示输入字数统计，只在 "),n("code",[t._v('type = "text"')]),t._v(" 或 "),n("code",[t._v('type = "textarea"')]),t._v(" 时有效")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("placeholder")]),t._v(" "),n("td",[t._v("输入框占位文本")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("clearable")]),t._v(" "),n("td",[t._v("是否可清空")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("show-password")]),t._v(" "),n("td",[t._v("是否显示切换密码图标")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("disabled")]),t._v(" "),n("td",[t._v("禁用")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("size")]),t._v(" "),n("td",[t._v("输入框尺寸，只在 "),n("code",[t._v('type!="textarea"')]),t._v(" 时有效")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("default、large、small")]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("prefix-icon")]),t._v(" "),n("td",[t._v("输入框头部图标")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("suffix-icon")]),t._v(" "),n("td",[t._v("输入框尾部图标")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("rows")]),t._v(" "),n("td",[t._v("输入框行数，只对 "),n("code",[t._v('type="textarea"')]),t._v(" 有效")]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("2")])]),t._v(" "),n("tr",[n("td",[t._v("autosize")]),t._v(" "),n("td",[t._v("自适应内容高度，只对 "),n("code",[t._v('type="textarea"')]),t._v(" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }")]),t._v(" "),n("td",[t._v("boolean / object")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("name")]),t._v(" "),n("td",[t._v("原生属性")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("readonly")]),t._v(" "),n("td",[t._v("原生属性，是否只读")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("max")]),t._v(" "),n("td",[t._v("原生属性，设置最大值")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("min")]),t._v(" "),n("td",[t._v("原生属性，设置最小值")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("step")]),t._v(" "),n("td",[t._v("原生属性，设置输入字段的合法数字间隔")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("form")]),t._v(" "),n("td",[t._v("原生属性")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"input-slots"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-slots"}},[this._v("¶")]),this._v(" Input Slots")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("name")]),t._v(" "),n("th",[t._v("说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("prefix")]),t._v(" "),n("td",[t._v("输入框头部内容，只对 "),n("code",[t._v('type="text"')]),t._v(" 有效")])]),t._v(" "),n("tr",[n("td",[t._v("suffix")]),t._v(" "),n("td",[t._v("输入框尾部内容，只对 "),n("code",[t._v('type="text"')]),t._v(" 有效")])]),t._v(" "),n("tr",[n("td",[t._v("prepend")]),t._v(" "),n("td",[t._v("输入框前置内容，只对 "),n("code",[t._v('type="text"')]),t._v(" 有效")])]),t._v(" "),n("tr",[n("td",[t._v("append")]),t._v(" "),n("td",[t._v("输入框后置内容，只对 "),n("code",[t._v('type="text"')]),t._v(" 有效")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"input-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-events"}},[this._v("¶")]),this._v(" Input Events")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("事件名称")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("回调参数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("blur")]),t._v(" "),n("td",[t._v("在 Input 失去焦点时触发")]),t._v(" "),n("td",[t._v("(event: Event)")])]),t._v(" "),n("tr",[n("td",[t._v("focus")]),t._v(" "),n("td",[t._v("在 Input 获得焦点时触发")]),t._v(" "),n("td",[t._v("(event: Event)")])]),t._v(" "),n("tr",[n("td",[t._v("change")]),t._v(" "),n("td",[t._v("仅在输入框失去焦点或用户按下回车时触发")]),t._v(" "),n("td",[t._v("(value: string | number)")])]),t._v(" "),n("tr",[n("td",[t._v("input")]),t._v(" "),n("td",[t._v("在 Input 值改变时触发")]),t._v(" "),n("td",[t._v("(value: string | number)")])]),t._v(" "),n("tr",[n("td",[t._v("clear")]),t._v(" "),n("td",[t._v("在点击由 "),n("code",[t._v("clearable")]),t._v(" 属性生成的清空按钮时触发")]),t._v(" "),n("td",[t._v("—")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"input-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-methods"}},[this._v("¶")]),this._v(" Input Methods")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("方法名")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("参数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("focus")]),t._v(" "),n("td",[t._v("使 input 获取焦点")]),t._v(" "),n("td",[t._v("—")])]),t._v(" "),n("tr",[n("td",[t._v("blur")]),t._v(" "),n("td",[t._v("使 input 失去焦点")]),t._v(" "),n("td",[t._v("—")])])])])}],!1,null,null,null);_.options.__file="doc/pages/input.md";e.default=_.exports}}]);