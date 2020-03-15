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

const createVm = (comp,propsData={},isMount=false)=>{
    const Ctor = Vue.extend(comp)
    const vm = new Ctor(propsData)
    const elm = createElm();
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