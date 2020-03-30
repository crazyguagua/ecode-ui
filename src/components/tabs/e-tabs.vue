<template>
  <div class="ecode-tabs">
      <slot />
      <slot name="action"/>
  </div>
</template>

<script>
export default {
    name:'eTabs',
    props:{
        direction:{type:String,default:'horizontal'}
    }
}
</script>

<style lang="scss">
.ecode-tabs{

}
</style>