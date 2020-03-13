import EButton from './button'
import EIcon from './icon'
import EButtonGroup from './buttonGroup'
import './style/index.scss'
import './style/fonts/iconfont.js'

const install = (Vue)=>{
    Vue.components('EButton',EButton)
    Vue.components('EIcon',EIcon)
    Vue.components('EButtonGroup',EButtonGroup)
}
export {
    EButton,EIcon,EButtonGroup,install
}