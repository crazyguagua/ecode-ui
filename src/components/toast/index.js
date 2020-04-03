import ToastV from './toast'
import Vue from 'vue'
const Ctor = Vue.extend(ToastV)
let div
let queue = []
let centerQueue =[]
let bottomQueue =[]    //分三个队列处理不同的位置
let seed=0
const noticeMargin = 20
function Toast(msg, params) {
    const pa = setParams(msg, params)
    let instance = createInstance(pa)
    instance.visible = true

}

Toast.close=function(instance){
    let deleteIndex = -1
    let position = instance.position
    let lQueue = position=='top'?queue:(position=='middle'?centerQueue:bottomQueue)
    let removedHeight 
    for(let i=0;i<lQueue.length;i++){
        let element = lQueue[i]
        if(element.toastId === instance.toastId){
            deleteIndex = i
            removedHeight = lQueue[deleteIndex].$el.offsetHeight
            lQueue.splice(i,1)
            break;
        }
    }
    if(deleteIndex>-1){
       
        for(let i=deleteIndex;i<lQueue.length;i++){
            var element = lQueue[i]
            //原来自己写的是 offsetTop, 这个值不对，notice会错误
            if(position == 'top' || position =='middle'){
                let newTop = (parseInt(element.$el.style.top,10) -removedHeight -noticeMargin) +'px'
                element.$el.style.top=newTop
            }else {
                let newBottom = (parseInt(element.$el.style.bottom,10) -removedHeight -noticeMargin) +'px'
                element.$el.style.bottom=newBottom
            }
           
           
        }
    }
   
}

function setParams(msg, params) {
    let defPara = {
        duration: 3000,
        position: 'top',
        showClose:false,
        onClose:(instance)=>{
            Toast.close(instance)
        }
    }

    if (typeof msg === 'string') {
        let pa = Object.assign({}, defPara, params)
        return {
            message: msg,
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
    let position = options.position
    let lQueue = position=='top'?queue:(position=='middle'?centerQueue:bottomQueue)

    const docHeight = document.documentElement.clientHeight // 这里要用可视区高度，不是offsetHeight ,因为可能有滚动条
    const startTop = position !='middle'?20:docHeight/2;
    let offset = options.offset||startTop
    // 设置新加入的toast 的top值
    lQueue.forEach(q=>{
        offset += (q.$el.offsetHeight+noticeMargin)
    })
    instance.offset = offset

    //给每个toast实例添加id
    instance.toastId = seed
    instance.$el.style.zIndex=10000+seed
    seed++

    lQueue.push(instance)

    return instance


}

['success','fail','warn','error','message'].forEach(type=>{
    Toast[type] = (msg,option)=>{
        if(typeof msg === 'string'){
            Toast(msg,{type:type,...option})
        }else if(typeof msg === 'object'){
            let msg = option.message||option.msg
            Toast(msg,{type:type,...option})
        }
    }
})

Toast.closeAll =()=>{
    [queue,centerQueue,bottomQueue].forEach(item=>{
        item.forEach(item=>{
            Toast.close(item)
        })
    })
    seed = 0
}
export default Toast