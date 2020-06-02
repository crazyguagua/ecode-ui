<template>
  <div class="ecode-tag">
      <slot name="default" />
      <template v-if="closeable">
        <e-icon   @click.native.stop="handleClose"  name="ecode-searchclose" />
      </template>
  </div>
</template>

<script>
import EIcon from '@/components/icon/icon'
export default {
    name:'ecodeTag',
    components:{EIcon},
    props:{
        closeable:{type:Boolean,default:false}
    },
    methods:{
        handleClose(){

        }
    }
}
</script>