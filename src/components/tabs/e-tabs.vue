<script>
// 因为要支持 自定义标签，需要吧slot="label" 的内容放到 e-nav组件里面去渲染，用模板不好做
//  <e-tabs v-model="current">
//         <e-tab  name="liverpool">
//             <span slot="label"> <e-icon name="ecode-zuqiu" ></e-icon> 红军利物浦 </span>
//             萨拉赫 马内 菲儿米诺
//         </e-tab>
//  </e-tabs>
import ETabNav from './e-tab-nav'
export default {
    name:'eTabs',
    components:{
        ETabNav
    },
    props:{
        direction:{type:String,default:'horizontal'},
        value:{type:String},
        editable:{type:Boolean,default:false}
    },
    mounted(){
        this.updateTab()
    },
    data(){
        return {
            tabs:[]
        }
    },
    computed:{
        tabContentStyle(){
           
            if(this.activeIndex>-1){
                return {
                    marginLeft:100*(-1)*this.activeIndex+'%'
                }
            }
            return {}
        },
        activeIndex(){
             let index =this.tabs.findIndex(item=>{
                return item.name === this.value
            })
            return index
        }
    },
    updated(){  //动态根据数据渲染tab时候触发
        // this.updateTab()
        console.log('updated')
        this.updateTab()
    },
    methods:{
        updateTab(){
            let arr =[]
            if(this.$slots.default){
                this.$children.forEach(child=>{
                    if(child.$options.name =='eTab'){
                        arr.push(child)
                    }
                
                })
                //这里面不能直接赋值 this.tabs = arr，否则就一直updateTab，死循环了。
                let noChange = (this.tabs.length === arr.length && arr.every((item,index)=>{ return item === this.tabs[index]}))
                if(!noChange){
                    this.tabs = arr
                }
            }else if(this.tabs.length!=0){
                this.tabs = []
            }
           
        },
        change(item){
            this.$emit('input',item.name)
        }
    },
    render(h){
//         <div class="ecode-tabs">
//       <ETabNav :tabs="tabs" @change="change" :currentName="value"></ETabNav>
//       <div class="tab-content" :style="tabContentStyle">
//           <slot ></slot>
//       </div>
//       <slot name="action"/>
//   </div>
         const navProp={
             props:{
                 currentName:this.value,
                 tabs:this.tabs,
                 editable:this.editable
             },
             on:{
                change:this.change,
             }
         }
          return (
              <div class="ecode-tabs">
                <ETabNav {...navProp}> </ETabNav>
                <div class="tab-content" style={this.tabContentStyle} >
                    {this.$slots.default}
                </div>
              </div>
          )
    }
}
</script>

<style lang="scss">
.ecode-tabs{
    overflow:hidden;
    .tab-content{
        display: flex;
        flex-direction: row;
        //这里不能overflow 否则下面几个tab内容看不见了
        width: 100%;
        transition: margin-left .35s cubic-bezier(.645,.045,.355,1);
        will-change: margin-left;
    }
}
</style>