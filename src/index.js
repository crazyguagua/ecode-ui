import EButton from '@/components/button/button'
import EIcon from '@/components/icon/icon'
import EButtonGroup from '@/components/button/buttonGroup'
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
import ETable from '@/components/table/table'
import ESpin from '@/components/spin'
import EBackToTop from '@/components/backToTop'
import EInput from '@/components/form/input/input'
import ECheckbox from '@/components/form/checkbox/checkbox'
import ECheckboxGroup from '@/components/form/checkbox/checkboxGroup'
import ERadio from '@/components/form/radio/radio'
import ERadioGroup from '@/components/form/radio/radioGroup'
import ESelect from '@/components/form/select/select'
import EOption from '@/components/form/select/option'
import ETooltip from '@/components/tooltip/tooltip'
import EPopover from '@/components/popover'
import EScrollbar from '@/components/scrollbar'

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
    Vue.component('ETable',ETable)
    Vue.component('EBackToTop',EBackToTop)
    Vue.component('ERadio',ERadio)
    Vue.component('ERadioGroup',ERadioGroup)
    // Vue.component('ERadioButton',ERadioButton)
    Vue.component('ECheckbox',ECheckbox)
    Vue.component('ECheckboxGroup',ECheckboxGroup)
    Vue.component('ETooltip',ETooltip)
    Vue.component('EPopover',EPopover)
    Vue.component('EScrollbar',EScrollbar)
    Vue.component('ESelect',ESelect)
    Vue.component('EOption',EOption)
    Vue.use(ESpin)
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