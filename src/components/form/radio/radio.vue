<template>
    <label class="ecode-radio-wrapper" for="radio" :class="[{[`radio-${radioSize}`]:radioSize},{'radio-checked':ischeked,'radio-disabled':isDisabled,'radio-border':border,'is-focus': focus}]">
        <span class="radio">
            <span class="radio-inner" :class="{'radio-checked':ischeked,'radio-disabled':isDisabled}" v-if="!button"></span>
            <span v-else>
                <slot></slot>
            </span>
            <input type="radio" ref="radio" class="radio-input" v-model="model" :value="label" v-bind="$attrs" :name="name" @change="onchange" @focus="focus = true"  @blur="focus = false" :disabled="isDisabled">
        </span>
       
        <span class="radio-label":class="{'radio-disabled':isDisabled}">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
        
    
</template>
<script>
import emit from '@/util/emit'
export default {
    name:'ecode-radio',
    componentName: 'ERadio',
    mixins:[emit],
    props:{
        value:[String,Number,Boolean],
        label:[String,Number,Boolean],
        name:String,
        disabled:Boolean,
        border:{
            type:Boolean,
            default:false
        },
        size:String
    },
    data() {
        return {
            focus:false
        }
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
                    this.dispatch('ecodeRadioRroup','input',val)
                }else{
                    this.$emit('input', val);
                }
                this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
            }
                
        },
        isDisabled() {
            return this.disabled || this.$parent.disabled
        },
        ischeked() {
            return this.model === this.label 
        },
        radioSize() {
            return this.size || this.$parent.size || ''
        },
        button() {
            return this.$parent.$options.componentName === 'ERadioGroup' ? this.$parent.button : false
        }
    },
    methods:{
        onchange() {
            this.$nextTick(()=>{
                this.$emit('change',this.model)
                this.isGroup && this.dispatch('ecodeRadioRroup','handleChange',this.model)
            })
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../../style/var/var.scss';
$radio-default-color:#dcdfe6;
.ecode-radio-wrapper{
    margin-right: 30px;
    cursor: pointer;
    font-size: $font-size;
    display: inline-block;
    .radio{
        vertical-align: middle;
        position: relative;
        > .radio-inner{
            width: $font-size;
            height: $font-size;
            background: #fff;
            border-radius: 100%;
            border: 1px solid $border-color;
            display: inline-block;
            position: relative;
            line-height: 1px;
            &:hover:not(.is-focus):not(:active):not(.radio-disabled){
                border-color: $primary-color;
                box-shadow: 0 0 1px 1px $primary-color;
            }
            &::after{
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: #fff;
                content: "";
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%) scale(0);
                transition: transform .15s ease-in;
            }
           
        }
        > .radio-input{
            opacity: 0;
            z-index: -1;
            position: absolute;
            top: 0;
            left: 0;
            outline: none;
            
        }
        > .radio-checked{
            &::after{
                background: #c0c4cc;
                transform: translate(-50%,-50%) scale(1);
            }
            background: #f5f7fa;
            
        }
        > .radio-checked:not(.is-focus):not(:active):not(.radio-disabled){
            background: $primary-color;
            &::after{
                background: #fff;
                transform: translate(-50%,-50%) scale(1);
            }
        }
    }
    
    > .radio-label{
        padding-left: 2px;
    }
    
    
}
.radio-border ,.radio-medium{
    border: 1px solid $radio-default-color;
    padding: 8px 10px;
    border-radius: 3px;
    height: 40px;
}
.radio-checked:not(.is-focus):not(:active):not(.radio-disabled){
    border-color: $primary-color;
}
// medium / small / mini	
.radio-small{
    padding: 6px 8px;
    height: 34px;
}
.radio-mini{
    padding: 4px 5px;
    height: 28px;
}
.radio-disabled{
    cursor: not-allowed;
    color: #c0c4cc;
}
</style>