 
export default{

    methods:{
        //向上层元素发射事件
        dispatch(componentName,eventName,arg){
            let parent = this.$parent
            while(parent){
                if(parent.$options.name===componentName){
                    parent.$emit(eventName,arg)
                    break;
                }
                parent = parent.$parent;
            }
        
        }
        
    }
}