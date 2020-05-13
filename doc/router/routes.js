const defaultPath = '/guide'
import GUIDE from '../guide.md'
import menuList from '../menuList'
const COMP_MAP={
    'input': () =>import(/* webpackChunkName: "input" */ '../pages/input.md'),
    'button': () =>import(/* webpackChunkName: "button" */ '../pages/button.md'),
    'grid': () =>import(/* webpackChunkName: "grid" */ '../pages/grid.md'),
    'layout': () =>import(/* webpackChunkName: "layout" */ '../pages/layout.md'),
    'toast': () =>import(/* webpackChunkName: "toast" */ '../pages/toast.md'),
    'tab': () =>import(/* webpackChunkName: "tab" */ '../pages/tab.md'),
    'icon': () =>import(/* webpackChunkName: "icon" */ '../pages/icon.md'),
    'table': () =>import(/* webpackChunkName: "icon" */ '../pages/table.md')
}
let routes = [
    {
        path: '/',
        redirect: defaultPath
      }, {
        path: '*',
        redirect: defaultPath
      }

]
const flatMenu =(menuList,arr)=>{
   menuList.forEach((item)=>{
      if(item.children){
        flatMenu(item.children,arr)
      }else{
        arr.push({
          path:`/${item.name}`,
          name:item.name,
          component:() =>import('../pages/'+item.name+'.md')
        })
      }
   })
}
let newRoutes
const addRoute=()=>{
   let arr = []
   flatMenu(menuList,arr)
   newRoutes = routes.concat(arr)
}
addRoute()
export default newRoutes
// test