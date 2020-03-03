module.exports=function(config){
    config.set({
        basePath:'',
        browsers: ['Chrome'],
        frameworks: ['mocha', 'sinon-chai'],
        files: ['dist/**/*.js','dist/**/*.css'],
        singleRun:false,
        logLevel:config.LOG_INFO,
        concurrentcy:Infinity
    })
}