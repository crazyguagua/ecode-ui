const defaultPath = '/guide'
import GUIDE from '../guide.md'
const COMP_MAP={
    'input':import(/* webpackChunkName: "input" */ '../pages/input.md')
}
const routes = [
    {
        path: '/',
        redirect: defaultPath
      }, {
        path: '*',
        redirect: defaultPath
      },{
          path:'/guide',
          component:GUIDE
      }

]

export default routes