(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{58:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content ecode-doc"},[n("h1",[t._v("Tab 选项卡")]),t._v(" "),t._m(0),t._v(" "),n("demo-block",[n("div",[n("p",[t._v("基础简洁的标签页")])]),t._v(" "),n("template",{slot:"source"},[n("element-demo0")],1),t._v(" "),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('    <e-tabs v-model="current">\n        <e-tab label="利物浦" name="liverpool">\n            萨拉赫 马内 菲儿米诺\n        </e-tab>\n        <e-tab label="曼城" name="man_city">\n            <div>斯特林 阿奎罗 德布劳内</div>\n        </e-tab>\n        <e-tab label="热刺" name="hotspurs">\n            <div >孙新民 凯恩 阿里</div>\n        </e-tab>\n    </e-tabs>\n    <script>\n        export default {\n            data(){\n                return {\n                    current:\'liverpool\'\n                }\n            }\n        }\n    <\/script>\n')])])])],2),t._m(1),t._v(" "),n("demo-block",[n("div",[n("p",[t._v('通过slot="label" 自定义标签头')])]),t._v(" "),n("template",{slot:"source"},[n("element-demo1")],1),t._v(" "),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('    <e-tabs v-model="current">\n        <e-tab  name="liverpool">\n            <span slot="label"> <e-icon name="ecode-zuqiu" ></e-icon> 红军利物浦 </span>\n            萨拉赫 马内 菲儿米诺\n        </e-tab>\n        <e-tab label="曼城" name="man_city">\n            <div>斯特林 阿奎罗 德布劳内</div>\n        </e-tab>\n        <e-tab label="热刺" name="hotspurs">\n            <div >孙新民 凯恩 阿里</div>\n        </e-tab>\n    </e-tabs>\n    <script>\n        export default {\n            data(){\n                return {\n                    current:\'liverpool\'\n                }\n            }\n        }\n    <\/script>\n')])])])],2),t._m(2),t._v(" "),n("demo-block",[n("template",{slot:"source"},[n("element-demo2")],1),t._v(" "),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v("    <div>\n        <e-button size=\"small\" @click=\"backToOne\">回到第一个</e-button>\n    </div>\n     <e-tabs v-model=\"current\" @editTab=\"handleEditTab\" :editable=\"true\" style=\"max-width:500px;\">\n        <e-tab  v-for=\"t in tabs\" :name=\"t.name\" :key=\"t.name\" :label=\"t.title\" :closable=\"true\">\n                {{t.content}}\n        </e-tab>\n    </e-tabs>\n    <script>\n        export default {\n            data(){\n                return {\n                    current:'liverpool',\n                    tabs:[\n                        {title:'利物浦',content:'萨拉赫 马内 菲儿米诺',name:'liverpool'},\n                         {title:'曼城',content:'斯特林 阿奎罗 德布劳内',name:'man_city'},\n                          {title:'热刺',content:'孙新民 凯恩 阿里',name:'hotspurs'}\n                    ],\n                    id:0\n                }\n            },\n            methods:{\n                handleEditTab(){\n                   let id = (this.id++)\n                   this.tabs.push({\n                        title:'title   '+id,content:'content    '+id,name:'tab_'+id\n                   })\n                   this.current = 'tab_'+id\n                },\n                backToOne(){\n                    this.current = 'liverpool'\n                }\n            }\n        }\n    <\/script>\n")])])])],2)],1)};a._withStripped=!0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},l={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("e-tabs",{model:{value:t.current,callback:function(e){t.current=e},expression:"current"}},[n("e-tab",{attrs:{label:"利物浦",name:"liverpool"}},[t._v("\n            萨拉赫 马内 菲儿米诺\n        ")]),t._v(" "),n("e-tab",{attrs:{label:"曼城",name:"man_city"}},[n("div",[t._v("斯特林 阿奎罗 德布劳内")])]),t._v(" "),n("e-tab",{attrs:{label:"热刺",name:"hotspurs"}},[n("div",[t._v("孙新民 凯恩 阿里")])])],1)],1)};t._withStripped=!0;return r({render:t,staticRenderFns:[]},{data:function(){return{current:"liverpool"}}})}(),"element-demo1":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("e-tabs",{model:{value:t.current,callback:function(e){t.current=e},expression:"current"}},[n("e-tab",{attrs:{name:"liverpool"}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("e-icon",{attrs:{name:"ecode-zuqiu"}}),t._v(" 红军利物浦 ")],1),t._v("\n            萨拉赫 马内 菲儿米诺\n        ")]),t._v(" "),n("e-tab",{attrs:{label:"曼城",name:"man_city"}},[n("div",[t._v("斯特林 阿奎罗 德布劳内")])]),t._v(" "),n("e-tab",{attrs:{label:"热刺",name:"hotspurs"}},[n("div",[t._v("孙新民 凯恩 阿里")])])],1)],1)};t._withStripped=!0;return r({render:t,staticRenderFns:[]},{data:function(){return{current:"liverpool"}}})}(),"element-demo2":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("e-button",{attrs:{size:"small"},on:{click:t.backToOne}},[t._v("回到第一个")])],1),t._v(" "),n("e-tabs",{staticStyle:{"max-width":"500px"},attrs:{editable:!0},on:{editTab:t.handleEditTab},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}},t._l(t.tabs,(function(e){return n("e-tab",{key:e.name,attrs:{name:e.name,label:e.title,closable:!0}},[t._v("\n                "+t._s(e.content)+"\n        ")])})),1)],1)};t._withStripped=!0;return r({render:t,staticRenderFns:[]},{data:function(){return{current:"liverpool",tabs:[{title:"利物浦",content:"萨拉赫 马内 菲儿米诺",name:"liverpool"},{title:"曼城",content:"斯特林 阿奎罗 德布劳内",name:"man_city"},{title:"热刺",content:"孙新民 凯恩 阿里",name:"hotspurs"}],id:0}},methods:{handleEditTab:function(){var t=this.id++;this.tabs.push({title:"title   "+t,content:"content    "+t,name:"tab_"+t}),this.current="tab_"+t},backToOne:function(){this.current="liverpool"}}})}()}},i=n(0),s=Object(i.a)(l,a,[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95"}},[this._v("¶")]),this._v(" 基本用法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%87%E7%AD%BE%E5%A4%B4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%87%E7%AD%BE%E5%A4%B4"}},[this._v("¶")]),this._v(" 自定义标签头")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"%E6%96%B0%E5%A2%9E%E5%92%8C%E5%85%B3%E9%97%AD%E6%A0%87%E7%AD%BE%E9%A1%B5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#%E6%96%B0%E5%A2%9E%E5%92%8C%E5%85%B3%E9%97%AD%E6%A0%87%E7%AD%BE%E9%A1%B5"}},[this._v("¶")]),this._v(" 新增和关闭标签页")])}],!1,null,null,null);s.options.__file="doc/pages/tab.md";e.default=s.exports}}]);