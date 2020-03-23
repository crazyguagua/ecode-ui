## 快速使用

本节将介绍如何在项目中使用 EcodeUI

### 在vue-cli中引入EcodeUI

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import ECodeUI from '@/index'
import App from './App.vue';

Vue.use(ECodeUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 EcodeUI 的引入。