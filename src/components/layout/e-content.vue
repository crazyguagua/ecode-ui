<template>
  <div class="ecode-content">
      <slot /> 
  </div>
</template>

<script>
export default {
    name:'EContent'
}
</script>

<style lang="scss">
    .ecode-content{
        background: rgba(16, 142, 233, 1);
        min-height: 150px;
        color: #fff;
        padding: 0 20px;
        flex:auto;
    }
</style>