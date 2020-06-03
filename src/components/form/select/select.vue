<template>
    <div class="ecode-select">
        <e-popover :beforeShow="beforeShow" @after-enter="onShow" @after-leave="onHide" popoverClass="ecode-select" placement="bottom-end" ref="popover" >
           
            <template v-if="!multiple">
                  <e-input :placeholder="placeholder" slot="reference"  :readonly="cReadOnly"
                        :class="{'popper-visible':showPopover}" ref="input"
                        @keydown.native.down.stop.prevent="navigateOption('next')"
                        @keydown.native.up.stop.prevent="navigateOption('back')"
                         v-bind="$attrs" v-model="cLabel" >
                        <template slot="prefix" v-if="$slots.prefix">
                            <slot   name="prefix" />
                        </template> 
                        <!-- 相当于透传 -->
                        <template slot="suffixIcon" >
                            <slot name="suffix" >
                                <e-icon v-if="showClear" name="ecode-Fail" @mousedown.prevent @click.native.stop="onClear" />
                              
                                <e-icon v-else :name="dropDownIconName"  />
                            </slot>
                        </template>
                </e-input>
            </template>
            <div class="select-reference" v-else   slot="reference">
              
                <div class="select-tags" :style="{width:`${inputWidth}px`}" >
                    <e-tag closable @close="handleClose(tag)"  v-for="tag in tags" :key="tag.value" >{{tag.label}}</e-tag>
                    <input v-if="filterable" :style="{width:`${inputWidth}px`}"   class="select-input" :placeholder="cPlaceholder">
                </div>
                <e-icon :name="dropDownIconName"  />
            </div>
            <div class="options" slot="content" >
                <template v-if="!$slots.default">
                 <div class="noData"><span> {{noDataText}} </span></div>
                </template>
                <e-scrollbar ref="scrollbar" class="options"  v-if="$slots.default.length<=maxCount">
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
import ETag from '@/components/tag/tag'
const isArray =(obj)=> Object.prototype.toString.call(obj) === "[object Array]"
export default {
    name:'ESelect',
    props:{
        value:{type:[String,Number,Array]},
        noDataText:{
            type:String,default:'暂无数据'
        },
        filterable:{type:Boolean,default:false},
        clearable:{type:Boolean,default:false},
        readonly:{type:Boolean,default:false},
        multiple:{type:Boolean,default:false},
        placeholder:{type:String,default:'请选择'},
        maxCount:{type:Number,default:100} //准备超过100 采用虚拟滚动
    },
    components:{
        EInput,EScrollbar,EIcon,ETag
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
        },
        dropDownIconName(){
            return this.showPopover?'ecode-arrow-up':'ecode-arrow-down'
        },
        cPlaceholder(){
           return this.cArrayValue?'':this.placeholder
        }
    },
    data(){
        return {
            cValue:'',
            cArrayValue:[],
            cLabel:'',
            tags:[],
            inputWidth:0,//输入框的宽度
            showPopover:false, //是否打开popover
            hoverIndex:-1  //鼠标移入的索引，键盘控制
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
        //设置选中的label,区分multiple
        setSelect(){
            let children = this.options
            let hoverIndex = -1 //设置hover索引
            if(isArray(this.value) && this.multiple){
                 
                 let selectedArray = []
                 
                 children.forEach((item,index)=>{
                      if(this.cArrayValue.includes(item.value)){
                          selectedArray.push(item)
                      }
                      if(hoverIndex==-1){
                          item.hover = true
                          hoverIndex = index //多选设置hoverIndex 为数组第一位
                      }
                 })
                 this.tags = selectedArray
                 this.selected = selectedArray[0]
                 if(selectedArray.length>0){
                     this.hoverIndex
                 }
            }else{
                 let selected = null
                 children.forEach((item,index)=>{
                      if(this.cValue == item.value){
                          selected = item
                          hoverIndex = index
                          item.hover = true
                      }
                 })
                 if(selected){
                    this.cLabel = selected.label
                    this.selected = selected
                 }        
            }
            this.hoverIndex = hoverIndex
        },
        beforeShow(){
            return !this.disabled && !this.readonly
        },
        onShow(){
            this.showPopover = true
            //打开时滚动到当前选中的index处
           this.$nextTick(()=>{
               this.scrollToOption()
           }) 
            this.$emit('show')
        },
        onHide(){
            this.showPopover = false
            this.$emit('hide')
        },
        //多选删除
        handleClose(){

        },
        //设置input的宽度，需要总宽度减去右边按钮的宽度
        setInputWidth(){
            this.inputWidth = this.$el.getBoundingClientRect().width - 30
        },
        //键盘切换选项
        navigateOption(direction){
            log(direction)
            if(direction === 'next'){
                if(this.hoverIndex<this.options.length-1){
                    this.hoverIndex++
                }else{
                    this.hoverIndex = 0
                }
            }else{

            }
        },
        onOptionDestroy(option){
            //option销毁前，从options数组中移除
            let index = this.options.indexOf(option)
            this.options.splice(index,1)
        },
        //滚动到选中的option
        scrollToOption(){
            let container = this.$refs.scrollbar.$refs.wrapper
            let containerRect = container.getBoundingClientRect()
            let target = this.selected
            let targetRect = target.getBoundingClientRect()
            //如果target的位置不需要滚动
            let scrollTop =  targetRect.top-containerRect.top 
            if(scrollTop>0){
                container.scrollTop = scrollTop 
            } 
        }
    },
    mounted(){
        if(this.multiple && isArray(this.value)){
            this.cArrayValue = this.value
        }else{
            this.cValue = this.value
        }
        this.setSelect()
        this.setInputWidth()
    },
    watch:{
        value:{
            deep:true,
            handler(newVal,oldVal){
                if(newVal && newVal!=oldVal){
                    this.cValue = newVal
                    if(this.multiple && isArray(newVal)){
                        this.cArrayValue = newVal
                    }else{
                        this.cValue = newVal
                    }
                    this.setSelect()
                }
            }
        }
    }
}
</script>

<style>

</style>