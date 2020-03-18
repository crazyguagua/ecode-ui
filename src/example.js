import Vue from 'vue'
import EButton from '@/components/button/button'
import EIcon from '@/components/icon/icon'
import EButtonGroup from '@/components/button/buttonGroup'
import EInput from '@/components/input/input'
import ERow from '@/components/grid/row'
import ECol from '@/components/grid/col'
import App from './App'
import './style/index.scss'
Vue.component('e-button',EButton)
Vue.component('e-icon',EIcon)
Vue.component('e-button-group',EButtonGroup)
Vue.component('e-input',EInput)
Vue.component('e-row',ERow)
Vue.component('e-col',ECol)
new Vue({
    el:'#app',
    render:(h)=>{
        return   h(App)
    }
})

