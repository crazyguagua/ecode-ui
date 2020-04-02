<template>
  <div class="ecode-toast-wrapper" :class="[positionClass]" :style="styles">
      <transition :name="anime">
        <div class="ecode-toast"  v-if="visible">
            <span>{{msg}}</span>
            <span class="close" v-if="showClose">
                <EIcon name="ecode-searchclose" />
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
        msg:{type:String},
        showClose:{type:Boolean,default:true},
        type:{type:String,validator:()=>{}},
        visible:{type:Boolean,},
        position:{type:String,validator:(value)=>{return ['top','bottom','middle'].includes(value)},default:'top'}
    },
    components:{
        EIcon
    },
    data(){
        return {
            offset:defaultOffset
        }
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
    }
}
</script>

<style lang="scss">
.ecode-toast-wrapper{
    position: fixed;
    text-align: center;
    color: rgba(0, 0, 0, 0.65);
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    .ecode-toast{
        background: #fff;
        padding: 10px 16px;
        .close{
            position: absolute;
            right: 2px;
            top:2px;
            font-size:12px;
            cursor: pointer;
        }
        box-shadow:0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    }

    &.ecode-toast-top{
         top: 10px;
    }
    &.ecode-toast-middle{
        top:50%;
        transform: translate3d(-50%,-50%,0);
    }
    
    &.ecode-toast-bottom{
        bottom:10px;
    }
    .anime-down-enter-active,.anime-down-leave-active,.anime-up-enter-active,.anime-up-leave-active{
        transition: transform .1s;
    }
    .anime-up-enter,.anime-up-leave-to{
        transform: translateY(100%);
        opacity: 0;
    }
    .anime-down-enter,.anime-down-leave-to{
        transform: translateY(-100%);
        opacity: 0;
    }
   
}
</style>