
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
/**
 *  reference，popper的 鼠标移入和移出只是设置关闭的标志，真正是否关闭还要看是不是移动到了tooltip里面，或者从tooltip移动回popper
 */
export default{

    props:{
        content:'', //tooltip内容
        placement:{type:String,default:'top'},
        offset:{type:Array,default:()=>[0, 10]},
        value:{type:Boolean,default:false}, //状态是否可见
        disabled:{type:Boolean,default:false}, //是否禁用
        theme:{type:String,default:'dark'},
        tooltipClass:{type:String,default:''},
        transition:{type:String,default:'ecode-fade'},//自定义过渡动画
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
        this.unbindEvents()
        this.popper.$destroy() //popper Vue实例销毁
        if(document.body.contains(this.popper.$el)){
            //移除一直显示的tooltip
            document.body.removeChild(this.popper.$el) //从document移除
        }
    },
    methods:{
        destroy(){
            //移出popper 的el
            if(this.popperIns)this.popperIns.destroy()
            document.body.removeChild(this.popper.$el) //从document移除
        },
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
            // popperDiv.style.marginBottom = '18px'//用margin挡住没有用 放弃
            return ins
        },
        //显示tooltip ，可能鼠标从popper 移动回reference,这是不用创建popper
        showPopper(){
            this.canClose = false 
            clearTimeout(this.beginHideTimer)
            if(this.visible){
                return
            }
            this.visible = true
            this.$nextTick(()=>this.createPopper())
        },
        //200ms内没有移入tooltip 就关闭了
        handleClose(){
            this.beginHideTimer = setTimeout(()=>{
                clearTimeout(this.beginHideTimer)
                //如果进入了popper 不让关闭
                if((this.canClose && !this.value) || !this.enterable){ 
                    //排除掉 一直显示的情况和配置了不让进入tooltip的情况
                    this.visible = false
                }
                
            },200)
        },
        //开始关闭
        beginHide(){
            this.canClose = true
            this.handleClose()
        },
        bindReferenceListener(){
           on(this.reference,'mouseenter',this.showPopper) 
           //设置关闭标识 如果在200ms内没有移入tooltip 那就关闭了。
           on(this.reference,'mouseleave',this.beginHide)
        },
        unbindEvents(){
            off(this.reference,'mouseenter',this.showPopper)
            off(this.reference,'mouseleave',this.beginHide)
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
            let popper = (<div v-show={this.visible}  ref="popper" class={['ecode-tooltip',{[`ecode-tooltip-${this.theme}`]:true},{[`${this.tooltipClass}`]:true}]} 
             placement={this.placement} onMouseenter={()=>{
                this.canClose = false //设置标志，不让popper关闭
             }} onMouseleave={()=>{
                 this.canClose = true;this.handleClose();
             }}>
                {this.$slots.content||this.content}
                <div  class={['arrow']} data-popper-arrow></div>
            </div>)
            return <transition name={this.transition} onAfterLeave={this.destroy}>
               {popper}
            </transition>
        },
        renderReference(){
            let slots = this.$slots.default
            return slots&&slots.length>0?slots[0]:null
        },
    }
}