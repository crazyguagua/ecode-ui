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