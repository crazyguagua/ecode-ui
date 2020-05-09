<template>
  <div class="ecode-spin">
      <transition name="fade">
        <div class="ecode-spin-mask" v-if="spinning">
            <div class="inner">
                <EIcon  name="ecode-Loading"/>
            </div>
        </div>
      </transition>
      <slot />
  </div>
</template>

<script>
import EIcon from '@/components/icon/icon'
export default {
    name:'ESpin',
    components:{
        EIcon
    },
    props:{
        spinning:{type:Boolean,default:false}
    }
}
</script>