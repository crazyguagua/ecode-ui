export const binarySearch =(arr,value,key)=>{
    let start =0
    let end = arr.length-1
    let temp = null  //找到最近的且小于value的index
    let index = -1
    while(start<end-1){
        let halfIndex = start+Math.floor((end-start)/2)
       
        let halfVal = arr[halfIndex]
        if(typeof halfVal == 'object' && key){
            halfVal = halfVal[key] -0
        }
        if(halfVal == value){
            return halfIndex
        }else if(halfVal<value){
            start = halfIndex
            temp = start
        }else{
            end = halfIndex
            temp = start
        }
    }
    return index == -1?temp:index
}

// let arr = [ 30,60,80,90,100,121,312,500,520]
// let index = binarySearch(arr,85)
// console.log(index)

export const ATTRMAP = {
    horizontal:{
        start:'left',
        end:'right',
        size:'width',
        paddingType:'padding-left',
        scroll:'scrollLeft'
    },
    vertical:{
        start:'top',
        end:'bottom',
        size:'height',
        paddingType:'padding-top',
        scroll:'scrollTop'
    }
}