<template>
  <div class="ecode-layout" :class="classList">
      <slot />
  </div>
</template>

<script>
export default {
    name:'ELayout',
    props:{
        hasSider:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        classList(){
            if(this.hasSider){
                return []
            }else {
                let slots = this.$slots
                if(slots && slots.default){
                   let has =  this.$slots.default.some(item=>{
                        let tag =  item.componentOptions&&item.componentOptions.tag;
                        return tag === 'e-sider' 
                    })
                    return has?['ecode-layout-hasSider']:[]
                }else{
                    return []
                }
            }
            
        },

    }
}
</script>

<style lang="scss">
.ecode-layout{
    display: flex;
    flex-direction: column;
    &.ecode-layout-hasSider{
        flex-direction: row;
    }
}
</style>