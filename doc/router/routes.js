const defaultPath = '/guide'
import GUIDE from '../guide.md'
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
      },{
          path:'/guide',
          name:'guide',
          component:GUIDE
      }

]
const addRoute=()=>{
   Object.keys(COMP_MAP).forEach(item=>{
     routes.push({
       path:`/${item}`,
       name:item,
       component:COMP_MAP[item]
     })
   })
}
addRoute()
export default routes
// test