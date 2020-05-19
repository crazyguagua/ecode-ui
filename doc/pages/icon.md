# icon 图标
## 部分图标演示
图片来自个人在iconfont上搜索的一些图标,采用的是svg的方式。

  <div class="icon-list">
    <e-row :gutter="18">
      <e-col :span="3" :phone={span:8} v-for="name in $icons" :key="name">
          <e-icon :name="name" /> 
          <div class="icon-name"><span > {{name}}</span></div>
      </e-col>
    </e-row>
  
    
  </div>