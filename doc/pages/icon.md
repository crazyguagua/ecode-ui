## icon 图标
图片来自个人在iconfont上搜索的一些图标,采用的是svg的方式。

  <div class="icon-list">
    <e-row>
      <e-col :span="3" v-for="name in $icons" :key="name">
          <e-icon :name="name" /> 
          <div ><span> {{name}}</span></div>
      </e-col>
    </e-row>
  
    
  </div>