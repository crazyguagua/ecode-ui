import DefItemRender from './itemRender'
export default {
    props:{
        data:{type:Array},
        size:{
            type:Number,
        },
        variable:{
            type:Boolean,default:false
        },//每一项高度是否固定
        paddCount:{type:Number},//前后预留几个
        itemRender:{
            required:true
        },
        direction:{
            type:String,default:'vertical'
        },
        throttle:{
            type:Number,default:17  //单位毫秒
        }
    },
}