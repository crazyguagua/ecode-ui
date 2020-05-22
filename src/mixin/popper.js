import { createPopper } from '@popperjs/core';
import {getNextZIndex} from '@/util/zIndexManager'
export default{
    data(){
        return {
            visible:false ,//是否出现popper
            canClose:false,//是否可以关闭popper  常用在hover这种情况
            showArrow:true,//是否显示小三角箭头
        }
    },
    props:{
        trigger: {
            type: String,
            default: 'click',
            validator: value => ['click', 'focus', 'hover', 'manual'].indexOf(value) > -1
          },
        placement:{type:String,default:'bottom'},
        offset:{type:Array,default:()=>[0,10]},
        transition:{type:String,default:'ecode-fade'},
        value:Boolean, //手动控制popper显示
        title:String,   //popper标题
        content:String, //popper内容
    },
    beforeDestroy(){
        this.hidePopper()
    },
    methods:{
        createPopper(){
            let reference = this.reference||this.$refs.reference
            let popper = this.popper||this.$refs.popper
            this.popper = popper
            if(this.showArrow){
                let arrow = document.createElement('div')
                arrow.className='arrow'
                arrow.setAttribute('data-popper-arrow',true)
                popper.appendChild(arrow)
                this.arrow = arrow
            }
            document.body.appendChild(popper)
            popper.style.zIndex = getNextZIndex()
            let popperIns = createPopper(reference, popper,this.getPopperOption());
            this.popperIns = popperIns
        },
        showPopper(cb){
            if(this.visible){
                return
            }
            this.visible = true
            this.$nextTick(()=>{
               if(cb)cb()
                this.popperIns = this.createPopper()
            })
        },
        showPopperByHover(cb){ //通过hover显示popper
            if(this.visible){
                return
            }
            this.visible = true
            this.$nextTick(()=>{
                if(cb)cb()
                this.popperIns = this.createPopper()
            })
        },
        hidePopperByHover(){ //通过hover 离开隐藏popper
            this.hidePopperTimer = setTimeout(()=>{
                clearTimeout(this.hidePopper)
                if(this.canClose){
                    this.hidePopper()
                }
            },200)
        },
        hidePopper(){
            if(!this.visible){
                return
            }
            this.visible = false

            this.$nextTick(()=>{
               if(document.body.contains(this.popper)) {
                   this.popper.removeChild(this.arrow)
                   document.body.removeChild(this.popper)
               }
               this.popperIns = null
            })
        },
        handleClickOutSide(e){
            // 点击外部关闭
            let target  = e.target
            if(this.reference.contains(target)||(this.popper &&this.popper.contains(target))){
                return
            }
            if(this.reference && this.popper)this.hidePopper()
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
    }
}