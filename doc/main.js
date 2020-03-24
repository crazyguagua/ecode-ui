import Vue from 'vue'
import hljs from 'highlight.js';
import App from './App'
import ECodeUI from '@/index'
import router from './router'
import './style/index.scss'
import DemoBlock from './components/demo-block'

Vue.component('demo-block',DemoBlock)
Vue.use(ECodeUI)

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