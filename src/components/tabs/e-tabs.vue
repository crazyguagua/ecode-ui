<template>
  <div class="ecode-tabs">
      <ETabNav :tabs="tabs" @change="change" :currentName="value"></ETabNav>
      <div class="tab-content" :style="tabContentStyle">
          <slot ></slot>
      </div>
      <slot name="action"/>
  </div>
</template>

<script>
import ETabNav from './e-tab-nav'
export default {
    name:'eTabs',
    components:{
        ETabNav
    },
    props:{
        direction:{type:String,default:'horizontal'},
        value:{type:String}
    },
    mounted(){
        this.setTabHeader()
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
    methods:{
        setTabHeader(){
            let arr =[]
            this.$children.forEach(child=>{
                if(child.$options.name =='eTab'){
                     arr.push({
                    name:child.name,
                    label:child.label
                })
                }
               
            })
            this.tabs = arr
        },
        change(item){
            this.$emit('input',item.name)
        }
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