<template>
    <div class="ecode-select">
        <e-popover :beforeShow="beforeShow" @show="onShow" @hide="onHide" popoverClass="ecode-select" placement="bottom-end" ref="popover" >
           
            <template v-if="!multiple">
                  <e-input :placeholder="placeholder" slot="reference"  :readonly="cReadOnly"
                        :class="{'popper-visible':showPopover}" ref="input"
                        @keydown.native.down.stop.prevent="navigateOption('next')"
                        @keydown.native.up.stop.prevent="navigateOption('back')"
                        @keydown.native.enter.stop.prevent="navigateChange"
                        @keydown.native.tab.stop.prevent="$refs.popover.hidePopper()"
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
import { getScrollBarWith } from "@/util/scrollbar"; 
const scrollbarWidth = getScrollBarWith()
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
        this.selectedIndex = -1
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
            this.selectedIndex = hoverIndex
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
            //恢复 hoverIndex
            this.hoverIndex = this.selectedIndex
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
            if(direction === 'next'){  //向下
                if(this.hoverIndex === this.options.length-1){
                    this.hoverIndex=0
                }else{
                    this.hoverIndex ++
                }
            }else{
                //向上
                if(this.hoverIndex==0){
                   this.hoverIndex = this.options.length-1
                }else{
                    this.hoverIndex --
                }
            }
            log(this.options.length)
            //滚动到hoverIndex所在的option
            let options = this.$refs.scrollbar.$refs.wrapper.querySelectorAll('.ecode-scroll-content > .ecode-option')
            this.scrollToOption(options[this.hoverIndex])
        },
        //键盘回车事件确定选择
        navigateChange(){
            let selected = this.options[this.hoverIndex]
            this.onOptionSelect(selected)
        },
        onOptionDestroy(option){
            //option销毁前，从options数组中移除
            let index = this.options.indexOf(option)
            this.options.splice(index,1)
        },
        //滚动到选中的option
        scrollToOption(targetEl){
            let container = this.$refs.scrollbar.$refs.wrapper //外层盒子，高度固定
            let scrollContent =this.$refs.scrollbar.$refs.contentWrapper //滚动内容的盒子
            let scrollContentRect = scrollContent.getBoundingClientRect()
            let containerRect = container.getBoundingClientRect()
            let target = targetEl||this.selected.$el
            let targetRect = target.getBoundingClientRect()
          
            //需要加上滚动条的宽度，最大距离为滚动到底部（滚动盒子和父盒子的高度差）
            //如果target在容器可视区域内，不需要滚动
            let scrollTop
            if(targetRect.top-scrollContentRect.top<containerRect.height){
                scrollTop = 0
            }
              //保持滚动到的位置正好可以让元素在容器最下面
            scrollTop = targetRect.bottom -scrollContentRect.top - containerRect.height  + scrollbarWidth
            scrollTop = Math.min(scrollTop,scrollContentRect.height-containerRect.height+scrollbarWidth)

            container.scrollTop = scrollTop 
            // } 
            //滚动条是在鼠标移入之后才显示的，这时候获取不到滚动条div的高度，没有成功的更新滚动条的位置。

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
                    this.scrollToOption()
                }
            }
        }
    }
}
</script>

<style>

</style>