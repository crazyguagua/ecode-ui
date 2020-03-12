<template>
  <button class="ecode-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
      <!-- {[`icon-${iconPosition}`]:true}   会把 icon-left icon-right 添加到 class上 -->
      <!--这里通过样式来控制按钮的位置，通过 display:inline-flex; order:1;order；2;决定icon的位置 -->
    <EIcon class="loading icon" name="ecode-loading" v-if="loading"></EIcon> <!-- 保证loading 在 icon原来的位置上 加上icon的样式-->
    <EIcon class="icon" v-if="icon && !loading" :name="icon"></EIcon>
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
        },
        loading:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style lang="scss">
@keyframes spin {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
.ecode-button{
    display:inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;//让按钮和外面的元素水平对齐
    padding:0 10px;
    font-size:var(--font-size);
    background:var(--button-bg);
    height: var(--button-height);
    border-radius: var(--border-radius);
    border:1px solid var(--border-color);
    cursor: pointer;
    .loading{
        animation: spin 2s linear infinite;
    }
    &:focus{
        outline: none;
    }
    &:active{
         background: var(--button-active-bg);
    }
    &:hover{
         background: var(--button-hover-bg);
         border:1px solid var(--border-active-color);
    }
    &.icon-left > .icon{
        order:1;
        margin-right:.3em;
    }
    &.icon-left > .content{
        order:2;
    }
    &.icon-right > .icon{
        order:2;
        margin-left:.3em; /** 如果长度和字体大小相同 推荐用em */
    }
    &.icon-right > .content{
        order:1;
    }
}

</style>