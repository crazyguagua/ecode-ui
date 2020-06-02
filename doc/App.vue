<template>
   <div class="example">
       <Doc-header>
       </Doc-header>
    
        <e-scrollbar class="doc-content" >
            <Doc-Nav/>
            <router-view></router-view>
            <EBackToTop container-el=".doc-content > .ecode-scrollbar-wrapper" />
        </e-scrollbar>

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
.example > .doc-content{
    position: absolute;
    top:68px;
    left:250px;
    bottom: 0;
    right: 0;
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