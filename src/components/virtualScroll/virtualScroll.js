import DefItemRender from './itemRender'
import {debounce, throttle } from "throttle-debounce";
export default {
    props:{
        data:{type:Array},
        size:{
            type:Number,
        },
        paddCount:{type:Number},//前后预留几个
        itemRender:{
            default(){
                return DefItemRender
            }
        },
    },
    render(h){
        let start = this.range.start
        let end = this.range.end
        let arr = []
        const itemStyle = {}
        if(this.size){
          itemStyle['height'] = `${this.size}px`
        }
        for(let i=start;i<=end;i++){
            let item = this.data[i]
            arr.push( h(this.itemRender,{
               props:{
                   obj:item,
                   index:item.index
               },
               attrs:{
                   idx:item.index,
                   current:i === this.current
               },
               style:itemStyle
           }))
       }
      
        return (
            <div class="virtualScroll">
                <div ref="wrapper" class="listWrapper" style={{'height':this.totalHeight,'padding-top':this.paddingTop}}>
                {
                   arr
                }
                </div>
            </div>
        )
    },
    data(){
        return {
            range:{
                start:0,
                end:10
            },
            showCount:0,
            paddingTop:0,
            paddingBottom:0,
            current:0
        }
    },
    methods:{
        initRange(){

        },
        calc(){
            
           let count = Math.ceil(this.$el.offsetHeight / this.size)
            this.showCount = count
            this.range.end = this.range.start + count
            let maxPaddingTop = this.$refs.wrapper.offsetHeight - this.$el.offsetHeight
            this.maxPaddingTop = maxPaddingTop
            this.containerHeight = this.$el.offsetHeight
        },
        handleScroll:throttle(20,function(index){
          
            let {scrollTop} = this.$el
           
            let topCount = Math.floor(scrollTop / this.size) // 130 / 60 2.1 从第二个开始显示
            this.current = topCount
            let paddCount = this.paddCount?this.paddCount:this.showCount  //默认前后多一屏
            //扩大start和end的范围
            let preCount = Math.min(topCount,paddCount) //前面最多预留几个
            let maxRemain =Math.max(0,this.data.length -(topCount+this.showCount))//后面还剩几个没显示出来的
            let afterCount = Math.min(maxRemain,paddCount)
            this.range.start =topCount - preCount
            this.range.end =Math.min(topCount+this.showCount+afterCount ,this.data.length-1) //这里可能超出
            this.paddingTop = this.range.start * this.size + 'px'  //预留渲染，页面应该定位到预留的位置
            // log(this.range.start,this.range.end)
            // this.paddingBottom = paddingBottom +'px'
        }),
        bindEvents(){
            this.$el.addEventListener("scroll", this.handleScroll, { passive: true });
        }
    },
    beforeDestory(){
        this.$el.removeListener('scroll',this.handleScroll)
    },
    watch:{
        data:{
            immediate:true,
            handler(newVal,oldVal){
                this.initRange()
            }
        }
    },
    computed:{
        totalHeight(){
            return  this.data.length * this.size +'px'
        },
        
    },
    mounted(){
        this.calc()
        this.bindEvents()
    }
}