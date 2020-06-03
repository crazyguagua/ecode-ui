import Vue from 'vue'
import hljs from 'highlight.js';
import App from './App'
import ECodeUI from '@/index'
import router from './router'
import './style/index.scss'
import DemoBlock from './components/demo-block'
window.log = console.log.bind()
Vue.component('demo-block',DemoBlock)
Vue.use(ECodeUI)


Vue.prototype.$icons = ['ecode-i-add','ecode-zuqiu','ecode-message','ecode-warn1','ecode-fail','ecode-chenggong','ecode-error-cricle-fill','ecode-xiaoxi','ecode-searchclose','ecode-triangle-copy','ecode-triangle1','ecode-ok','ecode-warn','ecode-arrow-left','ecode-arrow-right','ecode-loading','ecode-search','ecode-downlaod']
Vue.prototype.tableData =[
    {rank:1,name:'利物浦',score:'101',star:"萨拉赫，马内 菲尔米诺",id:"001",
        column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',
    },
    {rank:2,name:'曼城',score:'80',star:"萨内，阿奎罗，斯特林",id:"002",
      column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',},
    {rank:3,name:'莱斯特城',score:'70',star:"瓦尔迪，詹姆斯麦迪逊，蒂莱曼斯",id:"003",
      column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',},
    {rank:4,name:'切尔西',score:'66',star:"坎特，威廉，吉鲁",id:"004",
      column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',},
        {rank:5,name:'曼联',score:'60',star:"拉屎福德 林加德 德赫亚",id:"005",
      column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',},
        {rank:6,name:'狼队',score:'60',star:"劳尔希门尼斯，阿达马特劳雷，鲁本内维斯",id:"006",
      column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',}
]
Vue.prototype.tableData2 =  [
  {rank:1,name:'WE',score:'15/1',star:"morgan beishang teacherma missing jiumeng",id:"001",
      column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',
  },
  {rank:2,name:'IG',score:'14/2',star:"theshy ning rookie southwind puff",id:"002",
  column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',},
  {rank:3,name:'TES',score:'13/3',star:"369 karsa knight jackylove qiuqiu",id:"003",
  column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',},
  {rank:4,name:'FPX',score:'12/4',star:"gimgoon tian doinb lwx crisp",id:"004",
  column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',},
      {rank:5,name:'VG',score:'10/6',star:"cube leyan forge iboy hang",id:"005",
  column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',},
      {rank:6,name:'ES',score:'9/7',star:"bai wei cryin wink shuaiC",id:"006",
  column1:'column1', column2:'column2', column3:'column3', column4:'column4', column5:'column5',}
  ]
Vue.prototype.$teams = [{
  label:'利物浦',value:1
},{
  label:'曼城',value:2
},{
  label:'莱切斯特',value:3
},{
  label:'切尔西',value:4
},{
  label:'曼联',value:5,disabled:true
},{
  label:'狼队',value:6
},{
  label:'谢菲尔德联',value:7
},{
  label:'热刺',value:8
},{
  label:'阿森纳',value:9
},{
  label:'伯恩利',value:10
},{
  label:'水晶宫',value:11
},{
  label:'埃弗顿',value:12
},{
  label:'纽卡斯尔',value:13
},{
  label:'南安普顿',value:14
},{
  label:'布莱顿',value:15
},{
  label:'西汉姆',value:16
},{
  label:'沃特福德',value:17
},{
  label:'伯恩茅斯',value:18
},{
  label:'阿斯顿维拉',value:19
},{
  label:'诺维奇',value:20
}]
const hljsFn = () => {
    let blocks = document.querySelectorAll('pre > code:not(.hljs)')
    blocks.forEach(b => {
        hljs.highlightBlock(b)
    })
}

new Vue({
    el: '#app',
    router,
    render: (h) => {
        return h(App)
    }
})
hljsFn()

router.afterEach((to, from, next) => {
    Vue.nextTick(() => {
        hljsFn()
    })
})