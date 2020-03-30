<template>
  <div class="ecode-tab">
      <slot />
  </div>
</template>

<script>
export default {
    name:'eTab',
    props:{
        label:{
            type:String,
        },
        name:{
            type:String,required:true
        }
    }
}
</script>

<style lang="scss">
.ecode-tab{
    
}
</style>