import Vue from 'vue'
import {createVm,destroyVM,waitImmediate,wait} from './util'
import {
    EInput
} from '@/index.js'
Vue.component('EInput',EInput)
import chai from 'chai'
Vue.config.productionTip = false
Vue.config.devtools = false
const expect = chai.expect
//describe和it 是mocha提供的  expect chai
describe('EInput', () => {

    it('存在', () => {
        expect(EInput).to.exist
    })
    describe('支持属性：', () => {
        it('可以设置value', () => {
            const vm = createVm(EInput,{
                propsData: {
                    value: '张三'
                }
            })
            const input = vm.$el.querySelector('input')
            // console.log(input.outerHTML)
            expect(input.value).to.equal('张三')
            destroyVM(vm)
        })

        it('可以设置只读', () => {
            const vm = createVm(EInput,{
                propsData: {
                    readonly: true
                }
            })
            const input = vm.$el.querySelector('input')
            // console.log(input.outerHTML)  
            // 注意readOnly O 要大写
            expect(input.readOnly).to.equal(true)
            destroyVM(vm)
        })

        it('可以设置禁用', () => {
            const vm = createVm(EInput,{
                propsData: {
                    disabled: true
                }
            })
            const input = vm.$el.querySelector('input')
            expect(input.disabled).to.equal(true)
            destroyVM(vm)
        })

        it('可以设置禁用', () => {
            const vm = createVm(EInput,{
                propsData: {
                    disabled: true
                }
            })
            const input = vm.$el.querySelector('input')
            expect(input.disabled).to.equal(true)
            destroyVM(vm)
        })
    })
    describe('支持事件：',()=>{
        it('change事件',async ()=>{
            const vm = createVm(EInput)
            const callback = sinon.spy()
            const input = vm.$el.querySelector('input')
            vm.$on('change',callback)
            //触发input的change事件
            const event = new Event('change')
            input.value = 'change'
            input.dispatchEvent(event)
            await waitImmediate()
            expect(callback.calledWith('change')).to.be.true //被触发同时传递event事件对象
            destroyVM(vm)
        })
    })

    describe('支持v-model：',()=>{
        it('change事件',async ()=>{
            const vm = createVm({
                template:'<e-input v-model="value"> </e-input>',
                data(){
                   return{
                       value:'abc'
                   }
                }
            })
            const input = vm.$el.querySelector('input')
            input.value = 'cba'
            input.dispatchEvent(new Event('input')) //触发事件才可以
            await wait(300)
            expect(vm.value).to.eq('cba') //被触发同时传递event事件对象
            destroyVM(vm)
        })
    })
})