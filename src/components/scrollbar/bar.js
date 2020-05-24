import {on,off} from '@/util/dom'
const propMap={
    'horizontal':{
        
    }
}
export default {
    name:'ScrollBar',
    props:{
        direction:{type:String,default:'vertical'},
        height:{type:[Number,String]},
        width:{type:[Number,String]},
    },
    render(h){
        return (
            <div  style={this.barStyle} class={['scroll-bar-div',this.direction]} onMousedown={this.handleMouseDown}>

            </div>
        )
    },
    computed:{
        barStyle(){
            let style =null
            if(this.direction === 'vertical'){
                style={
                    height:this.height
                }
            }else{
                style={
                    width:this.width
                }
            }
            return style
           
        },
        scrollWrapper(){
            return this.$parent.$el
        }
    },
    methods:{
        handleMouseDown(e){
            this.startDrag = true
            let rect  = this.$el.getBoundingClientRect()
            let parentTop = this.scrollWrapper.getBoundingClientRect().top
            let pos = e.clientY - parentTop
            this.currentOffset = rect.top - parentTop //记住拖动开始时候的 top值
            this.elTop = parentTop  //初始top
            this.pos = pos  //按下时坐标到top的距离
            this.max =  this.scrollWrapper.offsetHeight - rect.height 
            on(document,'mousemove',this.onDocumentMove)
            on(document,'mouseup',this.onDocumentUp)
            document.onselectstart =()=>false   //防止拖拽造成文本选中，影响效果
        },
        onDocumentMove(e){
          
           
            let offset = e.clientY - this.elTop - this.pos
            log(`move`,offset)

            offset = this.currentOffset + offset  //拖动开始时的top值减去，拖动的距离 为新的top值
            offset = Math.min(Math.max(0,offset),this.max)
            this.$el.style.transform = `translateY(${offset}px)`
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