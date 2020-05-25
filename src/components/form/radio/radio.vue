<template>
   
    <label class="ecode-radio-wrapper">
        
        <input type="radio" ref="radio" v-model="model" :value="label" v-bind="$attrs" :name="name" @change="onchange" :disabled="disabled">
        <span class="radio-label">
            <slot></slot>
        </span>
    </label>
        
    
</template>
<script>
import emit from '@/util/emit'
export default {
    name:'ecode-radio',
    componentName: 'ERadio',
    props:{
        value:[String,Number,Boolean],
        label:[String,Number,Boolean],
        name:String,
        disabled:Boolean
    },
    computed: {
        isGroup(){
            let parent = this.$parent
            while (parent){
                if(parent.$options.componentName !== 'ERadioGroup'){
                    parent = parent.$parent
                }else {
                    this._radioGroup = parent
                    return true
                }
            }
            return false
        },
        model: {
            get() {
                return this.isGroup ? this._radioGroup.value: this.value;
            },
            set(val) {
                if(this.isGroup){
                    // this.dispatch('ERadioGroup','input',[val])
                }else{
                    this.$emit('input', val);
                }
                this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
            }
                
        }
    },
    methods:{
        onchange() {
            this.$nextTick(()=>{
                this.$emit('change',this.model)
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.ecode-radio-wrapper{
    margin-right: 30px;
    .radio-label{
        font-size: 14px;
        padding-left: 8px;
    }
}
</style>