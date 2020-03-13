import Vue from 'vue'

import {EButton} from '../src/index.js'

import chai from 'chai'
Vue.config.productionTip = false
Vue.config.devtools = false
const expect = chai.expect
//BDD 行为驱动测试
describe('EButton',()=>{
    it('存在EButton组件.', ()=>{
        //expect(EButton!=undefined).to.eq(true)   //EButton 不等于 undefined false '' null
        expect(EButton).to.exist
    })

    it('存在icon属性.',()=>{
        const Ctor = Vue.extend(EButton)
        const button = new Ctor({
            propsData:{
                icon:'ecode-download'
            }
        })
        button.$mount()
        let  useHref = button.$el.querySelector('use').getAttribute('xlink:href');
        expect(useHref).to.eq('#ecode-download');
        button.$destroy()
    })

    it('存在loading属性.',()=>{
        const Ctor = Vue.extend(EButton)
        const button = new Ctor({
            propsData:{
                loading:true
            }
        })
        button.$mount()
        let  useHref = button.$el.querySelector('use').getAttribute('xlink:href');
        expect(useHref).to.eq('#ecode-loading');
        button.$destroy()
    })

    it('默认图标位置在左侧.',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div);// 少了这句 没有加载到页面上导致 computedeStyle 获取不到内容
        const Ctor = Vue.extend(EButton)
        const button = new Ctor({
            propsData:{
                icon:'ecode-download',
            }
        })
       
        button.$mount(div)
        let  svg = button.$el.querySelector('svg');
        const order = window.getComputedStyle(svg).order
        console.log(svg)
        expect(order).to.eq('1');
        button.$el.remove()
        button.$destroy()
    })

    it('可以设置图标到右侧.',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div);// 少了这句 没有加载到页面上导致 computedeStyle 获取不到内容
        const Ctor = Vue.extend(EButton)
        const button = new Ctor({
            propsData:{
                icon:'ecode-download',
                iconPosition:'right'
            }
        })
       
        button.$mount(div)
        let  svg = button.$el.querySelector('svg');
        const order = window.getComputedStyle(svg).order
        expect(order).to.eq('2');
        button.$el.remove()
        button.$destroy()
    })

    it('按钮可以有点击事件.',()=>{
        //这里不需要挂在到页面上
        const Ctor = Vue.extend(EButton)
        const vm = new Ctor({
            propsData:{
                icon:'ecode-download',
                iconPosition:'right'
            }
        })
       
        vm.$mount()
        const callback = sinon.fake()
        vm.$on('click',callback)
        vm.$el.click()

        expect(callback.called)

    })
})