<template>
  <svg class="ecode-icon" aria-hidden="true">
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script>
export default {
  name: "icon",
  props: {
    name: String
  }
};
</script>

<style lang="scss">
.ecode-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>