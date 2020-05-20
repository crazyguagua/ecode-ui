
import { createPopper } from '@popperjs/core';
import {on,off} from '@/util/dom'
import Vue from 'vue'
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
// type Strategy = 'absolute' | 'fixed';
export default{

    props:{
        content:'', //tooltip内容
        placement:{type:String,default:'top'},
        offset:{type:Array,default:()=>[0, 10]},
        value:{type:Boolean,default:false}, //状态是否可见
        disabled:{type:Boolean,default:false}, //是否禁用
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
            this.$nextTick(()=>{
                this.updatePopper()
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
            if(!this.popperIns){
                this.popperIns = this.createPopper()
            }
            this.popperIns.update()
        },
        //创建popper
        createPopper(){
            let popperDiv = this.popper.$el
            document.body.appendChild(popperDiv)
            let ins = createPopper(this.reference, popperDiv,this.getPopperOption());
            return ins
        },
        //隐藏popper
        hidePopper(){
            this.visible = false
        },
        showPopper(){
            this.visible = true
            this.$nextTick(()=>this.updatePopper())
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
                ],
                placement:this.placement
            }
        },
        renderPopper(){
            let styles = this.visible?{display:'block'}:{display:'none'} 
            let popper = (<div style={styles}  ref="popper" class="ecode-tooltip"  placement={this.placement}>
                {this.$slots.content||this.content}
                <div  class={['arrow']} data-popper-arrow></div>
            </div>)
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