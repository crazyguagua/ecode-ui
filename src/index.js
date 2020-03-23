import EButton from '@/components/button/button'
import EIcon from '@/components/icon/icon'
import EButtonGroup from '@/components/button/buttonGroup'
import EInput from '@/components/input/input'
import ERow from '@/components/grid/row'
import ECol from '@/components/grid/col'
import './style/index.scss'
import './style/fonts/iconfont.js'

const install = (Vue)=>{
    Vue.component('EButton',EButton)
    Vue.component('EIcon',EIcon)
    Vue.component('EButtonGroup',EButtonGroup)
    Vue.component('EInput',EInput)
    Vue.component('ERow',ERow)
    Vue.component('ECol',ECol)
    
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    EButton,EIcon,EButtonGroup,install,EInput
}