const webpackConfig = require('./build/webpack.test.js');
module.exports=function(config){
    config.set({
        basePath:'',
        browsers: ['ChromeHeadless'],
        frameworks: ['mocha', 'sinon-chai'],
        reporters: ['spec', 'coverage'],
        files: ['./test/index.js'],
        preprocessors: {
          './test/index.js': ['webpack', 'sourcemap']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
          noInfo: true
        },
        singleRun:false,
        logLevel:config.LOG_INFO,
        concurrentcy:Infinity
    })
}