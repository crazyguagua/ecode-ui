<template>
  <button class="ecode-button" :class={[`icon-${iconPosition}`]:true}>
      <!-- {[`icon-${iconPosition}`]:true}   会把 icon-left icon-right 添加到 class上 -->
      <!--这里通过样式来控制按钮的位置，通过 display:inline-flex; order:1;order；2;决定icon的位置 -->
    <EIcon class="icon" v-if="icon" :name="icon"></EIcon>
    <div class="content">
        <slot></slot>
    </div>
  </button>
</template>

<script>
import EIcon from './icon'
export default {
    name:'EButton',
    components:{EIcon},
    props:{
        icon:String,
        iconPosition:{
            type:String,
            default:'left',
            validator(value){
                return value === 'left' || value === 'right';
            }
        }
    }
}
</script>

<style lang="scss">
.ecode-button{
    display:inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
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
    &.icon-left .icon{
        order:1;
        margin-right:.3em;
    }
    &.icon-left .content{
        order:2;
    }
    &.icon-right .icon{
        order:2;
        margin-left:.3em;
    }
    &.icon-right .content{
        order:1;
    }
}

</style>