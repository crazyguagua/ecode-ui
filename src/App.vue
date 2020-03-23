<template>
   <div class="example">
       <div class="button">
        <e-button icon="ecode-downlaod" :loading="loading1" @click="loading1 = !loading1"> 按钮1 </e-button>
        <e-button  :loading="loading2" @click="loading2 = !loading2"> 按钮2 </e-button>
        <e-button icon="ecode-downlaod" icon-position="right" :loading="loading3" @click="loading3 = !loading3"> 按钮3 </e-button>
        <e-button-group>
            <e-button icon="ecode-arrow-left"> 上一步 </e-button>
           <e-button > 当前 </e-button>
            <e-button icon="ecode-arrow-right" icon-position="right"> 下一步 </e-button>
        </e-button-group>
        </div>
        <div class="input" style="margin-top:20px;">
            <e-input v-model="text1" style="width:100px;"></e-input>
            <e-input v-model="text2" placeholder="请输入用户名" style="width:200px;"></e-input>
            <e-input v-model="text2" disabled placeholder="请输入" ></e-input>
            <e-input v-model="text3" readonly placeholder="请输入" ></e-input>
            <e-input v-model="text3"  placeholder="请输入" error="用户已存在"></e-input>
            <e-input v-model="text4"  placeholder="请输入" ></e-input>
        </div>

        <div style="margin-top:20px;" >
            <e-row >
                <e-col :span="2"><div class="gridDem">1</div></e-col>
                <e-col :span="20"><div class="gridDem">1</div></e-col>
            </e-row>
        </div>
         <div style="margin-top:20px;" >
            <e-row >
                <e-col :span="2"><div class="gridDem">1</div></e-col>
                <e-col :span="10" :offset="2"><div class="gridDem">1</div></e-col>
                 <e-col :span="3" :offset="2"><div class="gridDem">1</div></e-col>
            </e-row>
        </div>

        <div style="margin-top:20px;" >
            <e-row :gutter="20">
                <e-col :span="2"><div class="gridDem">1</div></e-col>
                <e-col :span="22" ><div class="gridDem">1</div></e-col>
            </e-row>
        </div>

         <div style="margin-top:20px;" >
            <e-row :gutter="20" >
                <e-col :span="2"><div class="gridDem" style="height:50px;">1</div></e-col>
                <e-col :span="2" ><div class="gridDem" style="height:100px;">2</div></e-col>
                <e-col :span="2" ><div class="gridDem" style="height:80px;">3</div></e-col>
            </e-row>
        </div>

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
            text1:'张三',
            text2:'李斯',
            text3:'王五',
            text4:'11111'

        }
    }
}
</script>

<style lang="scss">
.example{
    padding:10px;
    .gridDem{
        height:100px;
        background: #2d89f3;  
        border:1px solid #fff;
    }
}
</style>