<template>
  <div @mouseenter="hover =true" @mouseleave="hover=false" :class="['ecode-option',{'selected':isSelected,'disabled':this.disabled},{'hover':isHover}]" @click.stop="select" >
      <slot>
         <span> {{label}}</span>
      </slot>
  </div>
</template>

<script>
import emit from '@/util/emit'
export default {
    name:'eOption',
    mixins:[emit],
    props:{
      value:{type:[String,Number]},
      label:{type:[String,Number]},
      disabled:{type:Boolean,default:false}
    },
    methods:{
      select(){
         if(!this.disabled)this.parentSelect.$emit('option-select',this)
      }
    },
    computed:{
      parentSelect(){
        return this.findParent('ESelect')
      },
      isSelected(){
        return this.value == this.parentSelect.cValue
      },
      isHover(){
        let hoverIndex = this.parentSelect.hoverIndex
        return this.hover || this.parentSelect.options[hoverIndex] === this
      },
    },
    created(){
      this.parentSelect.options.push(this)
    },
    data(){
      return {
        hover:false
      }
    },
    beforeDestroy(){
      this.parentSelect.onOptionDestroy(this)
    }
}
</script>

<style>

</style>