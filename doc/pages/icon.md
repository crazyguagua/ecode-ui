## icon 图标
:::demo 图片来自个人在iconfont上搜索的一些图标,采用的是svg的方式。
```html
  <div class="icon-list">
  <e-row>
    <e-col :span="3" v-for="name in icons" :key="name">
        <e-icon :name="name" /> 
        <div ><e-button v-clipboard:copy="name" v-clipboard:success="onCopySuccess" size="small"> {{name}}</e-button></div>
    </e-col>
  </e-row>
  
    
  </div>
  <script>

    export default {
      data(){
        return {
          icons:['ecode-i-add','ecode-zuqiu','ecode-message','ecode-warn1','ecode-fail','ecode-chenggong','ecode-error-cricle-fill','ecode-xiaoxi','ecode-searchclose','ecode-triangle-copy','ecode-triangle1','ecode-ok','ecode-warn','ecode-arrow-left','ecode-arrow-right','ecode-loading','ecode-search','ecode-downlaod']
        }
      },
      methods:{
        onCopySuccess(){

        }
      }
    }
  </script>
```
:::