<template>
  <div class="ecode-checkbox" >
      <label class="checkbox-label" :class="labelCls"  >
          <input type="checkbox" :disabled="disabled" v-model="cValue" class="checkbox-input" />
          <span class="checkbox-rect" @click.stop="showWave" ref="checkboxLabel" :class="{'ecode-click-animating':showAnimation}"></span>
          <span class="checkbox-content" @click.stop="showWave" ><slot></slot></span>
      </label>
  </div>
</template>

<script>
export default {
    name:'EcodeCheckBox',
    props:{
        value:{},
        wave:{default:true,type:Boolean},
        disabled:{default:false,type:Boolean},
    },
    methods:{
        onChange(){
            console.log(arguments)
        },
        showWave(e){
           if(!this.disabled) this.showAnimation = true
        },
        annimationEvHandler(){
            this.showAnimation = false
        }
    },
    mounted(){
        if(this.wave){
            this.$refs.checkboxLabel.addEventListener('animationend',this.annimationEvHandler)
        }
    },
    beforeDestroy(){
        this.$refs.checkboxLabel.removeEventListener('animationend',this.annimationEvHandler)
    },
    data(){
        return {
            showAnimation:false
        }
    },
    computed:{
        cValue:{
            get(){
                return this.value
            },
            set(v){
                this.$emit('input',v)
            }
        },
        labelCls(){
            return {
                'checked':this.cValue,
                'disabled':this.disabled
            }
        }
    },
    watch:{
        
    }
}
</script>