<template>
  <div class="ecode-button-group">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'buttonGroup'
}
</script>

<style lang="scss">
.ecode-button-group{
    display: inline-flex;
    vertical-align: middle;
    & .ecode-button{
        border-radius: 0;
        &:first-child{
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
        }
         &:last-child{
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }
        
        &:not(:first-child){
            margin-left:-1px; //去除边框重叠，第一个按钮不需要左移,否则按钮间距会影响
        }
        &:hover{
            position: relative;
            z-index: 1;
            /**鼠标移入的时候 被挡住的边框显示出来 */
        }
    }
    
}
</style>