<template>
  <div class="ecode-tab" :style="styles">
      <slot ></slot>
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
        },
        closable:{type:Boolean,default:false}
    },
    computed:{
        isCurrent(){
            return this.$parent.value === this.name
        },
        styles(){
            return {visibility:this.isCurrent?'visible':'hidden'}
        }
    },
    mounted(){
        
    }
}
</script>

<style lang="scss">
.ecode-tab{
    flex-shrink: 0;
    width: 100%;
    .slide-enter{
        transform: translate(100%,0);
        opacity: 0;
    }
    .slide-enter-active{
       transition: opacity .35s;
    }
}
</style>