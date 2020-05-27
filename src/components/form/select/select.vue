<template>
    <div class="ecode-select-wrapper">
        <e-popover popoverClass="ecode-select" placement="bottom-end" >
            <e-input slot="reference" v-bind="$attrs" v-model="cValue" />
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
export default {
    name:'ESelect',
    props:{
        value:{type:[String,Number]},
        noDataText:{
            type:String,default:'暂无数据'
        },
        multiple:{type:Boolean,default:false},
        maxCount:{type:Number,default:100} //准备超过100 采用虚拟滚动
    },
    components:{
        EInput,EScrollbar
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
            cValue:''
        }
    },
    created(){
        this.$on('option-select',this.onOptionSelect) //监听 option的选中事件
    },
    methods:{
        onOptionSelect(value){
            this.cValue = value
            if(!multiple){
                //关闭
            }
        }
    }
}
</script>

<style>

</style>