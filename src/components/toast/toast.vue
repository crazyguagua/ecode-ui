<template>
  <div class="ecode-toast-wrapper" :class="[positionClass,{'center':center},{'hasClose':showClose}]" :style="styles" @mouseleave="handleMouseLeave" @mouseenter="handleMouseEnter">
      <transition :name="anime" @after-leave="handleAfterLeave">
        <div class="ecode-toast"  v-show="visible">
            <span class="iconType" v-if="type">
                <EIcon :name="iconType.iconType"  :style="{'fill':iconType.color}" />
            </span>
            <span>{{message}}</span>
            <span class="close" v-if="showClose" @click="handleClose" >
                <EIcon name="ecode-searchclose"  />
            </span>
        </div>
      </transition>
  </div>
</template>

<script>
import EIcon from '@/components/icon/icon'
const prefix = 'ecode-toast'
const defaultOffset = 20
export default {
    props:{
        message:{type:String},
        showClose:{type:Boolean,default:true},
        type:{type:String,validator:(value)=>{['success','fail','info','error','message'].includes(value)}},
        duration:{type:Number},
        center:{type:Boolean,default:false},
        onClose:{type:Function},
        customClass:{type:String},
        position:{type:String,validator:(value)=>{return ['top','bottom','middle'].includes(value)},default:'top'}
    },
    components:{
        EIcon
    },
    data(){
        return {
            offset:defaultOffset,
            visible:false,
            mouseEnter:false
        }
    },
    mounted(){
        this.startTimer()
    },
    computed:{
        positionClass(){
            return `${prefix}-${this.position}`
        },
        anime(){
            if(this.position === 'bottom'){
                return 'anime-up'
            }
            return 'anime-down'
        },
        iconType(){
            let iconType = ''
            let color = ''
            switch(this.type){
                case 'success':
                    iconType = 'ecode-chenggong'
                    color = '#1fef28'
                    break;
                 case 'fail':
                    iconType = 'ecode-fail'
                    color = '#e82d0a'
                    break;
                 case 'warn':
                    iconType = 'ecode-warn1'
                    color = '#eccb0d'
                    break;
                 case 'error':
                    iconType = 'ecode-error-cricle-fill'
                    color = '#e91e63'
                    break;
                 case 'message':
                    iconType = 'ecode-message'
                    color = '#009688'
                    break;
                default:
                    iconType =''
                    color = ''
            }
            return {
                color,iconType
            }
        },
        styles(){
             if(this.position === 'bottom'){
                return {
                    bottom:`${this.offset}px`
                }
            }
             return {
                    top:`${this.offset}px`
                }
        }
    },
    methods:{
        handleAfterLeave(){
            this.$destroy(true)
            this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
        },
        startTimer(){
            if(this.duration){
                setTimeout(this.close,this.duration)
            }
        },
        close(){
            if(!this.mouseEnter){
                this.visible = false
                this.onClose(this)
            }
           
        },
        handleClose(){
            this.visible = false
            this.onClose(this)
        },
        handleMouseLeave(){
             this.mouseEnter =false
             if(this.duration)setTimeout(this.close,1000)
        },
        handleMouseEnter(){
            this.mouseEnter = true
        }
    }
}
</script>

<style lang="scss">
.ecode-toast-wrapper{
    position: fixed;
    text-align: left;
    color: rgba(0, 0, 0, 0.65);
    left: 50%;
    transform: translateX(-50%);
    transition: top .4s,bottom .4s,opacity 0.3s, transform .4s;
    z-index: 9999;
    &.center{
        text-align: center;
    }
    &.hasClose .ecode-toast{
        padding-right: 30px;
    }
    .ecode-toast{
        background: #fff;
        padding: 10px 10px 10px 10px;

        .close{
            position: absolute;
            right: 5px;
            top:50%;
            margin-top:-9px;
            font-size:18px;
            height: 20px;
            line-height: 20px;
            display: inline-block;
            cursor: pointer;
        }
        box-shadow:0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    }
    .anime-down-enter-active,.anime-down-leave-active,.anime-up-enter-active,.anime-up-leave-active{
        transition: all  .4s;
    }
    .anime-up-enter,.anime-up-leave-to{
        transform: translateY(100%);
        opacity: 0;
    }
    .anime-down-enter,.anime-down-leave-active{
        transform: translateY(-100%);
        opacity: 0;
    }
   
}
</style>