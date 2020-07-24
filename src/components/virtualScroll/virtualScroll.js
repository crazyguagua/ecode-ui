
import {debounce, throttle } from "throttle-debounce";
import {binarySearch,ATTRMAP} from './calc'
import Props from './props'
export default {
    name:'virtualScroll',
    mixins:[Props],
    //每次渲染的条数更新，都会触发update
    updated(){
        this.$nextTick(()=>{
            if(this.variable){
                this.calcRealItemHeight()
            }
        })
    },
    created(){
        this.handleScroll = throttle(this.throttle,(e)=>{
          
            let scroll =  this.$el[ this.attr.scroll]
           
             if(this.variable){
                 this.handleScrollVariable(scroll)
             }else {
                 this.handleScrollFixed(scroll)
             }
        })
    },
    render(h){
        let start = this.range.start
        let end = this.range.end
        let arr = []
        const itemStyle = {}
        let {size,paddingType} =this.attr
        if(this.size && !this.variable ){
          itemStyle[size] = `${this.size}px`
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
       let style 
       let clazz = ['listWrapper']
       if(this.direction == 'horizontal'){
            clazz = ['listWrapper','horizontal']
       }
       style = {
        [size]:this.totalSize,
        [paddingType]:this.paddingOffset
       }
        return (
            <div class="virtualScroll">
                <div ref="wrapper" class={clazz} style={style}>
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
            paddingOffset:0,
            current:0
        }
    },
    methods:{
        //根据预估的高度计算所有的列表项的高度
        initPosition(){
            let {start,end,size} = this.attr
            let positions = this.data.map((item,index)=>{
                return {
                    [start]:index * this.size,
                    [end]:(index+1) * this.size,
                    [size]:this.size
                }
            })
            this.positions = positions
        },
        //计算容器大概显示几条
        calcShowCount(){
            let count 
            if(this.direction === 'horizontal'){
                count = Math.ceil(this.$el.offsetWidth / this.size)
  
            }else{
                count = Math.ceil(this.$el.offsetHeight / this.size)
               
            }   
            this.showCount = count
         
        },
        //计算真实的dom高度
        calcRealItemHeight(){
             
            let wrapper = this.$refs.wrapper
           
            let children = wrapper.childNodes
            for(let i=0;i<children.length;i++){
                let child = children[i]
                let {height} = child.getBoundingClientRect() //只需要高度，top,bottom 的坐标是屏幕坐标，不是列表的坐标
               
                let idx = child.getAttribute('idx')
                let deltaHeight = this.positions[idx].height - height
                this.positions[idx].height = height  
                this.positions[idx].bottom = this.positions[idx].bottom - deltaHeight
            }
            
            for(let j=this.current+1;j<this.positions.length;j++){
                let position = this.positions[j]
                position.top = this.positions[j-1].bottom
                position.bottom = position.top+position.height //像链表一样，一个变了，后面的都要变
            }
            //更新总的高度
            wrapper.style.height = this.positions[this.positions.length-1].bottom + 'px'
        },
        //处理固定高度的滚动
        handleScrollFixed(scrollTop){
            let topCount = Math.floor(scrollTop / this.size) // 130 / 60 2.1 从第二个开始显示
            this.current = topCount
            let paddCount = this.paddCount?this.paddCount:this.showCount  //默认前后多一屏
            //扩大start和end的范围
            let preCount = Math.min(topCount,paddCount) //前面最多预留几个
            let maxRemain =Math.max(0,this.data.length -(topCount+this.showCount))//后面还剩几个没显示出来的
            let afterCount = Math.min(maxRemain,paddCount)
            this.range.start =topCount - preCount
            this.range.end =Math.min(topCount+this.showCount+afterCount ,this.data.length-1) //这里可能超出
            this.paddingOffset = this.range.start * this.size + 'px'  //预留渲染，页面应该定位到预留的位置
        },
        //处理高度不固定的情况下的滚动
        handleScrollVariable(scroll){
            //二分查找显示区域 应该显示的起始index
            let startIndex = binarySearch(this.positions,scroll,this.attr.start)
            this.current = startIndex
            let paddCount = this.paddCount?this.paddCount:this.showCount  //默认前后多一屏
            let preCount = Math.min(startIndex,paddCount) //前面最多预留几个
            let maxRemain =Math.max(0,this.data.length -(startIndex+this.showCount))//后面还剩几个没显示出来的
            let afterCount = Math.min(maxRemain,paddCount)
            this.range.start =startIndex - preCount
            this.range.end =Math.min(startIndex+this.showCount+afterCount ,this.data.length-1) //这里可能超出
            this.paddingOffset = this.positions[this.range.start][this.attr.end]+ 'px'  //预留渲染，页面应该定位到预留的位置
        },
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
                // this.initRange()
                this.initPosition()
            }
        }
    },
    computed:{
        totalSize(){
            if(this.variable){
                return this.positions[this.positions.length-1][this.attr.end] + 'px'
            }else{
                return  this.data.length * this.size +'px'
            }
           
        },
        attr(){
            return ATTRMAP[this.direction]
        }
        
    },
    mounted(){
        this.calcShowCount()
        this.bindEvents()
    }
}