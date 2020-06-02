<template>
    <div class="ecode-select-wrapper">
        <e-popover :beforeShow="beforeShow" @show="onShow" @hide="onHide" popoverClass="ecode-select" placement="bottom-end" ref="popover" >
            <e-input  :readonly="cReadOnly" :class="{'popper-visible':showPopover}" ref="input" slot="reference" v-bind="$attrs" v-model="cLabel" >
             <template slot="prefix" v-if="$slots.prefix">
                 <slot   name="prefix" />
             </template> 
             <!-- 相当于透传 -->
             <template slot="suffixIcon" >
                 <slot name="suffix" >
                    <e-icon v-if="showClear" name="ecode-Fail" @mousedown.prevent @click.native.stop="onClear" />
                    <e-icon v-else-if="!showClear && !showPopover"  name="ecode-arrowdropdown-copy"  />
                    <e-icon v-else  name="ecode-arrowdropdown-copy-copy"  />
                 </slot>
             </template>
            </e-input>
            <div class="options" slot="content" >
                <template v-if="!$slots.default">
                 <div class="noData"><span> {{noDataText}} </span></div>
                </template>
                <e-scrollbar class="options"  v-if="$slots.default.length<=maxCount">
                    <slot  />
                </e-scrollbar>
            </div>
        </e-popover>
    </div>
</template>

<script>
import EInput from '@/components/form/input/input'
import EPopover from '@/components/popover'
import EScrollbar from '@/components/scrollbar'
import EIcon from '@/components/icon/icon'
export default {
    name:'ESelect',
    props:{
        value:{type:[String,Number]},
        noDataText:{
            type:String,default:'暂无数据'
        },
        filterable:{type:Boolean,default:false},
        clearable:{type:Boolean,default:false},
        readonly:{type:Boolean,default:false},
        multiple:{type:Boolean,default:false},
        maxCount:{type:Number,default:100} //准备超过100 采用虚拟滚动
    },
    components:{
        EInput,EScrollbar,EIcon
    },
    computed:{
        showClear(){
            return this.clearable && this.cValue && this.cLabel
        },
        suffixIcon(){
            return this.showPopover?'ecode-arrowdropdown-copy-copy':'ecode-arrowdropdown-copy'
        },
        cReadOnly(){
            //是否显示清空的按钮时有用到
            return this.readonly || !this.filterable
        }
    },
    provide(){
       return {
           'select':this  //供option 组件调用 ，由于 option的父组件查找到的是scrollbar 在往上市popover，找不到select
       }
    },
    data(){
        return {
            cValue:'',
            cLabel:'',
            showPopover:false //是否打开popper
        }
    },
    created(){
        this.options = []
        this.$on('option-select',this.onOptionSelect) //监听 option的选中事件
    },
    methods:{
        onOptionSelect(option){
            this.cLabel = option.label
            this.cValue = option.value
            if(!this.multiple){
                //关闭
                this.$refs.popover.hidePopper()
            }
            this.$emit('input',this.cValue)
        },
        onClear(){
            this.cValue = ''
            this.cLabel = ''
            this.$emit('input',this.cValue)
        },
        //设置选中的label
        setSelect(){
            let children = this.options
            let selected = children.find(item=>{
                return item.value === this.cValue
            })
            if(selected){
                this.cLabel = selected.label
            }
        },
        beforeShow(){
            return !this.disabled && !this.readonly
        },
        onShow(){
            this.showPopover = true
            this.$emit('show')
        },
        onHide(){
            this.showPopover = false
            this.$emit('hide')
        }
    },
    mounted(){
        this.cValue = this.value
        this.setSelect()
    },
    watch:{
        value:{
            handler(newVal,oldVal){
                if(newVal && newVal!=oldVal){
                    this.cValue = newVal
                    this.setSelect()
                }
            }
        }
    }
}
</script>

<style>

</style>