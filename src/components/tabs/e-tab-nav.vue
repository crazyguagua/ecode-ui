

<script>
import ETabBar from './e-tab-bar'
import EButton from '../button/button'
import Emit from '@/util/emit'
import EIcon from '../icon/icon'
export default {
  name: "eTabNav",
  props: {
    tabs: Array,
    currentName:String,
    editable:{Boolean}
  },
  mixins:[Emit],
  components:{
      ETabBar,EButton,EIcon
  },
  created(){

  },
  data(){
    return {
       isScroll:false,
       currentOffset:0
    }
  },
  methods:{
     change(tab){
       if(this.isScroll){
         //滚动到鼠标点击的tab
          let children = this.$refs.tagChildren
          
       }
       this.$emit('change',tab)  
     },
     handleAdd(){
       this.dispatch('eTabs','editTab')
     },
     handleLeftClick(){
       let scrollContainerWidth = this.$refs.tagList.clientWidth  //容器宽度
        let containerChildrenWidth = this.$refs.tagChildren.clientWidth  //子元素的宽度之和
        //如果 
        if(Math.abs(this.currentOffset)<scrollContainerWidth){
            //小于容器宽度
            this.currentOffset = 0
        }else{
            //左移动时currentOffset是负的，加上一个容器的宽度
            this.currentOffset =this.currentOffset + scrollContainerWidth
        }
     },
     handleRightClick(){
        let scrollContainerWidth = this.$refs.tagList.clientWidth  //容器宽度
        let containerChildrenWidth = this.$refs.tagChildren.clientWidth  //子元素的宽度之和
        //如果 子元素的宽度之和减去平移的距离 大于2倍的容器 平移一倍容器的距离，否则 直接移动到最后
        if((containerChildrenWidth + this.currentOffset)>scrollContainerWidth*2){
            this.currentOffset -= scrollContainerWidth
        }else{
            this.currentOffset = this.currentOffset - (containerChildrenWidth + this.currentOffset  - scrollContainerWidth)
        }
     },
     scrollToActiveTab(){
       if(!this.isScroll){
         return
       }
       let scrollContainerWidth = this.$refs.tagList.clientWidth
       let activChild = this.$refs.tagChildren.querySelector('.tab-header.active')
       let activeChildBounding = activChild.getBoundingClientRect()
       let containerBounding = this.$refs.tagList.getBoundingClientRect()
       if(activeChildBounding.left+activeChildBounding.width > containerBounding.left + containerBounding.width){
         //当前激活的tab在容器右侧
          this.currentOffset = this.currentOffset-((activeChildBounding.left+activeChildBounding.width )-(containerBounding.left + containerBounding.width))
       }else if(activeChildBounding.left < containerBounding.left){

         //当前激活的tab在容器的左侧
           this.currentOffset = this.currentOffset+(containerBounding.left-activeChildBounding.left)
       }
     },
     update(){
       console.log('updated')
       //更新是否出现滚动条，是否显示左移，右移按钮
       let scrollContainerWidth = this.$refs.tagList.clientWidth

       let containerChildrenWidth = this.$refs.tagChildren.clientWidth

       if(scrollContainerWidth<containerChildrenWidth){
          this.isScroll = true
       }else{
         this.isScroll = false
         this.currentOffset = 0  //offset复原
       }

     }
  },
  updated(){
    this.update()
  },
  render(){
    let actionSlot = this.$parent.$slots.action?this.$parent.$slots.action:(
      <e-button icon="ecode-i-add" size="small" on-click={this.handleAdd}></e-button>
    )
    let actionDiv = null
    if(this.editable){
      actionDiv = (
        <div class="action"><e-button icon="ecode-i-add" size="small" on-click={this.handleAdd}></e-button></div>
      )
    }
    if(this.$parent.$slots.action){
      actionDiv = (
        <div class="action">{this.$parent.$slots.action}</div>
      )
    }
    const tabHeaders = this.tabs.map(item=>{
        return (
            <div class={{
                "tab-header":true,
                "active":item.name === this.currentName
            }} data-tab-name={item.name} 
                on-click={()=>{this.change(item)}} 
                key={item.name}
            >
              { item.$slots.label?item.$slots.label:item.label }
            </div>
        )
    })
    const leftNav = this.isScroll?(<div unselectable="unselectable" class="leftNav navArrow" on-click={this.handleLeftClick}><e-icon  name="ecode-arrow-left"/></div>):null
    const rightNav =this.isScroll ? (<div unselectable="unselectable" class="rightNav navArrow" on-click={this.handleRightClick}><e-icon  name="ecode-arrow-right"/></div>):null

    // 判断是否需要滚动

    return (
         <div class="tab-list">
            {actionDiv}
             <div class={{"tab-headerWrapper":true,"is-scroll":this.isScroll}}  ref="tabHeaderWrapper">
                <div class={{"tag-list":true}} ref="tagList">
                  <div class="tag-list-children" ref="tagChildren" style={{'transform':`translate(${this.currentOffset}px,0)`}}> 
                    {tabHeaders} 
                    <e-tab-bar tabs={this.tabs} currentName={ this.currentName } ></e-tab-bar>
                  </div>
                  
                </div>
               
                {leftNav}
                {rightNav}
               
             </div>
             
         </div>
    )
  }
};
</script>

<style lang="scss">
$tab-active-color:#3c5ed8;
.tab-list {
  border-bottom: 1px solid #f0f0f0;
  margin: 0 0 16px;
  .tab-headerWrapper{
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    &::before{
      content: "";
      display: table;
    }
    &::after{
      content: "";
      display: table;
    }
    .leftNav{
      position: absolute;
      left:0;
      top:0;
      height: 100%;
    }
    .navArrow{
      color: #909399;
      background: transparent;
      width: 32px;
      line-height: 41px;
      text-align: center;
      cursor: pointer;
    }
    .rightNav{
      position: absolute;
      right:0;
      top:0;
      height: 100%;
    }
    &.is-scroll{
      padding: 0 32px;
    }
  }
  .tag-list{
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    .tag-list-children{
      float: left;  //浮动 保证宽度和子元素宽度之和一致
    }
  }
  .tab-header {
    display: inline-block;
    padding: 10px;
    cursor: pointer;

    &.active {
      color: $tab-active-color;
    }
    &:hover {
      color: $tab-active-color;
    }
  }
  .action{
    float: right;
    line-height: 40px;
  }
}
</style>
