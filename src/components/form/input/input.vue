<template>
  <div class="eocde-inputWrapper" :class="{error,[`ecode-input-${size}`]:size}">
      <span class="ecode-input-affix" v-if="type !== 'textarea'">
        <template>
            <input :type="type || 'text'" @change="onChange" @input="onInput" :readonly="readonly" 
            :disabled="disabled" v-bind="$attrs"/>
            <!-- 后置图标 inner -->
            <span class="ecode-input-suffix">
                <e-icon v-if="showClear" name="ecode-Fail" @mousedown.prevent @click.native="clear"/>
            </span>
        </template>
      </span>
      
       <template v-if="type === 'textarea'">
           <textarea  rows="3"></textarea>
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
        value:[String,Number],
        type:String,
        size:{
            type:String,
            default:'default'
        },
        clearable:{
            type:Boolean,
            default:false
        }
    },
    computed:{
       
        showClear(){
            return this.clearable
        }
    },
    methods:{
        onChange(ev){
            this.$emit('change',ev.target.value)
        },
        onInput(ev){
            this.$emit('input', ev.target.value);
        },
        clear(ev){
            this.$emit('input','')
            this.$emit('change','')
            this.$emit('clear')
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
    display:inline-block;
    vertical-align: top;
    &.error {
        > .ecode-input-affix,> .ecode-input-affix:focus-within,>.ecode-input-affix:hover{
            border:1px solid $error-color;
            box-shadow: inset 0 0 0 0em $error-color,0 0 0 0.1em $error-color;
        }
        > textarea,> textarea:focus,>textarea:hover{
            border:1px solid $error-color;
            box-shadow: inset 0 0 0px 0.1em $error-color;
        }
        .message{
            color:$error-color;
        }
    }
    > .ecode-input-affix,textarea {
        padding:0 10px;
        border:1px solid $border-color;
        width:100%;
        border-radius: 4px;
        color:$text-color;
        font-size: $font-size;
        height: 34px;
        line-height: 34px;
        cursor: pointer;
        transition: border-color .2s cubic-bezier(0.82, 0.01, 0.13, 1.01);
        &:hover{
            border: 1px solid $border-hover-color;
        }
        &:focus{
             outline: none;
            // box-shadow: inset 0 0px 0px $shadow-color, 0 0 0 0.1em $shadow-color;
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
    > .ecode-input-affix{
        display: inline-flex;
        height: $default-size;
        line-height: $default-size;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        padding: 0 10px;
        &:focus-within{
            box-shadow: inset 0 0px 0px $shadow-color, 0 0 0 0.1em $shadow-color;
        }
        > input,:active,:hover,:focus{
            outline: 0;
            border: none;
        }
    }
    > textarea{
        width: $textaera-width;
        height: auto;
    }
    
    
}
.ecode-input-large {
    
    > .ecode-input-affix{
        height: $large-size;
        line-height: $large-size;
    }
}
.ecode-input-small {
    > .ecode-input-affix{
        height:$small-size;
        line-height:$small-size;
    }
}
</style>