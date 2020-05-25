import Bar from  './bar'
import { getScrollBarWith } from "@/util/scrollbar"; 
import { addResizeListener, removeResizeListener } from "@/util/resize-event";
const scrollbarWidth = getScrollBarWith()
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
            marginBottom:`${scrollbarWidth*-1}px` //这个好像盖不住横向滚动条
        }
        return (
            <div class="ecode-scrollbar" >
                 <Bar ref="verticalBar" distance={this.transformY} height={this.scrollHeight} v-show={this.showVertical}></Bar>
                 <Bar ref="horizontalBar" distance={this.transformX} width={this.scrollWidth}  v-show={this.showHorizontal} direction="horizontal"></Bar>
                <div onScroll={this.onScroll} ref="wrapper" class="ecode-scrollbar-wrapper"  style={style}>
                   <div class="ecode-scroll-content" ref="contentWrapper">
                    {this.$slots.default}
                    </div>
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
           let elHeight = this.$el.clientHeight
           let elWidth = this.$el.clientWidth
           let contentHeight =contentWrapper.clientHeight
           let contentWidth =contentWrapper.clientWidth
           this.scrollHeight = Math.max(60, ( elHeight / contentHeight) *elHeight ) + 'px';
           this.scrollWidth =  Math.max(60, ( elWidth / contentWidth) * elWidth ) + 'px';
           this.showVertical = elHeight < contentHeight 
           this.showHorizontal = elWidth <contentWidth

           //盖住横向滚动条
           this.$refs.wrapper.style.height = this.$refs.wrapper.offsetHeight + scrollbarWidth+'px'

           this.maxScroll = contentWrapper.offsetHeight - (this.$refs.wrapper.offsetHeight - scrollbarWidth)
        },
        onScroll(){
           let scrollTop =  this.$refs.wrapper.scrollTop 
        //    log('',this.$refs.wrapper.offsetHeight-scrollbarWidth - this.verticalBar.offsetHeight)
        log('scrollTop',scrollTop)
       
           this.transformY = scrollTop / this.maxScroll * (this.$refs.wrapper.offsetHeight-scrollbarWidth - this.verticalBar.offsetHeight)
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