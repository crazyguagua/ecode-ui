<template>
    <div class="ecode-select" >
        <e-popover :beforeShow="beforeShow" @show="onShow" @hide="onHide" popoverClass="ecode-select" placement="bottom-end" ref="popover" >
           
           <div slot="reference" class="reference">
                  <e-input :style="{width:`${inputWidth}px`}" @mouseenter.native="hoveredIcon = true" @mouseleave.native="hoveredIcon = false" :placeholder="cPlaceholder"  :readonly="cReadOnly"
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

                <div v-if="multiple" class="select-reference"  ref="selectReference" >
                    <div class="wrapper" >
                        <div class="select-tags"  :style="{width:`${inputWidth -30 }px`}" >
                            <e-tag :hasTransition="false" closable @close="handleClose(tag)"  v-for="tag in tags" :key="tag.value" >{{tag.label}}</e-tag>
                            <input v-if="filterable" :style="{width:`${inputWidth}px`}"   class="select-input" :placeholder="cPlaceholder">
                        </div>
                    </div>
                </div>
           </div>
            <div class="options" slot="content" >
                <template v-if="!$slots.default || $slots.default.length==0">
                 <div class="noData"><span> {{noDataText}} </span></div>
                </template>
                <e-scrollbar ref="scrollbar" class="options"  v-if="$slots.default && $slots.default.length>0 && $slots.default.length<=maxCount">
                    <slot  />
                </e-scrollbar>
                <virtual-list style="height: 360px; overflow-y: auto;" v-if="isVisual"
                    data-key="value"
                    :keeps="20"
                    :estimate-size="42"
                    :data-sources="data"
                    :data-component="itemComponent"
                />
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
import { addResizeListener, removeResizeListener } from "@/util/resize-event";
import VirtualList from 'vue-virtual-scroll-list'
import EOption from './option'
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
        data:Array,
        maxCount:{type:Number,default:100} //准备超过100 采用虚拟滚动
    },
    components:{
        EInput,EScrollbar,EIcon,ETag,EOption
    },
    computed:{
        showClear(){
            return this.clearable  && this.hoveredIcon && (this.cValue || this.cArrayValue)
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
           return (this.cArrayValue||this.value)?'':this.placeholder
        },
        isVisual(){
            
            return this.$slots.default&& this.$slots.default.length>0 && this.$slots.default.length>this.maxCount;
        }
    },
    data(){
        this.selectedIndex = -1
        return {
            cValue:'',
            cArrayValue:[],
            cLabel:'',
            tags:[],
            itemComponent:EOption,
            inputWidth:0,//输入框的宽度
            showPopover:false, //是否打开popover
            hoverIndex:-1,  //鼠标移入的索引，键盘控制
            hoveredIcon:false //控制是否显示清空
        }
    },
    created(){
        // log(this.$slots.default)
        this.options = []
        this.$on('option-select',this.onOptionSelect) //监听 option的选中事件
    },
    methods:{
        //option点击处理
        onOptionSelect(option){
           
            if(!this.multiple){
                this.cLabel = option.label
                this.cValue = option.value
                //关闭
                this.$refs.popover.hidePopper()
                 this.$emit('input',this.cValue)
            }else{
                let index = this.cArrayValue.indexOf(option.value)
                if(index>-1){
                    this.cArrayValue.splice(index,1)
                }else{
                    this.cArrayValue.push(option.value)
                }
                this.setSelect()
                this.$emit('input',this.cArrayValue)
            }
           
        },
        //点击清空
        onClear(){
            this.cValue = ''
            this.cLabel = ''
            this.$emit('input',this.cValue)
        },
        //设置选中项,区分multiple
        setSelect(){
            let children = this.options
            let hoverIndex = -1 //设置hover索引
            if(isArray(this.value) && this.multiple){
                 
                 let selectedArray = []
                 
                 children.forEach((item,index)=>{
                      if(this.cArrayValue.includes(item.value)){
                        selectedArray.push(item)
                        if(hoverIndex==-1){
                            hoverIndex = index //多选设置hoverIndex 为数组第一位
                        }
                      }
                    
                 })
                 this.tags = selectedArray
                 if(selectedArray.length>0){
                     this.hoverIndex = hoverIndex
                      this.selected = selectedArray[0]
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
            if(this.selected){
                //没有选中，不需要滚动
                 this.$nextTick(()=>{
                    this.scrollToOption()
                }) 
            }
          
            this.$emit('show')
            //恢复 hoverIndex
            this.hoverIndex = this.selectedIndex
        },
        onHide(){
            this.showPopover = false
            this.$emit('hide')
        },
        //多选删除
        handleClose(option){

           let index = this.tags.findIndex((item)=>option === item)
           this.tags.splice(index,1)
           this.cArrayValue.splice(index,1)
           this.$emit('input',this.cArrayValue)
        },
        //设置input的宽度
        setInputWidth(){
            this.inputWidth = this.$el.getBoundingClientRect().width 
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
        visualScrollToOption(){

        },
        //滚动到选中的option
        scrollToOption(targetEl){
            //如果是大数据就另外处理
            if(this.isVisual){
                this.visualScrollToOption()
            }
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

        },
        //option created 时通知select
        addOption(option){
            this.options.push(option)
            //设置label
            if(!this.multiple && this.cValue == option.value){
                this.cLabel = option.label
            }else{
                
                this.setSelect()
            }
        },
        //多选的情况下可能会发生tag的容器高度变化，需要更新popper的位置
         onInputHeightResize(){
             this.$refs.input.$el.querySelector('.ecode-input-inner').style.height = this.$refs.selectReference.offsetHeight+'px'
             this.$refs.popover.update()
        },
    },
    beforeDestroy(){
       if(this.$refs.selectReference) removeEventListener(this.$refs.selectReference,this.onInputHeightResize)
    },
    mounted(){
        if(this.multiple && isArray(this.value)){
            this.cArrayValue = this.value
        }else{
            this.cValue = this.value
        }
        this.setSelect()
        this.$nextTick(()=>{
            this.setInputWidth()
        })
        //如果输入框高度发生变化，需要更新popover
        if(this.$refs.selectReference) addResizeListener(this.$refs.selectReference,this.onInputHeightResize)
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