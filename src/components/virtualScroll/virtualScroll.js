import DefItemRender from './itemRender'
export default {
    props:{
        data:{type:Array},
        size:{
            type:Number,
        },
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
               style:itemStyle
           }))
       }
      
        return (
            <div class="virtualScroll">
                <div class="listWrapper" style="{ {'height':this.totalHeight }}">
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
            }
        }
    },
    methods:{
        initRange(){

        },
        calcCount(){
           
        }
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
            return '100px'
        }
    },
    mounted(){
        this.calcCount()
    }
}