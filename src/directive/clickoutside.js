const ctx = 'clickoutsideContext'

let nodeList = []
let seed = 0
document.addEventListener('click', (e) => {

    nodeList.forEach(item => {
        item[ctx].handler(e)
    })
})

const createDocClickHandler = (el, binding, vnode) => {
    return (e) => {
        let target = e.target
        let expression = binding.expression //字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
        let method = vnode.context[expression]
        let value = binding.value // 变量 指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
        //指令的表达式 的方法在 vnode context 中是否存在方法
        // 需要判断 点击的元素是否在 el之外 ，同时还需要排除点击下拉的元素
        //或者 在触发点击上加修饰符.stop
        let popElm = vnode.context.popElm
        if (!el.contains(target) && !(popElm && popElm.contains(target))) {
            if (expression && method) {
                method()
            } else if (value) {
                value()
            }
        }
    }
}

export default {

    bind(el, binding, vnode) {
        el[ctx]={
            id : seed++,
            handler : createDocClickHandler(el, binding, vnode)
        }
        nodeList.push(el)
    },
    update(el, binding, vnode) {
        // 不能放在vnode 上 vnode 会变 bind时候绑了 update的时候又变了 而el不会变
        el[ctx].handler = createDocClickHandler(el, binding, vnode)
    },
    unbind(el,binding,vnode){
        nodeList.forEach((item,index)=>{
            if(item[ctx].id === el[ctx].id){
                item[ctx].handler=null
                delete item[ctx]
                nodeList.splice(index,1)
            }
        })
    }
}