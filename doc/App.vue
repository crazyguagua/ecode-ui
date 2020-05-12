<template>
   <div class="example">
       <Doc-header>
       </Doc-header>
       <div class="doc-content">
           <Doc-Nav  class="leftMenu"/>
              <router-view></router-view>
            <EBackToTop />
       </div>
     
       <Doc-footer />

   </div>
</template>

<script>
import DocHeader from './doc-header'
import DocFooter from './doc-footer'
import DocNav from './doc-nav'
export default {
    name:'doc',
    components:{DocHeader,DocFooter,DocNav},
    data(){
        return {

        }
    }
}
</script>

<style lang="scss">
.doc-content{
    padding-top:68px;
    padding-left:200px;
    padding:68px 10px 0 200px;
}
.example{
    
    .gridDemo{
         background: #c3c5c7;  
    }
    .gridDem{
        height:50px;
        line-height: 50px;
        box-sizing: border-box;
        text-align: center;
        background: #2d89f3;  
        border:1px solid #f12222;
    }
}
</style>