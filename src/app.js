import Vue from 'vue'
import EButton from './button'
import EIcon from './icon'
Vue.component('e-button',EButton)
Vue.component('e-icon',EIcon)
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