(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{56:function(e,t,c){"use strict";c.r(t);var n=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("section",{staticClass:"content ecode-doc"},[c("h1",[e._v("Checkbox 多选框")]),e._v(" "),c("p",[e._v("一组备选项中进行多选。")]),e._v(" "),c("p",[e._v("单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。")]),e._v(" "),e._m(0),e._v(" "),c("p",[e._v("在e-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true。")]),e._v(" "),c("demo-block",[c("template",{slot:"source"},[c("element-demo0")],1),e._v(" "),c("template",{slot:"highlight"},[c("pre",{pre:!0},[c("code",{pre:!0,attrs:{class:"html"}},[e._v('<div class="checkbox-demo">\n   <e-checkbox  v-model="isCheck" >CheckBox</e-checkbox> <span> 是否选中: {{isCheck}}</span>\n</div>\n<script>\n    export default {\n        data(){\n            return {\n                isCheck:true\n            }\n        }\n    }\n<\/script>\n')])])])],2),e._m(1),e._v(" "),c("p",[e._v("设置disabled属性")]),e._v(" "),c("demo-block",[c("template",{slot:"source"},[c("element-demo1")],1),e._v(" "),c("template",{slot:"highlight"},[c("pre",{pre:!0},[c("code",{pre:!0,attrs:{class:"html"}},[e._v('<div class="checkbox-demo">\n   <e-checkbox disabled v-model="isCheck" >CheckBox</e-checkbox>\n</div>\n<script>\n    export default {\n        data(){\n            return {\n                isCheck:true\n            }\n        }\n    }\n<\/script>\n')])])])],2),e._m(2),e._v(" "),c("demo-block",[c("div",[c("p",[c("code",[e._v("e-checkbox-group")]),e._v(" 把多个"),c("code",[e._v("e-checkbox")]),e._v("作为一组来管理，v-model 绑定数组类型的变量。"),c("code",[e._v("e-checkbox")]),e._v(" 的 label属性是该 "),c("code",[e._v("checkbox")]),e._v(" 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。")])]),e._v(" "),c("template",{slot:"source"},[c("element-demo2")],1),e._v(" "),c("template",{slot:"highlight"},[c("pre",{pre:!0},[c("code",{pre:!0,attrs:{class:"html"}},[e._v('<div class="checkbox-demo">\n    <div class="margin-bottom-15"><span >当前选中：{{checked}}</span></div>\n   <e-checkbox-group v-model="checked">\n     <e-checkbox v-for="checkbox in checkboxes" :key="checkbox.value" :disabled="checkbox.disabled" :label="checkbox.label" ></e-checkbox>\n   </e-checkbox-group>\n</div>\n<script>\n    export default {\n        data(){\n            return {\n                checkboxes:[{\n                    label:\'香蕉\',value:1\n                },{\n                    label:\'橘子\',value:2\n                },{\n                    label:\'苹果\',value:3\n                },{\n                    label:\'菠萝蜜\',value:4,disabled:true\n                }],\n                checked:[\'香蕉\']\n            }\n        }\n    }\n<\/script>\n')])])])],2),e._m(3),e._v(" "),e._m(4),e._v(" "),c("demo-block",[c("template",{slot:"source"},[c("element-demo3")],1),e._v(" "),c("template",{slot:"highlight"},[c("pre",{pre:!0},[c("code",{pre:!0,attrs:{class:"html"}},[e._v('<div class="checkbox-demo">\n  <div style="padding:10px"><span>当前选择：{{checked}}</span></div>\n   <e-checkbox v-model="checkAll" :indeterminate="indeterminate" @change="handleCheckAll">全选</e-checkbox>\n   <e-checkbox-group v-model="checked" @change="handleGroupChange">\n     <e-checkbox v-for="checkbox in checkboxes" :key="checkbox.value" :disabled="checkbox.disabled" :label="checkbox.label" >{{checkbox.label}}</e-checkbox>\n   </e-checkbox-group>\n</div>\n<script>\n    export default {\n        data(){\n            return {\n                checkboxes:[{\n                    label:\'香蕉\',value:1\n                },{\n                    label:\'橘子\',value:2\n                },{\n                    label:\'苹果\',value:3\n                },{\n                    label:\'榴莲\',value:4\n                },{\n                    label:\'哈密瓜\',value:5\n                }],\n                checkAll:false,\n                checked:[],\n                indeterminate:false\n            }\n        },\n        methods:{\n            handleGroupChange(value){\n                this.checkAll = this.checkboxes.length === value.length\n                this.indeterminate = !this.checkAll && value.length>0\n            },\n            handleCheckAll(v){\n                 if(v){\n                     this.checked = this.checkboxes.map(item=>item.label)\n                 }else{\n                     this.checked = []\n                 }\n                 this.indeterminate = false\n            }\n        }\n    }\n<\/script>\n')])])])],2),e._m(5),e._v(" "),c("demo-block",[c("div",[c("p",[c("code",[e._v("e-checkbox-group")]),e._v("设置"),c("code",[e._v("button")]),e._v(" 属性")])]),e._v(" "),c("template",{slot:"source"},[c("element-demo4")],1),e._v(" "),c("template",{slot:"highlight"},[c("pre",{pre:!0},[c("code",{pre:!0,attrs:{class:"html"}},[e._v('<div class="checkbox-demo">\n    <div class="margin-bottom-15"><span >当前选中：{{checked}}</span></div>\n   <e-checkbox-group v-model="checked" button>\n     <e-checkbox v-for="checkbox in checkboxes" :key="checkbox.value" :disabled="checkbox.disabled" :label="checkbox.label" ></e-checkbox>\n   </e-checkbox-group>\n</div>\n<script>\n    export default {\n        data(){\n            return {\n                checkboxes:[{\n                    label:\'香蕉\',value:1\n                },{\n                    label:\'橘子\',value:2\n                },{\n                    label:\'苹果\',value:3\n                },{\n                    label:\'菠萝蜜\',value:4,disabled:true\n                }],\n                checked:[\'香蕉\']\n            }\n        }\n    }\n<\/script>\n')])])])],2),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13)],1)};n._withStripped=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},l={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("div",{staticClass:"checkbox-demo"},[c("e-checkbox",{model:{value:e.isCheck,callback:function(t){e.isCheck=t},expression:"isCheck"}},[e._v("CheckBox")]),e._v(" "),c("span",[e._v(" 是否选中: "+e._s(e.isCheck))])],1)])};e._withStripped=!0;return a({render:e,staticRenderFns:[]},{data:function(){return{isCheck:!0}}})}(),"element-demo1":function(){var e=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("div",{staticClass:"checkbox-demo"},[c("e-checkbox",{attrs:{disabled:""},model:{value:e.isCheck,callback:function(t){e.isCheck=t},expression:"isCheck"}},[e._v("CheckBox")])],1)])};e._withStripped=!0;return a({render:e,staticRenderFns:[]},{data:function(){return{isCheck:!0}}})}(),"element-demo2":function(){var e=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("div",{staticClass:"checkbox-demo"},[c("div",{staticClass:"margin-bottom-15"},[c("span",[e._v("当前选中："+e._s(e.checked))])]),e._v(" "),c("e-checkbox-group",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},e._l(e.checkboxes,(function(e){return c("e-checkbox",{key:e.value,attrs:{disabled:e.disabled,label:e.label}})})),1)],1)])};e._withStripped=!0;return a({render:e,staticRenderFns:[]},{data:function(){return{checkboxes:[{label:"香蕉",value:1},{label:"橘子",value:2},{label:"苹果",value:3},{label:"菠萝蜜",value:4,disabled:!0}],checked:["香蕉"]}}})}(),"element-demo3":function(){var e=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("div",{staticClass:"checkbox-demo"},[c("div",{staticStyle:{padding:"10px"}},[c("span",[e._v("当前选择："+e._s(e.checked))])]),e._v(" "),c("e-checkbox",{attrs:{indeterminate:e.indeterminate},on:{change:e.handleCheckAll},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),e._v(" "),c("e-checkbox-group",{on:{change:e.handleGroupChange},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},e._l(e.checkboxes,(function(t){return c("e-checkbox",{key:t.value,attrs:{disabled:t.disabled,label:t.label}},[e._v(e._s(t.label))])})),1)],1)])};e._withStripped=!0;return a({render:e,staticRenderFns:[]},{data:function(){return{checkboxes:[{label:"香蕉",value:1},{label:"橘子",value:2},{label:"苹果",value:3},{label:"榴莲",value:4},{label:"哈密瓜",value:5}],checkAll:!1,checked:[],indeterminate:!1}},methods:{handleGroupChange:function(e){this.checkAll=this.checkboxes.length===e.length,this.indeterminate=!this.checkAll&&e.length>0},handleCheckAll:function(e){this.checked=e?this.checkboxes.map((function(e){return e.label})):[],this.indeterminate=!1}}})}(),"element-demo4":function(){var e=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("div",{staticClass:"checkbox-demo"},[c("div",{staticClass:"margin-bottom-15"},[c("span",[e._v("当前选中："+e._s(e.checked))])]),e._v(" "),c("e-checkbox-group",{attrs:{button:""},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},e._l(e.checkboxes,(function(e){return c("e-checkbox",{key:e.value,attrs:{disabled:e.disabled,label:e.label}})})),1)],1)])};e._withStripped=!0;return a({render:e,staticRenderFns:[]},{data:function(){return{checkboxes:[{label:"香蕉",value:1},{label:"橘子",value:2},{label:"苹果",value:3},{label:"菠萝蜜",value:4,disabled:!0}],checked:["香蕉"]}}})}()}},s=c(0),h=Object(s.a)(l,n,[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"}},[this._v("¶")]),this._v(" 基础用法")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"%E7%A6%81%E7%94%A8%E7%8A%B6%E6%80%81"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E7%A6%81%E7%94%A8%E7%8A%B6%E6%80%81"}},[this._v("¶")]),this._v(" 禁用状态")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"%E5%A4%9A%E9%80%89%E6%A1%86%E7%BB%84"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E5%A4%9A%E9%80%89%E6%A1%86%E7%BB%84"}},[this._v("¶")]),this._v(" 多选框组")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"%E6%94%AF%E6%8C%81%E5%8D%8A%E9%80%89%E7%8A%B6%E6%80%81"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E6%94%AF%E6%8C%81%E5%8D%8A%E9%80%89%E7%8A%B6%E6%80%81"}},[this._v("¶")]),this._v(" 支持半选状态")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("indeterminate")]),this._v(" 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"%E6%8C%89%E9%92%AE%E6%A0%B7%E5%BC%8F%E5%A4%9A%E9%80%89%E6%A1%86%E7%BB%84"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E6%8C%89%E9%92%AE%E6%A0%B7%E5%BC%8F%E5%A4%9A%E9%80%89%E6%A1%86%E7%BB%84"}},[this._v("¶")]),this._v(" 按钮样式多选框组")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"checkbox-%E5%B1%9E%E6%80%A7-%E3%80%82"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checkbox-%E5%B1%9E%E6%80%A7-%E3%80%82"}},[this._v("¶")]),this._v(" checkbox 属性 。")])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("table",[c("thead",[c("tr",[c("th",[e._v("参数")]),e._v(" "),c("th",[e._v("说明")]),e._v(" "),c("th",[e._v("类型")]),e._v(" "),c("th",[e._v("可选值")]),e._v(" "),c("th",[e._v("默认值")])])]),e._v(" "),c("tbody",[c("tr",[c("td",[e._v("value/v-model")]),e._v(" "),c("td",[e._v("绑定值")]),e._v(" "),c("td",[e._v("string / number / boolean")]),e._v(" "),c("td",[e._v("—")]),e._v(" "),c("td",[e._v("—")])]),e._v(" "),c("tr",[c("td",[e._v("disabled")]),e._v(" "),c("td",[e._v("是否禁用")]),e._v(" "),c("td",[e._v("boolean")]),e._v(" "),c("td",[e._v("true/false")]),e._v(" "),c("td",[e._v("false")])]),e._v(" "),c("tr",[c("td",[e._v("label")]),e._v(" "),c("td",[e._v("选中状态的值（只有在e-checkbox-group或者绑定对象类型为array时有效）")]),e._v(" "),c("td",[e._v("string / number / boolean")]),e._v(" "),c("td",[e._v("—")]),e._v(" "),c("td",[e._v("—")])]),e._v(" "),c("tr",[c("td",[e._v("indeterminate")]),e._v(" "),c("td",[e._v("设置半选状态，只负责样式控制")]),e._v(" "),c("td",[e._v("boolean")]),e._v(" "),c("td",[e._v("true/false")]),e._v(" "),c("td",[e._v("false")])]),e._v(" "),c("tr",[c("td",[e._v("button")]),e._v(" "),c("td",[e._v("按钮风格的checkbox")]),e._v(" "),c("td",[e._v("boolean")]),e._v(" "),c("td",[e._v("true/false")]),e._v(" "),c("td",[e._v("false")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"checkbox-%E4%BA%8B%E4%BB%B6-%E3%80%82"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checkbox-%E4%BA%8B%E4%BB%B6-%E3%80%82"}},[this._v("¶")]),this._v(" checkbox 事件 。")])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("table",[c("thead",[c("tr",[c("th",[e._v("事件名称")]),e._v(" "),c("th",[e._v("说明")]),e._v(" "),c("th",[e._v("事件回调参数")])])]),e._v(" "),c("tbody",[c("tr",[c("td",[e._v("change")]),e._v(" "),c("td",[e._v("选中状态发生变化后")]),e._v(" "),c("td",[e._v("更新后的值")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"checkbox-group-%E5%B1%9E%E6%80%A7-%E3%80%82"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checkbox-group-%E5%B1%9E%E6%80%A7-%E3%80%82"}},[this._v("¶")]),this._v(" checkbox-group 属性 。")])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("table",[c("thead",[c("tr",[c("th",[e._v("参数")]),e._v(" "),c("th",[e._v("说明")]),e._v(" "),c("th",[e._v("类型")]),e._v(" "),c("th",[e._v("可选值")]),e._v(" "),c("th",[e._v("默认值")])])]),e._v(" "),c("tbody",[c("tr",[c("td",[e._v("value/v-model")]),e._v(" "),c("td",[e._v("绑定值")]),e._v(" "),c("td",[e._v("Array")]),e._v(" "),c("td",[e._v("—")]),e._v(" "),c("td",[e._v("—")])]),e._v(" "),c("tr",[c("td",[e._v("button")]),e._v(" "),c("td",[e._v("按钮风格的checkbox")]),e._v(" "),c("td",[e._v("boolean")]),e._v(" "),c("td",[e._v("true/false")]),e._v(" "),c("td",[e._v("false")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"checkbox-group-%E4%BA%8B%E4%BB%B6-%E3%80%82"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checkbox-group-%E4%BA%8B%E4%BB%B6-%E3%80%82"}},[this._v("¶")]),this._v(" checkbox-group 事件 。")])},function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("table",[c("thead",[c("tr",[c("th",[e._v("事件名称")]),e._v(" "),c("th",[e._v("说明")]),e._v(" "),c("th",[e._v("事件回调参数")])])]),e._v(" "),c("tbody",[c("tr",[c("td",[e._v("change")]),e._v(" "),c("td",[e._v("选中状态发生变化后")]),e._v(" "),c("td",[e._v("更新后的值(数组)")])])])])}],!1,null,null,null);h.options.__file="doc/pages/checkbox.md";t.default=h.exports}}]);