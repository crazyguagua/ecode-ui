import {on,off} from '@/util/dom'
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

            this.elTop = parentTop  //初始top
            this.pos = pos  //按下时坐标到top的距离
            this.max =  this.scrollWrapper.offsetHeight - rect.height 
            on(document,'mousemove',this.onDocumentMove)
            on(document,'mouseup',this.onDocumentUp)
            document.onselectstart =()=>false   //防止拖拽造成文本选中，影响效果
        },
        onDocumentMove(e){
          
           
            let offset = e.clientY - this.elTop - this.pos
            console.log('move pos',this.pos)
            console.log(`move`,offset)
            offset = Math.min(Math.max(0,offset),this.max)

            
            this.$el.style.transform = `translateY(${this.currentOffset + offset}px)`
            this.currentOffset = offset
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