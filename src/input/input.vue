<template>
  <div class="eocde-inputWrapper" :class="{error}">
      <input type="text" v-model="value"  v-bind="$attrs"></input>
      <div class="message" v-if="error">
         <e-icon name="ecode-Fail"/> <span>{{error}}</span>
      </div>
  </div>
</template>

<script>
import EIcon from '../icon'
export default {
    name:'ecode-input',
    components:{EIcon},
    props:{
        value:String,
        error:String,
        warning:String
    }
}
</script>

<style lang="scss">
@import '../style/var/var.scss';
.eocde-inputWrapper{
    display:inline-block;
    vertical-align: top;
    &.error {
        > input,> input:focus,>input:hover{
            border:1px solid $error-color;
            box-shadow: inset 0 0 1px $error-color;
        }
        .message{
            color:$error-color;
        }
    }
    > input{
        padding:0 10px;
        border:1px solid $border-color;
        width:100%;
        border-radius: 4px;
        color:$text-color;
        font-size: $font-size;
        height: 38px;
        line-height: 38px;
        cursor: pointer;
        transition: border-color .2s cubic-bezier(0.82, 0.01, 0.13, 1.01);
        &:hover{
            border: 1px solid $border-hover-color;
        }
        &:focus{
             outline: none;
            box-shadow: inset 0 1px 4px $shadow-color;
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
}
</style>