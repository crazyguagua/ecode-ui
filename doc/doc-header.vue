<template>
  <div class="doc-header">
      <div class="logo">
        <svg class="logo-icon" aria-hidden="true">
            <use xlink:href="#ecode-ui-copy" />
        </svg>
        <span>ECODE-UI</span>
      </div>
      <div class="search-bar"></div>
      <div class="miniBar">
          <e-icon name="ecode-hamburg" @click.native="popperVisible = !popperVisible" />
          <transition>
            <div class="popper-content" v-if="popperVisible">
                <docNav @on-click-menu="popperVisible = false" />
            </div>
          </transition>
      </div>
  </div>
</template>

<script>
import docNav from './doc-nav'
export default {
    name:'docHeader',
    components:{
        docNav
    },
    data(){
        return {
            popperVisible:false
        }
    }
}
</script>

<style lang="scss">
.doc-header{
    position: fixed;
    height: 68px;
    z-index: 100;
    width: 100%;
    top:0;
    left:0;
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
    .miniBar{
        .popper-content{
            height: calc( 100vh - 60px );
            width:300px;
            overflow-y: auto;
            position:absolute;
            right: -9px;
            top: 34px;
            background: #fff;
            box-shadow: 0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05);;
            .nav-list-item{
                padding:10px 20px ;
                color:#333;
                &.active{
                    background: #d8e0f3;
                    border-right: 2px solid #8998e8;
                }
            }   
        }
    }
}
</style>