import DefItemRender from './itemRender'
import {debounce } from "throttle-debounce";
export default {
    props:{
        data:{type:Array},
        size:{
            type:Number,
        },
        paddCount:{type:Number,default:3},
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
                   index:i
               },
               attrs:{
                   idx:item.index
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
            paddingTop:0
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
        handleScroll:debounce(1,function(index){
            let {scrollTop} = this.$el
            console.log(scrollTop)
            let topCount = Math.floor(scrollTop / this.size)
            this.range.start = Math.max(0,topCount - this.paddCount )
            this.range.end = topCount + this.showCount + this.paddCount 
            //计算paddingTop

            let paddingTop =0
            if(scrollTop > this.containerHeight){
                paddingTop = scrollTop - this.containerHeight
            }
            this.paddingTop = paddingTop + 'px'
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
        // paddingTop(){
        //     let paddingTop =  Math.max(0,this.range.start - this.paddCount )* this.size 
            
        //     return Math.min(this.maxPaddingTop,paddingTop) +'px'
        // }
    },
    mounted(){
        this.calc()
        this.bindEvents()
    }
}