let scrollBarWidth;

/**
 * 获取滚动的宽度  父容器overflow:scroll 子容器宽度100%  offetWidth之差就是滚动条的宽度
 */
export function getScrollBarWith(){
    
    if(scrollBarWidth!=undefined){
        return scrollBarWidth
    }
    let div1 = document.createElement('div')
    div1.style.width='100px'
    div1.style.overflow='scroll'
    div1.style.visibility="hidden" //隐藏
    div1.style.position='absolute'
    div1.style.left="-9999"
    document.body.appendChild(div1)

    let div2 = document.createElement('div')
    div2.style.width='100%'
   
    div1.appendChild(div2)

    let noScrollDivWidth = div1.offsetWidth
    let scrollDivWidth = div2.offsetWidth
    div1.parentNode.removeChild(div1)
    scrollBarWidth =   noScrollDivWidth - scrollDivWidth
}