import Vue from 'vue'
import EButton from './button'
import EIcon from './icon'
import EButtonGroup from './buttonGroup'
Vue.component('e-button',EButton)
Vue.component('e-icon',EIcon)
Vue.component('e-button-group',EButtonGroup)
new Vue({
    el:'#app',
    data(){
        return {
            loading1:false,
            loading2:false,
            loading3:false,

        }
    }
})