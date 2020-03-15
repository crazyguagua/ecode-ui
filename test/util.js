import Vue from 'vue'
let id 
const createElm=()=>{

   let div =  document.createElement('div')
   div.id = id++
   document.body.appendChild(div)
   return div
}
const destroyVM = (vm)=> {
    vm.$destroy && vm.$destroy();
    vm.$el &&
    vm.$el.parentNode &&
    vm.$el.parentNode.removeChild(vm.$el);
};

const createVm = (comp,cfg={},isMount=false)=>{
    let vm = null
    if (Object.prototype.toString.call(comp) === '[object String]') {
        comp = { template: comp };
        vm = new Vue(comp)
    }else{
        const Ctor = Vue.extend(comp)
        vm = new Ctor(cfg)
        const elm = createElm();
    }
   
    vm.$mount(isMount?elm:null)
    return vm
}

/**
 * 等待 ms 毫秒，返回 Promise
 * @param {Number} ms
 */
const wait = function(ms = 50) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
  };
  
  /**
   * 等待一个 Tick，代替 Vue.nextTick，返回 Promise
   */
const waitImmediate = () => wait(0);
export {

    createElm,destroyVM,createVm,waitImmediate,wait
}