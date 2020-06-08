<template>
  <div @mouseenter="hover =true" @mouseleave="hover=false"
   :class="['ecode-option',{'selected':isSelected,'disabled':this.disabled,'multiple':multiple},{'hover':isHover}]" @click.stop="select" >
      <slot>
        <template v-if="!source">
         <span> {{label}}</span>
         <e-icon class="selectedIcon" name="ecode-ok-no-bg" v-if="multiple && isSelected"  />
        </template>
         <template v-else>
         <span> {{source.label}}</span>
         <e-icon class="selectedIcon" name="ecode-ok-no-bg" v-if="multiple && isSelected"  />
        </template>
      </slot>
  </div>
</template>

<script>
import emit from '@/util/emit'
import EIcon from '@/components/icon/icon'
export default {
    name:'eOption',
    mixins:[emit],
    components:{EIcon},
    props:{
      value:{type:[String,Number]},
      label:{type:[String,Number]},
      disabled:{type:Boolean,default:false},
      source:Object
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
        if(!this.parentSelect.multiple){
          return this.value == this.parentSelect.cValue
        }else{
          return this.parentSelect.cArrayValue.includes(this.value)
        }
      },
      isHover(){
        let hoverIndex = this.parentSelect.hoverIndex
        return this.hover || this.parentSelect.options[hoverIndex] === this
      },
      setHover(){
        this.hover = true
        this.parentSelect.hoverIndex = this.index
      },
      multiple(){
        return this.parentSelect.multiple;
      }
    },
    created(){
      log('created')
      this.parentSelect.addOption(this)
      this.index = this.parentSelect.options.indexOf(this)
    },
    updated(){
      log('updated')
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