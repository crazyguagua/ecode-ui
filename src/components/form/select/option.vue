<template>
  <div :class="['ecode-option',{'selected':value == parentSelect.cValue,'disabled':this.disabled}]" @click.stop="select" >
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
         this.parentSelect.$emit('option-select',this)
      }
    },
    computed:{
      parentSelect(){
        return this.findParent('ESelect')
      }
    },
    mounted(){
      this.parentSelect.options.push(this)
    }
}
</script>

<style>

</style>