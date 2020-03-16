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

export {

    createElm,destroyVM,createVm
}