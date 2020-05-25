import {on,off} from '@/util/dom'
const propMap={
    'horizontal':{
        
    }
}
import { getScrollBarWith } from "@/util/scrollbar"; 
const scrollBarWidth = getScrollBarWith()
export default {
    name:'ScrollBar',
    props:{
        direction:{type:String,default:'vertical'},
        height:{type:[Number,String]},
        width:{type:[Number,String]},
        distance:Number
    },
    render(h){
        return (
            <div class="bar-track">
                <div ref="bar"  style={this.barStyle} class={['scroll-bar-div',this.direction]} onMousedown={this.handleMouseDown}>

                </div>
            </div>
        )
    },
    computed:{
        barStyle(){
            let {direction ,height,width,distance} = this
            let style = null
            if(direction === 'vertical'){
                style={
                    height:height,
                    transform:`translateY(${distance}px)`
                }
            }else{
                style={
                    width:width,
                    transform:`translateX(${distance}px)`
                }
            }
            return style
           
        },
        scrollWrapper(){
            return this.$parent.$refs.wrapper
        },
        contentWrapper(){
            return this.$parent.$refs.contentWrapper
        },
        wrapperSize(){
            if(this.contentWrapper && this.scrollWrapper){
                let rect = this.contentWrapper.getBoundingClientRect() //内容的高度
                let wrapperRect = this.scrollWrapper.getBoundingClientRect() //内容包裹的高度
                return {
                    width:rect.width,
                    height:rect.height,
                    maxScrollHeight:rect.height-(wrapperRect.height -scrollBarWidth),
                }
            }
            return {}
            
        },
        scrollBarSize(){
           let rect = this.$refs.bar.getBoundingClientRect()
           return {
                maxScrollDis :   this.scrollWrapper.offsetHeight - rect.height - scrollBarWidth   , //滚动条最大滚动距离
           }
        },
    },
    methods:{
        handleMouseDown(e){
            let rect = this.$refs.bar.getBoundingClientRect()
            let pos = e.clientY - rect.top //记住拖动开始时候的 top值
            this.pos = pos  //按下时坐标到top的距离
            on(document,'mousemove',this.onDocumentMove)
            on(document,'mouseup',this.onDocumentUp)
            document.onselectstart =()=>false   //防止拖拽造成文本选中，影响效果
        },
        onDocumentMove(e){
            let top = this.scrollWrapper.getBoundingClientRect().top
            let offset = e.clientY - top - this.pos

            //拖动的距离差值 
            offset = Math.min(Math.max(0,offset),this.scrollBarSize.maxScrollDis)
          
            this.$refs.bar.style.transform = `translateY(${offset}px)`
            //更新scrollWrapper的scrollTop
            let percentage =  offset / (this.scrollBarSize.maxScrollDis  )
            let scrollTop = percentage * this.wrapperSize.maxScrollHeight  //最大滚动距离 乘以百分比
            log('scrollTop by bar:',scrollTop)
            this.scrollWrapper.scrollTop = scrollTop  //这个不能加 px
        },
        onDocumentUp(){
            off(document,'mousemove',this.onDocumentMove)
            off(document,'mouseup',this.onDocumentUp)
            document.onselectstart =null //防止拖拽造成文本选中，影响效果
        }
    },
    data(){
        return {
            currentOffset:0
        }
    }
}