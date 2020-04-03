<template>
  <div class="ecode-footer">
      <slot />
  </div>
</template>

<script>
export default {
    name:'EFooter'
}
</script>

<style lang="scss">
.ecode-footer{
    background: #ccc;
    color:#fff;
    padding: 0 20px;
}
</style>