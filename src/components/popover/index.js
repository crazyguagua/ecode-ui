import PopperMixin from '@/mixin/popper.js'
import {on,off} from '@/util/dom'
export default{
    name:'ecodePopover',
    props: {
        title:String,
        content:String,
    },
    mixins:[PopperMixin],
    render(h){
        const popoverDiv = this.visible?<div class="ecode-popover" ref="popper">
            <div class="title"></div>
            <div class="content">
                {this.content||this.$slots.content}
            </div>
        </div>:null
        return (
            <span >
                <transition name={this.transition}>
                    {popoverDiv}
                </transition>
                {this.$slots.reference}
            </span>
        );
    },
    mounted(){
        this.initReference()
        this.bindRefernceEvent()
    },
    methods:{
        bindRefernceEvent(){
           if(this.trigger==='click'){
              on(this.reference,'click',this.showPopper)
           }
        },
        //取到reference
        initReference(){
            let slots = this.$slots.reference?this.$slots.reference:this.$slots.default
            let slot = slots[0]
            if(!slot){
                throw new Error('只少需要默认slot，或者reference具名插槽')
            }
            this.reference = slot.elm
        }
    }
}