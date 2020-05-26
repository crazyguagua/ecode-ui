import {on,off} from '@/util/dom'
import PropMap from './propMap'
import { getScrollBarWith } from "@/util/scrollbar"; 
import propMap from './propMap';
const scrollBarWidth = getScrollBarWith()
export default {
    name:'ScrollBar',
    props:{
        direction:{type:String,default:'vertical'},
        height:{type:[Number,String]},
        width:{type:[Number,String]},
        distance:[Number,String]
    },
    render(h){
        let trackStyle={}
        if(this.$parent.showVertical && this.direction =='horizontal'){
            trackStyle.right='8px'
        }
        if(this.$parent.showHorizontal && this.direction =='vertical' ){
            trackStyle.bottom = '8px'
        }
        return (
            <div  class={['bar-track',this.direction]} style={trackStyle} >
                <div ref="bar"  style={this.barStyle} class={['scroll-bar-div']} onMousedown={this.handleMouseDown}>

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
        size(){
            return propMap[this.direction].size
        },
        offsetSize(){
            return propMap[this.direction].offsetSize
        },
         clientAxis(){
             return propMap[this.direction].clientAxis
         },
         pos(){
            return propMap[this.direction].pos
        },
        translateName(){
            return propMap[this.direction].translateName
        },
        scroll(){
            return propMap[this.direction].scroll
        },
        wrapperSize(){
            if(this.contentWrapper && this.scrollWrapper){
                let rect = this.contentWrapper.getBoundingClientRect() //内容的高度
                let wrapperRect = this.scrollWrapper.getBoundingClientRect() //内容包裹的高度
                //
                let maxScrollDis = rect[this.size] - (wrapperRect[this.size] - scrollBarWidth)
                return {
                    width:rect.width,
                    height:rect.height,
                    maxScrollHeight:maxScrollDis,
                }
            }
            return {}
            
        },
        scrollBarSize(){
           let bar = this.$refs.bar
           return {
                maxScrollDis :   bar.parentNode[this.offsetSize] - bar[this.offsetSize]  , //滚动条最大滚动距离
           }
        },
    },
    methods:{
        handleMouseDown(e){
            let rect = this.$refs.bar.getBoundingClientRect()
            let pos = e[this.clientAxis] - rect[this.pos] //记住拖动开始时候的 top值
            this.position = pos  //按下时坐标到top的距离
            on(document,'mousemove',this.onDocumentMove)
            on(document,'mouseup',this.onDocumentUp)
            document.onselectstart =()=>false   //防止拖拽造成文本选中，影响效果
        },
        onDocumentMove(e){
            let pos = this.scrollWrapper.getBoundingClientRect()[this.pos]
            let offset = e[this.clientAxis] - pos - this.position

            //拖动的距离差值 
            offset = Math.min(Math.max(0,offset),this.scrollBarSize.maxScrollDis) //控制最大最小值
          
            this.$refs.bar.style.transform = `${this.translateName}(${offset}px)`
            //更新scrollWrapper的scrollTop
            let percentage =  offset / (this.scrollBarSize.maxScrollDis  )
            let scrollDistance = percentage * this.wrapperSize.maxScrollHeight  //最大滚动距离 乘以百分比
            log('scroll by bar:',scrollDistance)
            this.scrollWrapper[this.scroll] = scrollDistance  //这个不能加 px
        },
        onDocumentUp(){
            off(document,'mousemove',this.onDocumentMove)
            off(document,'mouseup',this.onDocumentUp)
            document.onselectstart =null //防止拖拽造成文本选中，影响效果
        }
    },
    beforeDestroy(){
        off(document,'mousemove',this.onDocumentMove)
        off(document,'mouseup',this.onDocumentUp)
    }
}