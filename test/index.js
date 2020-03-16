require('babel-regenerator-runtime'); // add regenerator support for async await  
//解决 async出现regeneratorRuntime is not defined 的问题
 // 动态加载所有测试文件
 const testsContext = require.context('./specs', true, /\.spec$/)
 testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../src/components', true);
srcContext.keys().forEach(srcContext);