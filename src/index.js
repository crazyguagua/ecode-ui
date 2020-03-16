import EButton from './button'
import EIcon from './icon'
import EButtonGroup from './buttonGroup'
import EInput from './input/input'
import './style/index.scss'
import './style/fonts/iconfont.js'

const install = (Vue)=>{
    Vue.components('EButton',EButton)
    Vue.components('EIcon',EIcon)
    Vue.components('EButtonGroup',EButtonGroup)
    Vue.components('EInput',EInput)
    
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export {
    EButton,EIcon,EButtonGroup,install,EInput
}