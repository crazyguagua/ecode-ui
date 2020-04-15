<template>
  <button class="ecode-button" :class="{[`icon-${iconPosition}`]:true,[`ecode-button-${size}`]:true}" @click="$emit('click')">
      <!-- {[`icon-${iconPosition}`]:true}   会把 icon-left icon-right 添加到 class上 -->
      <!--这里通过样式来控制按钮的位置，通过 display:inline-flex; order:1;order；2;决定icon的位置 -->
    <EIcon class="loading icon" name="ecode-loading" v-if="loading"></EIcon> <!-- 保证loading 在 icon原来的位置上 加上icon的样式-->
    <EIcon class="icon" v-if="icon && !loading" :name="icon"></EIcon>
    <div class="content">
        <slot></slot>
    </div>
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
                return ['default','primary','dashed','link'].includes(value)
            }
        }
    }
}
</script>