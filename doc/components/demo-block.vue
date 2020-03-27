<template>
  <div class="demo-block" :class="dyClass">
    <div class="description">
      <slot></slot>
    </div>
    <div class="source" ref="showDemo">
      <div class="demo-wrapper"style="padding:10px"  > 
        <slot name="source"></slot>
      </div>
      <div class="highlight" v-if="showCode" ref="highlight">
        <slot name="highlight"></slot>
      </div>
      <div
        class="buttonDiv"
        ref="buttonDiv"
        :class="{'enter':isEnter}" :style="fixedStyle"
        @mouseenter="isEnter=true"
        @mouseleave="isEnter = false"
      >
        <e-icon :name="iconName" />
        <transition name="enterRight">
          <a v-if="isEnter" @click="showCodeFn">{{btnText}}</a>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js';
export default {
  name: "demo-block",
  computed: {
    dyClass() {
      return [`demo-${this.$route.name}`];
    },
    iconName(){
      return this.showCode?'ecode-triangle1':'ecode-triangle-copy'
    },
    btnText(){
      return this.showCode?'收起代码':'显示代码'
    },
  },
  data() {
    return {
      showCode: false,
      isEnter: false,
      fixedStyle:{}
    };
  },
  beforeDestroy(){
    this.removeScrollHandler()
  },
  methods: {
    showCodeFn() {
      this.showCode = !this.showCode
      if(this.showCode){
        this.$nextTick(()=>{
          let highlight = this.$refs.highlight
          let blocks = highlight.querySelectorAll('pre > code:not(.hljs)')
          blocks.forEach(b => {
              hljs.highlightBlock(b)
          })
         
          document.addEventListener('scroll',this.scrollHandler)
          this.scrollHandler()
        })
      }else{
        this.fixedStyle={}
        this.removeScrollHandler()
      }
    },
    scrollHandler(e){
       let {bottom,top} = this.$refs.showDemo.getBoundingClientRect()
      //  console.log(`bottom:${bottom}    top:${top}`)
       //代码部分在屏幕外 或者代码最上方加上按钮的高度 小于屏幕高度（即将滚动到屏幕外去了）
       if(bottom > document.documentElement.clientHeight && top+44<=document.documentElement.clientHeight){
          let buttonDiv = this.$refs.buttonDiv
          let width = buttonDiv.offsetWidth
          this.fixedStyle =  {
            position:'fixed',
            width:`${width}px`,
            bottom:'0'
          }
       }else{
         this.fixedStyle =  {}
       }
    },
    removeScrollHandler(){
       document.removeEventListener('scroll',this.scrollHandler)
    }
  }
};
</script>

<style lang="scss">
.demo-block {
  padding: 10px 0;
  .description {
    padding: 10px;
  }
  .source {
    &:hover{
       box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);;
    }
    border-radius: 3px;
    border: 1px solid #ebebeb;
    .buttonDiv {
      border-top: 1px solid #f3f6ff;
      background: #f0eff5;
      height: 44px;
      line-height: 44px;
      margin: 0;
      text-align: center;
      cursor: pointer;
      transition: 0.1s linear all;
      &:hover {
        background: #f3f6ff;
      }
      > a {
        color: #3d424e;
        font-size: 16px;
        display: inline-block;
        vertical-align: middle;
      }
      .ecode-icon{
        transition: .1 linear all;
        color:#8f8f8f;
        width: 1.5em;
        height: 1.5em;
        vertical-align: middle;
      }
      &.fixed{
        position: fixed;
        bottom:0;
      }
    }
  }
  .highlight {
    padding: 10px;
  }
  .enterRight-enter-active,
  .enterRight-leave-active {
    transition: .1s linear all;
  }
  .enterRight-enter,
  .enterRight-leave-to {
    transform: translateX(40px);
    opacity: 0;
  }
}
</style>