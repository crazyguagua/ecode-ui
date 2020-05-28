<template>
    <div class="ecode-select-wrapper">
        <e-popover @show="showPopover = true" @hide="showPopover=false" popoverClass="ecode-select" placement="bottom-end" ref="popover" >
            <e-input :readonly="filterable" slot="reference" v-bind="$attrs" v-model="cLabel" >
                <e-icon v-if="!showPopover" slot="suffixIcon" name="ecode-arrowdropdown-copy"  />
                <e-icon v-else slot="suffixIcon" name="ecode-arrowdropdown-copy-copy"  />
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
        multiple:{type:Boolean,default:false},
        maxCount:{type:Number,default:100} //准备超过100 采用虚拟滚动
    },
    components:{
        EInput,EScrollbar,EIcon
    },
    computed:{
        
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
        }
    },
    watch:{
        value:{
            immediate:true,
            handler(newVal){

            }
        }
    }
}
</script>

<style>

</style>