import Vue from 'vue'
import hljs from 'highlight.js';
import App from './App'
import ECodeUI from '@/index'
import router from './router'
import './style/index.scss'
import DemoBlock from './components/demo-block'

Vue.component('demo-block',DemoBlock)
Vue.use(ECodeUI)


Vue.prototype.$icons = ['ecode-i-add','ecode-zuqiu','ecode-message','ecode-warn1','ecode-fail','ecode-chenggong','ecode-error-cricle-fill','ecode-xiaoxi','ecode-searchclose','ecode-triangle-copy','ecode-triangle1','ecode-ok','ecode-warn','ecode-arrow-left','ecode-arrow-right','ecode-loading','ecode-search','ecode-downlaod']

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