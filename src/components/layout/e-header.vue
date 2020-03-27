<template>
  <div class="ecode-header" :style="styles">
      <slot />
  </div>
</template>

<script>
export default {
    name:'EHeader',
    props:{
        height:{
            type:Number,
            default:80
        }
    },
    computed:{
        styles(){
            return {
                height:`${this.height}px`
            } 
        }
    }
}
</script>

<style lang="scss">
.ecode-header{
    background: #7dbcea;
    line-height: 80px;
    color:#fff;
    padding: 0 20px;
}
</style>