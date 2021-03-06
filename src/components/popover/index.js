import PopperMixin from '@/mixin/popper.js'
import {on,off} from '@/util/dom'
export default{
    name:'ePopover',
    props: {
        trigger:{type:String,default:'click',validator:(value)=>{
            return ['click','hover','focus','manual'].includes(value)
        }},
        title:{type:String},
        popoverClass:{type:String}
    },
    mixins:[PopperMixin],
    data(){
        return {
            referenceWidth:null
        }
    },
    render(h){
        
        let popoverDivJsx =  <transition  name={this.transition} onAfterEnter={this.onAfterEnter} onAfterLeave={this.onAfterLeave} >
            <div v-show={this.visible}   class={["ecode-popover",this.popoverClass]} ref="popper" onMouseenter={
                ()=>{
                    this.canClose = false
                }}  style={{minWidth:this.referenceWidth}}
                onMouseleave={
                ()=>{
                    this.canClose = true;
                    if(this.trigger === 'hover'){
                        this.hidePopperByHover();
                    }
                }
            }>
            { this.title||this.$slots.title?<div class="title">{this.title||this.$slots.title}</div>:null}
                <div class="content">
                        {this.content||this.$slots.content}
                    </div>
                </div>
        </transition>
        let popoverDiv = null
        if(this.lazyRender){
            popoverDiv = this.visible?popoverDivJsx:null
        }else{
            popoverDiv = popoverDivJsx
        }
        return (
            <div class="ecode-popover-wrapper" >
                {this.$slots.reference}
                {popoverDiv}
            </div>
        );
    },
    mounted(){
        this.initReference()
        this.bindRefernceEvent()
    },
    beforeDestroy(){ //销毁事件监听
        off(this.reference,'click',this.show)
        off(document.documentElement,'click',this.handleClickOutSide)
        off(this.reference,'mouseenter',this.onMouseEnter)
        off(this.reference,'mouseleave',this.onMouseLeave)
        off(this.reference,'focusin',this.onMouseEnter)
        off(this.reference,'focusout',this.focusLeave)
        this.visible = false
        this.destroy()
    },
    methods:{
        //根据trigger绑定不同的时间
        bindRefernceEvent(){
           if(this.trigger==='click'){
              on(this.reference,'click',this.toggle)
              on(document.documentElement,'click',this.handleClickOutSide) //点击外部关闭
           }else if(this.trigger === 'hover'){
              on(this.reference,'mouseenter',this.onMouseEnter)
              on(this.reference,'mouseleave',this.onMouseLeave)
           }else if(this.trigger === 'focus'){
            on(this.reference,'focusin',this.onMouseEnter)
            on(this.reference,'focusout',this.onFocusLeave)
           }else if(this.trigger === 'manual'){
               if(this.value){
                    this.showPopper()
                }
              this.$watch('value',
               (newVal,oldVal)=>{
                    if(!newVal){
                        this.hidePopper()
                    }else{
                        this.showPopper()
                    }
                }
              )
           }
        },
        //鼠标移入，因为在mixin里操作visible，所以先传个callback
        onMouseEnter(){
            this.canClose = false
            this.showPopperByHover()
        },
        onMouseLeave(){ //鼠标移出
            this.canClose = true
            this.hidePopperByHover()
        },
        toggle(e){ //切换显示popper
            if(!this.visible){
                this.showPopper()
            }else{
                this.hidePopper()
            }
        },
        onFocusLeave(){
            this.hidePopper()
        },
        //取到reference
        initReference(){
            let slots = this.$slots.reference?this.$slots.reference:this.$slots.default
            let slot = slots[0]
            if(!slot){
                throw new Error('至少需要默认slot，或者reference具名插槽')
            }
            this.reference = slot.elm
            this.referenceWidth = this.reference.offsetWidth+'px'
        },
        onAfterLeave(){
            this.$emit('after-leave')
        },
        onAfterEnter(){
            this.$emit('after-enter')
        }
      
    }
}