import ToastV from './toast'
import Vue from 'vue'
let div
let queue = []
function Toast(params) {
    let instance = createInstance(params)
    instance.msg = '111111'
    setTimeout(() => {
        instance.$destroy()
        instance.$el.parentNode && instance.$el.parentNode.removeChild(instance.$el)
    }, 3000)
}

function createInstance (options) {
    if(!queue.length || !options.multiple){
        const Ctor = Vue.extend(ToastV)
        const instance = new Ctor()
        div = document.createElement('div')
        document.body.appendChild(div)
        instance.$mount(div)
        queue.push(instance)
      
        return instance
    }else{
        return queue[length-1]
    }
   
   
}
export default {
    install(Vue) {
        Vue.prototype.eToast = Toast
    }
}