import Bar from  './bar'
import { getScrollBarWith } from "@/util/scrollbar"; 
import { addResizeListener, removeResizeListener } from "@/util/resize-event";
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
        resize:{type:Boolean,default:true} //容器的尺寸是否会发生变化
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
            <div class="ecode-scrollbar" onMouseenter={()=>{this.entered = true}} onMouseleave={()=>{this.entered = false}} >
                <transition name="ecode-fade">
                 <Bar ref="verticalBar" distance={this.transformY} height={this.scrollHeight} v-show={this.showVertical && this.entered }></Bar>
                 </transition>
                 <transition name="ecode-fade">
                 <Bar ref="horizontalBar" distance={this.transformX} width={this.scrollWidth}  v-show={this.showHorizontal && this.entered} direction="horizontal"></Bar>
                 </transition>
                <div onScroll={this.onScroll} ref="wrapper" class="ecode-scrollbar-wrapper"  style={style}>
                   <div class="ecode-scroll-content" ref="contentWrapper">
                    {this.$slots.default}
                    </div>
                    {/* <div class="bottomPadd" style={{height:`${scrollbarWidth}px`}}></div> */}
                </div>
                
            </div>
        ) 
    },
    data(){
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
           let elHeight = wrapper.offsetHeight
           let elWidth = wrapper.offsetWidth

           let contentHeight =contentWrapper.scrollHeight
           let contentWidth = contentWrapper.scrollWidth

            //是否应该显示滚动条
           this.showVertical = elHeight < contentHeight 
           this.showHorizontal = elWidth <contentWidth
             //修改contentwrapper的宽度
            if(this.showHorizontal){
                contentWidth = getChildrenWidth(contentWrapper)
                contentWrapper.style.width = contentWidth+'px'
            }
           this.scrollHeight = Math.max(60, ( elHeight / contentHeight) *elHeight ) + 'px';
           this.scrollWidth =  Math.max(60, ( elWidth / contentWidth) * elWidth ) + 'px';
           

         
        //    this.$refs.wrapper.style.height = this.$refs.wrapper.offsetHeight +scrollbarWidth + 'px'

           this.maxScroll = contentWrapper.offsetHeight - (this.$refs.wrapper.offsetHeight - scrollbarWidth)
        },
        onScroll(){
           let {scrollTop,scrollLeft} =  this.$refs.wrapper 
        //    log('',this.$refs.wrapper.offsetHeight-scrollbarWidth - this.verticalBar.offsetHeight)
           log('scrollTop',scrollTop)
       
           this.transformY = scrollTop / this.maxScroll * (this.verticalBar.parentNode.offsetHeight- this.verticalBar.offsetHeight)
           this.transformX = scrollLeft / this.maxScroll * (this.verticalBar.parentNode.offsetWidth- this.verticalBar.offsetWidth)
        //    this.verticalBar.style.transform=`translateY(${translate}px)`
        }
    },
    mounted(){
        this.updateScrollBar()
        if(this.resize){
            this.$nextTick(()=>{
           
                //不能对$el 监听，要监听内容部分的高度
                //尺寸变化时从新计算滚动条高度，滚动最大距离等
                addResizeListener(this.$refs.contentWrapper,this.updateScrollBar)
            })
        }
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
            removeResizeListener(this.$el,this.updateScrollBar)
        }
    }
}