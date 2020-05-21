import { createPopper } from '@popperjs/core';
import {getNextZIndex} from '@/util/zIndexManager'
export default{
    data(){
        return {
            visible:false ,//是否出现popper
            canClose:false,//是否可以关闭popper
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
        transition:{type:String,default:'ecode-fade'}
    },
    methods:{
        createPopper(){
            let reference = this.reference||this.$refs.reference
            let popper = this.popper||this.$refs.popper
            if(this.showArrow){
                let arrow = document.createElement('div')
                arrow.className='arrow'
                arrow.setAttribute('data-popper-arrow',true)
                popper.appendChild(arrow)
            }
            document.body.appendChild(popper)
            popper.style.zIndex = getNextZIndex()
            let popperIns = createPopper(reference, popper,this.getPopperOption());
            this.popperIns = popperIns
        },
        showPopper(){
            if(this.visible){
                return
            }
            this.visible = true
            this.$nextTick(()=>{
                if(!this.popperIns)this.createPopper()
               
            })
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