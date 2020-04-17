<template>
  <button class="ecode-button" :class="buttonCls" @click="handleClick" >
      <!-- {[`icon-${iconPosition}`]:true}   会把 icon-left icon-right 添加到 class上 -->
      <!--这里通过样式来控制按钮的位置，通过 display:inline-flex; order:1;order；2;决定icon的位置 -->
    <span class="icon-span" v-if="loading"><EIcon class="loading icon" name="ecode-loading" ></EIcon> </span><!-- 保证loading 在 icon原来的位置上 加上icon的样式-->
    <span class="icon-span"><EIcon class="icon" v-if="icon && !loading" :name="icon"></EIcon></span>
    <span class="content">
        <slot></slot>
    </span>
  </button>
</template>

<script>
import EIcon from '@/components/icon/icon'
export default {
    name:'EButton',
    components:{EIcon},
    props:{
        icon:String,
        iconPosition:{
            type:String,
            default:'left',
            validator(value){
                return value === 'left' || value === 'right';
            }
        },
        loading:{
            type:Boolean,
            default:false
        },
        size:{
            type:String,
            default:'normal'
        },
        type:{
            type:String,
            default:'default',
            validator(value){
                return ['default','primary','dashed','text'].includes(value)
            }
        },
        shape:{
            type:String,
            default:'rect',
            validator(value){
                return ['rect','round','circle'].includes(value)
            }
        },
        wave:{
            type:Boolean,
            default:true
        }
    },
    data(){
        return {
            showAnimation:false
        }
    },
    computed:{
        buttonCls(){
            return {
                [`icon-${this.iconPosition}`]:true,
                [`ecode-button-${this.size}`]:true,
                [`ecode-button-${this.type}`]:true,
                [`ecode-button-${this.shape}`]:true,
                'ecode-button-click-animating':this.showAnimation
            }
        }
    },
    methods:{
        handleClick(){
            this.showAnimation = true
            this.$emit('click')
        }
    },
    mounted(){
        if(this.wave){
            this.$el.addEventListener('animationend',()=>{
                this.showAnimation = false
            })
        }
    },
    beforeDestroy(){
        debugger
        this.$el.removeEventListener('animationend')
    }
}
</script>