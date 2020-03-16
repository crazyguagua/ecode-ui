const webpackConfig = require('./build/webpack.test.js');
module.exports=function(config){
    config.set({
        basePath:'',
        browsers: ['ChromeHeadless'],
        frameworks: ['mocha', 'sinon-chai'],
        reporters: ['spec', 'coverage'],
        coverageReporter: {
          dir: './test/coverage',
          reporters: [
            { type: 'lcov', subdir: '.' },
            { type: 'text-summary' }
          ]
        },
        files: ['./test/index.js'],
        preprocessors: {
          './test/index.js': ['webpack', 'sourcemap', 'coverage']
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