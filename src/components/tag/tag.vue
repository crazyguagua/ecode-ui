<template>
  <transition :name="transitionName">
    <div class="ecode-tag" @click="$emit('click')" :class="[{[color]:color&&!hasColor},{'has-color':hasColor}]" :style="{'background-color':hasColor?color:'','border-color':hasColor?color:''}">
        <slot name="default" />
        <template v-if="closable">
            
                <slot name="closeIcon">
                    <e-icon  @click.native.stop="handleClose"  name="ecode-searchclose" />
                </slot>
            
        </template>
    </div>
   </transition>
</template>

<script>
import EIcon from '@/components/icon/icon'
const reg = /^(#|rgba?|hsl).+$/
export default {
    name:'ecodeTag',
    components:{EIcon},
    props:{
        closable:{type:Boolean,default:false},
        transitionName:{type:Boolean,default:'ecode-fade'},
        color:{
            type:String,
            validator:(val)=>{
                let flag =  ['magenta','red','volcano','orange','gold','lime','green','cyan','blue','geekblue','purple'].includes(val)
                let flag2 = reg.test(val)
                return flag || flag2
            }
        }
    },
    computed:{
         hasColor(){
            return reg.test(this.color)
        }
    },
    methods:{
        handleClose(){
            this.$emit('close')
        },
       
    }
}
</script>