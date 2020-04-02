import ToastV from './toast'
import Vue from 'vue'
const Ctor = Vue.extend(ToastV)
let div
let queue = []
let seed=0
const noticeMargin = 10
function Toast(msg, params) {
    const pa = setParams(msg, params)
    let instance = createInstance(pa)
    instance.toastId = seed++
    instance.visible = true
    if (pa.duration) {
        setTimeout(() => {
            instance.visible = false
            Toast.close(instance,pa)
            // instance.$destroy()
            // instance.$el.parentNode && instance.$el.parentNode.removeChild(instance.$el)
        }, pa.duration)
    }

}

Toast.close=function(instance,options){
    let deleteIndex = -1
    for(let i=0;i<queue.length;i++){
        let element = queue[i]
        if(element.toastId === instance.toastId){
            deleteIndex = i
            queue.splice(i,1)
            break;
        }
    }
    if(deleteIndex>-1){
        let removedHeight = queue[deleteIndex].$el.offsetHeight
        for(let i=deleteIndex;i<queue.length;i++){
            var element = queue[i]
            let newTop = (element.$el.offsetTop -removedHeight -noticeMargin) +'px'
            console.log(newTop)
            element.$el.style.top=newTop
        }
    }
   
}

function setParams(msg, params) {
    let defPara = {
        duration: 3000,
        position: 'top'
    }

    if (typeof msg === 'string') {
        let pa = Object.assign({}, defPara, params)
        return {
            msg: msg,
            ...pa
        }
    }
    pa = Object.assign({}, defPara, msg)
    return {
        ...pa
    }
}

function createInstance(options) {
    const instance = new Ctor({
        propsData: options
    })
    div = document.createElement('div')
    document.body.appendChild(div)
    instance.$mount(div)
    let offset = options.offset||20
    queue.forEach(q=>{
        offset += (q.$el.offsetHeight+noticeMargin)
    })
    instance.offset = offset
    queue.push(instance)

    return instance


}
export default {
    install(Vue) {
        Vue.prototype.eToast = Toast
    }
}