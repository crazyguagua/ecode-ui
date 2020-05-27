<template>
  <div :class="['ecode-option',{'selected':value == select.cValue}]" @click.stop="select" >
      <slot>
         <span> {{label}}</span>
      </slot>
  </div>
</template>

<script>
import emit from '@/util/emit'
export default {
    name:'ecodeOption',
    mixins:[emit],
    inject:['select'],
    props:{
      value:{type:[String,Number]},
      label:{type:[String,Number]}
    },
    methods:{
      select(){
         this.$emit('option-select',this)
      }
    },
    computed:{

    }
}
</script>

<style>

</style>