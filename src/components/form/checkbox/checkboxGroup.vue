<template>
  <div class="ecode-checkbox-group">
      <slot ></slot>
  </div>
</template>

<script>
export default {
    name:'CheckboxGroup',
    props:{
        value:{},
        button:{type:Boolean,default:false}
    }
}
</script>