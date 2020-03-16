import EButton from '@/components/button/button'
import EIcon from '@/components/icon/icon'
import EButtonGroup from '@/components/button/buttonGroup'
import EInput from '@/components/input/input'
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