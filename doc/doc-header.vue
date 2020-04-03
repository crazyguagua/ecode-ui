<template>
  <div class="doc-header">
      <div class="logo">
        <svg class="logo-icon" aria-hidden="true">
            <use xlink:href="#ecode-ui-copy" />
        </svg>
        <span>ECODE-UI</span>
      </div>
      <div class="search-bar"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.doc-header{
    position: fixed;
    height: 68px;
    z-index: 100;
    width: 100%;
    padding: 0 10px;
    background:#fff;
    box-shadow: 0px 1px 1px rgba(0,0,0,.08);
    .logo{
        line-height: 68px;
        span{
            font-size: 20px;
            font-weight: bold;
            color:rgb(41, 39, 39);
        }
    }
    .logo-icon{
        width: 48px;
        height: 48px;
        vertical-align: middle;
    }
}
</style>