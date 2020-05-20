
import { createPopper } from '@popperjs/core';
import {on,off} from '@/util/dom'
import Vue from 'vue'
import {getNextZIndex} from '@/util/zIndexManager'
const Ctor = Vue.extend({
    data(){return {child:null}},
    render(h){
        return this.child
    }
})
// type Placement =
//   | 'auto'
//   | 'auto-start'
//   | 'auto-end'
//   | 'top'
//   | 'top-start'
//   | 'top-end'
//   | 'bottom'
//   | 'bottom-start'
//   | 'bottom-end'
//   | 'right'
//   | 'right-start'
//   | 'right-end'
//   | 'left'
//   | 'left-start'
//   | 'left-end';
export default{

    props:{
        content:'', //tooltip内容
        placement:{type:String,default:'top'},
        offset:{type:Array,default:()=>[0, 10]},
        value:{type:Boolean,default:false}, //状态是否可见
        disabled:{type:Boolean,default:false}, //是否禁用
        theme:{type:String,default:'dark'},
        tooltipClass:{type:String,default:''},
        enterable:{type:Boolean,default:true} //鼠标是否可以进入tooltip
    },
    data(){
        return {
            visible:false
        }
    },
    created(){
        this.popper = new Ctor().$mount()
    },
    render(h){
        this.popper.child = this.renderPopper() //在render里面写，可以动态的修改 popper的content，有可能会变的
        return this.renderReference()
    },
    mounted(){
        this.reference = this.$el
        this.bindReferenceListener()
        if(this.value){
            this.visible = true
            this.$nextTick(()=>{
                this.createPopper()
            })
        }
    },
    beforeDestroy(){
        this.popperIns.destroy()
        document.body.removeChild(this.popper.$el)
        this.popper.$destroy()
    },
    methods:{
        updatePopper(){
            this.checkExsit()
            this.popperIns.update()
        },
        checkExsit(){
            if(!this.popperIns){
                this.popperIns = this.createPopper()
            }
        },
        //创建popper
        createPopper(){
            let popperDiv = this.popper.$el
            document.body.appendChild(popperDiv)
            popperDiv.style.zIndex = getNextZIndex()
            let ins = createPopper(this.reference, popperDiv,this.getPopperOption());
            return ins
        },
        //隐藏popper
        hidePopper(){
            if(this.value || this.enterPopper){
                return
            }
            this.visible = false
        },
        showPopper(){
            this.visible = true
            this.$nextTick(()=>this.createPopper())
        },
        bindReferenceListener(){
           on(this.reference,'mouseenter',this.showPopper) 
           on(this.reference,'mouseleave',this.hidePopper) 
        },
        getPopperOption(){
            return {
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                          offset: this.offset,
                        },
                    },
                    {
                        name: 'flip',
                        enabled: true,
                        options: {
                          padding: 5,
                        },
                    },
                ],
                placement:this.placement
            }
        },
        renderPopper(){
            //jsx 里面也可用 v-show 指令,v-if不能用 
            let popper = this.visible?(<div  ref="popper" class={['ecode-tooltip',{[`ecode-tooltip-${this.theme}`]:true},{[`${this.tooltipClass}`]:true}]} 
             placement={this.placement} on-mouse-enter={this.enterPopper =true } on-mouse-leave={this.enterPopper =false }>
                {this.$slots.content||this.content}
                <div  class={['arrow']} data-popper-arrow></div>
            </div>):null
            return <transition name="ecode-fade">
               {popper}
            </transition>
        },
        renderReference(){
            let slots = this.$slots.default
            return slots&&slots.length>0?slots[0]:null
        },
    }
}