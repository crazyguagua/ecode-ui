import Bar from  './bar'
import { getScrollBarWith } from "@/util/scrollbar"; 
import { addResizeListener, removeResizeListener } from "@/util/resize-event";
import {on,off} from '@/util/dom'
const scrollbarWidth = getScrollBarWith()
const getChildrenWidth = (node)=>{
    let children = node.children
    let maxWidth = 0
    for (let index = 0; index < children.length; index++) {
        const element = children[index];
        if(maxWidth<element.offsetWidth){
            maxWidth = element.offsetWidth
        }
    }
    return maxWidth
}
/** e-scrollbar 这个组件需要给固定高度，宽度 */
export default{
    props:{
        native:{type:Boolean,default:false},//使用原生scroll
        resize:{type:Boolean,default:true} //是否监听容器的尺寸变化
    },
    components:{Bar},
    name:'ecodeScrollbar',
    render(h){
        
        if(this.native){
            return (
                <div class="ecode-scrollbar-native" >
                    {this.$slots.default}
                </div>
            ) 
        }
        let style = {
            marginRight:`${scrollbarWidth*-1}px`,
            height:`calc(100% + ${scrollbarWidth}px` //增加一个滚动条的高度 用来盖住横向滚动条
        }
        return (
            <div class="ecode-scrollbar" onMouseenter={()=>{this.onEnter()}} onMouseleave={()=>{this.entered = false}} >
                <transition name="ecode-fade">
                 <Bar ref="verticalBar" distance={this.transformY} height={this.scrollHeight} v-show={this.showVertical && this.entered }></Bar>
                 </transition>
                 <transition name="ecode-fade">
                 <Bar ref="horizontalBar" distance={this.transformX} width={this.scrollWidth}  v-show={this.showHorizontal && this.entered} direction="horizontal"></Bar>
                 </transition>
                <div  ref="wrapper" class="ecode-scrollbar-wrapper"  style={style}>
                   <div class="ecode-scroll-content" ref="contentWrapper">
                    {this.$slots.default}
                    </div>
                    {/* <div class="bottomPadd" style={{height:`${scrollbarWidth}px`}}></div> */}
                </div>
                
            </div>
        ) 
    },
    data(){
        this.scrollTop = 0;
        this.scrollLeft = 0;
        return {
            scrollWidth:null,
            scrollHeight:null,
            showVertical:false,
            showHorizontal:false,
            entered:false,
            transformX:0,// 横向transform 距离
            transformY:0,//纵向transform
        }
    },
    methods:{
        checkHasScrollY(){
            //判断是否出现纵向滚动条
        },
        updateScrollBar(){
          
            //更新滚动条的高度 
           let contentWrapper=  this.$refs.contentWrapper
           let wrapper = this.$refs.wrapper
           if(!wrapper){
             return
           }
           let elHeight = wrapper.offsetHeight
           let elWidth = wrapper.offsetWidth

           let contentHeight =contentWrapper.scrollHeight
           let contentWidth = contentWrapper.scrollWidth

            //是否应该显示滚动条
           this.showVertical = elHeight < contentHeight 
           this.showHorizontal = elWidth <contentWidth
             //修改contentwrapper的宽度
            if(this.showHorizontal ){ 
                //父元素不会被子元素的宽度撑开 手动调整宽度
               let childContentWidth = getChildrenWidth(contentWrapper)
               if(contentWrapper.offsetWidth !== childContentWidth){
                    //这里需要判断一下宽度是否已经相等，否则会一直触发resize
                contentWrapper.style.width = childContentWidth+'px'
               } 
            }
           this.scrollHeight = Math.max(60, ( elHeight / contentHeight) *elHeight ) + 'px';
           this.scrollWidth =  Math.max(60, ( elWidth / contentWidth) * elWidth ) + 'px';
           

         
        //    this.$refs.wrapper.style.height = this.$refs.wrapper.offsetHeight +scrollbarWidth + 'px'

           this.maxScrollY = contentWrapper.offsetHeight - (this.$refs.wrapper.offsetHeight - scrollbarWidth)
           this.maxScrollX = contentWrapper.offsetWidth - (this.$refs.wrapper.offsetWidth - scrollbarWidth)
        },
        onScroll(){
           let {scrollTop,scrollLeft} =  this.$refs.wrapper 
        //    log('',this.$refs.wrapper.offsetHeight-scrollbarWidth - this.verticalBar.offsetHeight)
        // log('scrollTop',scrollTop)
          this.scrollTop = scrollTop
          this.scrollLeft = scrollLeft
          if(this.entered){
              this.setBarDistance()
          }
        //    this.verticalBar.style.transform=`translateY(${translate}px)`
        },
        //设置滚动条的滚动距离
        setBarDistance(){
            //
            this.transformY = this.scrollTop / this.maxScrollY * (this.verticalBar.parentNode.offsetHeight- this.verticalBar.offsetHeight)
            this.transformX = this.scrollLeft / this.maxScrollX * (this.horizontalBar.parentNode.offsetWidth- this.horizontalBar.offsetWidth)
        },
        onEnter(){
            this.entered = true
            this.$nextTick(()=>{
                this.setBarDistance()
            })
        }
    },
    mounted(){
        this.updateScrollBar()
        if(this.resize){
            this.$nextTick(()=>{
           
                //不能对$el 监听，要监听内容部分的高度
                //尺寸变化时从新计算滚动条高度，滚动最大距离等
                addResizeListener(this.$refs.contentWrapper,this.updateScrollBar)
            },30)
        }
        on(this.$refs.wrapper,'scroll',this.onScroll)
    },
    computed:{
        verticalBar(){
            return this.$refs.verticalBar.$refs.bar
        },
        horizontalBar(){
            return this.$refs.horizontalBar.$refs.bar
        }
    },
    beforeDestroy(){
        if(this.resize){
            removeResizeListener(this.$refs.contentWrapper,this.updateScrollBar)
        }
        off(this.$refs.wrapper,'scroll',this.onScroll)
    }
}