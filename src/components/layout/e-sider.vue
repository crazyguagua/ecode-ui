<template>
  <div class="ecode-sider" :style="styles">
      <slot />
  </div>
</template>

<script>
export default {
    name:'ESider',
    props:{
        width:{
            type:Number,
            default:200
        }
    },
    computed:{
        styles(){
            return {
                'width':`${this.width}px`,
                'flex':'0 0 200px'
            }
        }
    }
}
</script>

<style lang="scss">
.ecode-sider{
    background: #eee;
}
</style>