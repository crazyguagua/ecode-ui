<template>
  <div class="demo-block" :class="dyClass">
    <slot></slot>
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div class="highlight">
      <slot name="highlight"></slot>
    </div>
  </div>
</template>

<script>
export default {
    name:'demo-block',
    computed:{
        dyClass(){
            return `demo-${this.$route.name}`
        }
    }
};
</script>

<style lang="scss">
.demo-block{
    .source{
        padding:10px 0 ;
        border:1px solid #ccc;
        border-radius: 3px;
    }
    .highlight{
        padding:10px 0;
    }
}
</style>