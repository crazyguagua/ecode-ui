import EButton from '@/components/button/button'
import EIcon from '@/components/icon/icon'
import EButtonGroup from '@/components/button/buttonGroup'
import EInput from '@/components/input/input'
import ERow from '@/components/grid/row'
import ECol from '@/components/grid/col'
import ELayout from '@/components/layout/e-layout'
import EHeader from '@/components/layout/e-header'
import EContent from '@/components/layout/e-content'
import EFooter from '@/components/layout/e-footer'
import ESider from '@/components/layout/e-sider'
import Toast from '@/components/toast'
import ETabs from '@/components/tabs/e-tabs'
import ETab from '@/components/tabs/e-tab'
import './style/index.scss'
import './style/fonts/iconfont.js'
import ClipBoardDirective from '@/directive/clipboard'
import ClickOutSideDirective from '@/directive/clickoutside'

const install = (Vue)=>{
    Vue.component('EButton',EButton)
    Vue.component('EIcon',EIcon)
    Vue.component('EButtonGroup',EButtonGroup)
    Vue.component('EInput',EInput)
    Vue.component('ERow',ERow)
    Vue.component('ECol',ECol)
    Vue.component('ELayout',ELayout)
    Vue.component('EHeader',EHeader)
    Vue.component('EContent',EContent)
    Vue.component('EFooter',EFooter)
    Vue.component('ESider',ESider)
    Vue.component('ETabs',ETabs)
    Vue.component('ETab',ETab)
    Vue.prototype.eToast = Toast
    Vue.use(ClipBoardDirective)
    Vue.directive('clickoutside',ClickOutSideDirective)
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    EButton,EIcon,EButtonGroup,install,EInput,Toast
}