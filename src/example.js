import Vue from 'vue'
import EButton from './button'
import EIcon from './icon'
import EButtonGroup from './buttonGroup'
import EInput from './input/input'
import App from './App'
import './style/index.scss'
Vue.component('e-button',EButton)
Vue.component('e-icon',EIcon)
Vue.component('e-button-group',EButtonGroup)
Vue.component('e-input',EInput)
new Vue({
    el:'#app',
    render:(h)=>{
        return   h(App)
    }
})

