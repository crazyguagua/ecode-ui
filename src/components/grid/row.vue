<template>
  <div class="ecode-row" :style="styles">
      <slot />
  </div>
</template>

<script>
export default {
    name:'ecodeRow',
    props:{
        gutter:{
            type:[String,Number]
        }
    },
    created(){

    },
    mounted(){
        this.$children.forEach(item=>{
            item.gutter = this.gutter
        })
    },
    computed:{
        styles(){
            let marginValue =  this.gutter?-1*this.gutter/2+'px':'0px'
            return {'margin-left':`${marginValue}`,'margin-right':`${marginValue}`,}
        }
    }
}
</script>

<style lang="scss">
.ecode-row{
    display: flex;
    // flex-wrap: nowrap;
   flex-wrap: wrap; // 控制flex是否换行，默认不敢换行  span 12 的三个col 如果不设置这个属性它就不会换行
}
</style>