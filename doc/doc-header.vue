<template>
  <div class="doc-header">
      <div class="logo">
        <svg class="logo-icon" aria-hidden="true">
            <use xlink:href="#ecode-ui-copy" />
        </svg>
        <span>ECODE-UI</span>
      </div>
      <div class="search-bar"></div>
      <div class="miniBar" >
          <e-icon ref="popElm" name="ecode-hamburg" @click.native.stop="popperVisible = !popperVisible" />
          <transition enter-active-class="zoomIn" leave-active-class="zoomOut">
            <div class="popper-content" v-show="popperVisible">
                <div class="arrow"></div>
                <docNav @on-click-menu="popperVisible = false"  v-clickoutside="handleClose"/>
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
            popperVisible:false,
            testvisible:true
        }
    },
    mounted(){
        // this.popElm = this.$refs.popElm.$el
        // setTimeout(()=>{this.testvisible = false},5000)
    },
    methods:{
        handleClose(){
            this.popperVisible = false
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
    background:#f5f5f5;
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
            // overflow-y: auto; // 这个overflow 把箭头隐藏了
            position:absolute;
            right: -9px;
            top: 34px;
            background: #fff;
            z-index: 999;
            box-shadow: 0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05);;
            .nav-list-item{
                padding:10px 20px ;
                color:#333;
                a{
                    display:block;
                }
                &.active{
                    background: #d8e0f3;
                    border-right: 2px solid #8998e8;
                }
            } 
            > .arrow{
              position: absolute;
              right: 20px;
              top: -6px;
              width: 0px;
              height: 0px;
              border: 6px solid #fff;
              border-bottom-color: transparent;
              border-right-color: transparent;
              transform: rotate(45deg);
              box-shadow: -2px -2px 5px rgba(0,0,0,.06);
            }  
        }
        .zoomIn{
             animation:zoomIn cubic-bezier(0.075, 0.82, 0.165, 1) .8s;
        }
        .zoomOut{
            animation:zoomOut cubic-bezier(0.075, 0.82, 0.165, 1) .8s;
        }
        @keyframes zoomOut{
            0%{opacity:1}
            50%{opacity:0;transform:scale3d(.8,.8,.8)}
            100%{opacity:0}
        }
        
        @keyframes zoomIn{
            0%{opacity:0;transform:scale3d(.8,.8,.8);}
            50%{opacity:1}
        }
    }
}

</style>