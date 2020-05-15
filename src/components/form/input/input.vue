<template>
  <div class="eocde-inputWrapper" :class="{error,[`ecode-input-${size}`]:size}"  @mouseover="hovering =true" @mouseout="hovering =false">
    
    <template v-if="type !== 'textarea'">
        <input class="ecode-input-inner"  :class="paddingR"
        :type="showPassword ?(pswVisible ?'text':'password'): type" 
        ref="input" @change="onChange" @focus="onfocus" @blur="onblur" @input="onInput" :readonly="readonly" :disabled="disabled" v-bind="$attrs"/>
        <!-- 后置图标 inner -->
        <span class="ecode-input-suffix" v-if="showSuffixIcon">
            <span class="ecode-input-suffix-inner">
                <e-icon v-if="suffixIcon" :name="suffixIcon || ''" @mousedown.prevent/>
                <e-icon v-if="showClear" name="ecode-Fail" @mousedown.prevent @click.native="clear"/>
                <e-icon v-if="showPswVisible" name="ecode-show-password" @mousedown.prevent @click.native="handleShowPsw"/>
            </span>
        </span>
    </template>
      
    <template v-if="type === 'textarea'">
        <textarea  ref="textarea" rows="3"></textarea>
    </template>

    <div class="message" v-if="error">
        <e-icon name="ecode-Fail" /> <span>{{error}}</span>
    </div>
  </div>
</template>

<script>
import EIcon from '@/components/icon/icon'
export default {
    name:'ecode-input',
    components:{EIcon},
    props:{
        value:String,
        error:String,
        warning:String,
        disabled:Boolean,
        readonly:Boolean,
        type:String,
        size:{
            type:String,
            default:'default'
        },
        clearable:{
            type:Boolean,
            default:false
        },
        showPassword:{
            type:Boolean,
            default:false
        },
        suffixIcon: {
            type:String,
            default: ''
        }
    },
    mounted() {
        this.setNativeInputValue()
    },  
    data() {
        return {
            hovering:false,
            focusing:false,
            pswVisible:false
        }
    },
    computed:{
        nativeInputValue() {
            return this.value === null || this.value === undefined ? '': String(this.value)
        },
        showClear() {
            return this.clearable && this.nativeInputValue && (this.focusing || this.hovering) && !this.readonly && !this.disabled
        },
        showPswVisible() {
            return this.showPassword && !this.readonly && !this.disabled && (this.nativeInputValue || this.focusing ) 
        },
        showSuffixIcon() {
            return this.suffixIcon || this.showPassword || this.clearable
        }
       
    },
    methods:{
        getInput() {
            return this.$refs.input || this.$refs.textarea
        },
        focused() {
            this.getInput().focus()
        },
        setNativeInputValue() {
            let input = this.getInput()
            if(!input) return
            if(input.value === this.nativeInputValue) return
            input.value = this.nativeInputValue
        },
        onChange(ev){
            this.$emit('change',ev.target.value)
        },
        onInput(ev){
            if(ev.target.value === this.nativeInputValue) return
            this.$emit('input', ev.target.value);
        },
        onfocus(ev) {
            this.focusing = true
        },
        onblur(ev) {
            this.focusing = false
        },
        clear(ev){
            this.$emit('input','')
            this.$emit('change','')
            this.$emit('clear')
        },
        handleShowPsw() {
            this.pswVisible = !this.pswVisible
            this.$nextTick(()=>{
                this.focused()
            })
            
        }
    },
    watch:{
        nativeInputValue(){
            this.setNativeInputValue()
        }
    }
}
</script>

<style lang="scss" >
@import '../../../style/var/var.scss';
$large-size : 40px;
$default-size : 34px;
$small-size : 24px;
$textaera-width:450px;
.eocde-inputWrapper{
    position: relative;
    display:inline-block;
    vertical-align: top;
    align-items: center;
    display: inline-flex;
    &.error {
        > .ecode-input-inner,> .ecode-input-inner:focus-within,>.ecode-input-inner:hover{
            border:1px solid $error-color;
            box-shadow: inset 0 0 0 0.03em $error-color,0 0 0 0.02em $error-color;
        }
        > textarea,> textarea:focus,>textarea:hover{
            border:1px solid $error-color;
            box-shadow: inset 0 0 0px 0.03em $error-color;
        }
        .message{
            color:$error-color;
        }
    }
    > .ecode-input-inner,textarea {
        border:1px solid $border-color;
        width:100%;
        color:$text-color;
        font-size: $font-size;
        height: $default-size;
        line-height: $default-size;
        border-radius: $border-radius;
        padding: 0 30px 0 10px;
        cursor: pointer;
        transition: border-color .2s cubic-bezier(0.82, 0.01, 0.13, 1.01);
        &:hover{
            border: 1px solid $border-hover-color;
        }
        &:focus{
            outline: none;
            box-shadow: inset 0 0px 0px $shadow-color, 0 0 0 0.03em $shadow-color;
        }
        &[disabled]{
           border-color:$disabled-border-color;
           cursor:not-allowed; 
           background: $disabled-bg;
        }
        &[readonly]{
            border-color:$disabled-border-color;
            background: $disabled-bg;
        }
    }
    > .ecode-input-suffix{
        position: absolute;
        right: 5px;
        cursor: pointer;
        color: #868a93;
        text-align: center;
        // height: 100%;
    }
    > textarea{
        width: $textaera-width;
        height: auto;
    }
    
    
}
.ecode-input-large {
    
    > .ecode-input-inner{
        height: $large-size;
        line-height: $large-size;
    }
}
.ecode-input-small {
    > .ecode-input-inner{
        height:$small-size;
        line-height:$small-size;
    }
}
</style>