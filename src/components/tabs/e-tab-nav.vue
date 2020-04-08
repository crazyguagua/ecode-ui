

<script>
import ETabBar from './e-tab-bar'
export default {
  name: "eTabNav",
  props: {
    tabs: Array,
    currentName:String
  },
  components:{
      ETabBar
  },
  created(){

  },
  methods:{
     change(tab){
       this.$emit('change',tab)  
     },
     renderLabel(h){
        return ( <div>Child</div> )
     }
  },
  render(){
    //    <div class="tab-list">
    //       <div class="tab-headerWrapper" ref="tabHeaderWrapper">
    //         <div class="tab-header" :data-tab-name="tab.name" @click.stop="change(tab)" :class="{'active':tab.name === currentName}" v-for="tab in tabs" :key="tab.name">
    //             <span v-if="tab.label">{{tab.label}}</span>
    //         </div>
    //       </div>
    //       <e-tab-bar :tabs="tabs" :currentName="currentName" ></e-tab-bar>
    //   </div>
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
    return (
         <div class="tab-list">
             <div class="tab-headerWrapper" ref="tabHeaderWrapper">
                {tabHeaders}
             </div>
             <e-tab-bar tabs={this.tabs} currentName={ this.currentName } ></e-tab-bar>
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
}
</style>
