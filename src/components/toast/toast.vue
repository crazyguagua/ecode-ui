<template>
  <div class="toast">
      <span>{{msg}}</span>
  </div>
</template>

<script>
export default {
    props:{
        msg:{type:String}
    }
}
</script>

<style lang="scss">
.toast{
    position: fixed;
    top: 10px;
    text-align: center;
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 3px 0 rgba(0,0,0,.5);
    color: #fff;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    padding: 10px;
}
</style>