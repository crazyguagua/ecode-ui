<template>
  <transition name="ecode-fade">
      <div @click="scrollToTop" class="ecode-back-to-top" v-if="isVisible" :style="{'right':`${right}px`,'bottom':`${bottom}px`}">
          <EIcon name="ecode-backtotop" />
      </div>
  </transition>
</template>

<script>
const cubic = value => Math.pow(value, 3);
const easeInOutCubic = value => value < 0.5
  ? cubic(value * 2) / 2
  : 1 - cubic((1 - value) * 2) / 2;
import EIcon from '@/components/icon/icon'
import {throttle } from "throttle-debounce";
export default {
    name:"EcodeBackToTop",
    props:{
        visibleHeight:{type:Number,default:100},
        right:{type:Number,default:30},
        bottom:{type:Number,default:30}
    },
    data(){
        return {
            isVisible:false
        }
    },
    components:{
        EIcon
    },
    mounted(){
        this.init()
    },
    methods:{
        init(){
            this.container = document
            this.el = document.documentElement
            this.scrollThrottle = throttle(300,this.onScroll)
            this.container.addEventListener('scroll',this.scrollThrottle) //给document加事件 不是给documentElement加
        },
        onScroll(e){
            
            let scrollTop = this.el.scrollTop
            this.isVisible = scrollTop >= this.visibleHeight
        },
        scrollToTop(){
            const raf = window.requestAnimationFrame || ( (fn)=>{ setTimeout(fn,16)} ) //这个raf 就相当于根据性能决定多少ms后执行fn
            //在 500ms 内运动完成
            const start = Date.now()
            const totalDistance = this.el.scrollTop  //总的距离
            const animate = ()=>{
                let nowMs = (Date.now()-start) 
                let process = nowMs/500
                if(process<1){
                    this.el.scrollTop = totalDistance*(1-easeInOutCubic(process))
                    raf(animate)
                }
            }
            raf(animate)

        }
    },
    beforeDestroy(){
        //销毁事件监听
        this.container.removeEventListener('scroll',this.scrollThrottle)
    }
}
</script>
