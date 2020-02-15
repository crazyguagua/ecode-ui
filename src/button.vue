<template>
  <button class="e-button">
      <slot></slot>
  </button>
</template>

<script>
export default {
    name:'EButton'
}
</script>

<style lang="scss">
.e-button{

    padding:0 10px;
    font-size:var(--font-size);
    background:var(--button-bg);
    height: var(--button-height);
    border-radius: var(--border-radius);
    border:1px solid var(--border-color);
    cursor: pointer;
    &:focus{
        outline: none;
    }
    &:active{
         background: var(--button-active-bg);
    }
    &:hover{
         background: var(--button-hover-bg);
    }
}

</style>