<template>
  <div class="ecode-row" :style="styles" :class="classList">
      <slot />
  </div>
</template>

<script>
export default {
    name:'ecodeRow',
    props:{
        gutter:{
            type:[String,Number]
        },
        align:{
            type:String,
            validator:(value)=>{
                return ['top','middle','bottom']
            },
            default:'top'
        },
        justify:{
            type:String,
            validator:(value)=>{
                return ['start','center','end','space-between','space-arround']
            },
            default:'start'
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
            return {
                marginLeft:this.gutter?-1*this.gutter/2+'px':'0px'
            }
        },
        classList(){

            return [
                `ecode-row-${this.align}`,
                 `ecode-row-${this.justify}`,
            ]
        }
    }
}
</script>

<style lang="scss">
.ecode-row{
    display: flex;
    // flex-wrap: nowrap;
   flex-wrap: wrap; // 控制flex是否换行，默认不敢换行  span 12 的三个col 如果不设置这个属性它就不会换行

   &.ecode-row-top{
       align-items: flex-start;
   }
   &.ecode-row-middle{
       align-items: center;
   }
   &.ecode-row-bottom{
       align-items: flex-end;
   }
   &.ecode-row-start{
       justify-content: flex-start;
   }
   &.ecode-row-center{
       justify-content: center;
   }
   &.ecode-row-space-between{
       justify-content: space-between;
   }
   &.ecode-row-space-arround{
      justify-content: space-around;
   }
}
</style>