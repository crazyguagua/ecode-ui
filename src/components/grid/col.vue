<template>
  <div class="ecode-col" :style="styles" :class="colCls">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'ecodeCol',
    props:{
        span:{
            type:[Number,String],
            default:24  //不写就默认24格
        },
        offset:{
            type:[Number,String],
            default:0
        }
    },
    data(){
        return {
            gutter :0
        }
    },
    computed:{
        styles(){
            let padding = this.gutter?this.gutter * .5:0
            return {
                padding:`0 ${padding}px`
            }
        },
        colCls(){
            let {span,offset} = this
            return [`ecode-col-${span}`,`ecode-col-offset-${offset}`]
        }
    }
}
</script>

<style lang="scss">
.ecode-col{
    flex-shrink:0;  //flex-shrink:0 表示不换行也不收缩， 不妥协自己的宽度 ，不和别人挤，不缩自己的宽度，即使宽度之和超出也不换行;
}
 $totalCols:24;
 $prefix:ecode-col;
 @for $i from 0 through $totalCols{
     .#{$prefix}-#{$i}{
         width:($i/$totalCols)*100%
     }
     .#{$prefix}-offset-#{$i}{
         margin-left:($i/$totalCols)*100%
     }
 }

</style>