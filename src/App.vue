<template>
   <div class="example">
        <e-button icon="ecode-downlaod" :loading="loading1" @click="loading1 = !loading1"> 按钮1 </e-button>
        <e-button  :loading="loading2" @click="loading2 = !loading2"> 按钮2 </e-button>
        <e-button icon="ecode-downlaod" icon-position="right" :loading="loading3" @click="loading3 = !loading3"> 按钮3 </e-button>
        <e-button-group>
            <e-button icon="ecode-arrow-left"> 上一步 </e-button>
           <e-button > 当前 </e-button>
            <e-button icon="ecode-arrow-right" icon-position="right"> 下一步 </e-button>
        </e-button-group>
   </div>
</template>

<script>
export default {
    name:'app',
    data(){
        return {
            loading1:false,
            loading2:false,
            loading3:false,

        }
    }
}
</script>

<style lang="scss">
.example{
    padding:10px;
}
</style>