<template>
  <div class="ecode-row">
      <slot />
  </div>
</template>

<script>
export default {
    name:'ecodeRow'
}
</script>

<style lang="scss">
.ecode-row{
    display: flex;
    // flex-wrap: nowrap;
   flex-wrap: wrap; // 控制flex是否换行，默认不敢换行  span 12 的三个col 如果不设置这个属性它就不会换行
}
</style>