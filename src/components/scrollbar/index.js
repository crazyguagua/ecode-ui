import Bar from  './bar'
export default{
    props:{
        native:{type:Boolean,default:false},//使用原生scroll
    },
    components:{Bar},
    name:'ecodeScrollbar',
    render(h){
        if(this.native){
            return (
                <div class="ecode-scrollbar-native" onScroll="handleScroll">
                    {this.$slots.default}
                </div>
            ) 
        }
        return (
            <div class="ecode-scrollbar">
                 <Bar height={this.scrollHeight} v-show={this.showVertical}></Bar>
                 <Bar width={this.scrollWidth}  v-show={this.showHorizontal} direction="horizontal"></Bar>
                <div class="ecode-scrollbar-wrapper" ref="contentWrapper">
                   
                    {this.$slots.default}
                </div>
            </div>
        ) 
    },
    data(){
        return {
            scrollWidth:null,
            scrollHeight:null,
            showVertical:false,
            showHorizontal:false
        }
    },
    methods:{
        checkHasScrollY(){
            //判断是否出现纵向滚动条
        },
        updateScrollBar(){
            //更新滚动条的高度 
           let contentWrapper=  this.$refs.contentWrapper
           this.scrollHeight = this.$el.clientHeight / contentWrapper.clientHeight *100 +'%';
           this.scrollWidth = this.$el.clientWidth / contentWrapper.clientWidth *100 +'%';
           this.showVertical = this.$el.clientHeight < contentWrapper.clientHeight
           this.showHorizontal = this.$el.clientWidth < contentWrapper.clientWidth
        },
        handleScroll(){

        }
    },
    mounted(){
        this.updateScrollBar()
    }
}