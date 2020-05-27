 
export default{

    methods:{
        //向上层元素发射事件
        dispatch(componentName,eventName,arg){
            let parent = this.findParent(componentName)
            parent.$emit(eventName,arg)
        
        },
        findParent(componentName){
            let parent = this.$parent
            while(parent){
                if(parent.$options.name===componentName){
                    return parent
                }
                parent = parent.$parent;
            }
        }
        
    }
}