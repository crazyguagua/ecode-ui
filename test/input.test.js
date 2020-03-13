import Vue from 'vue'
import {createVm,destroyVM} from './util'
import {
    EInput
} from '@/index.js'

import chai from 'chai'
Vue.config.productionTip = false
Vue.config.devtools = false
const expect = chai.expect

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

})