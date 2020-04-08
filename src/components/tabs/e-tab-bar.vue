<template>
  <div class="e-tab-bar" :style="styles">

  </div>
</template>

<script>
export default {
    name:'eTabBar',
    props:{
        tabs:Array,
        currentName:String
    },
    computed:{
        styles(){
            // 
            let width = 0
            let left=0
            let currentIndex =-1
            console.log('计算')
            this.tabs.forEach((item,index)=>{
                let name = item.name
                let dom 
                let tabHeaderWrapper = this.$parent.$refs.tabHeaderWrapper
                let children = tabHeaderWrapper.childNodes
                // for(let i=0;i<children.length;i++){
                //     if(children[i].dataset.tabName == name){
                //         dom = children[i]
                //     }
                // }
                dom = children[index]
                if(dom){
                    if(name == this.currentName){
                        width = dom.clientWidth
                        currentIndex = index
                    }
                    if(currentIndex==-1){
                        left += dom.clientWidth
                    }
                }
            })
            // let children = 
            return {
                width:`${width}px`,
                transform:`translate(${left}px,0)`
            }
        }
    }
}
</script>

<style lang="scss">
$tab-active-color:#3c5ed8;
.e-tab-bar{
    position: absolute;
    background: $tab-active-color;
    height: 2px;
    transition: transform .3s cubic-bezier(.645,.045,.355,1),width .2s cubic-bezier(.645,.045,.355,1),left .3s cubic-bezier(.645,.045,.355,1);
}
</style>