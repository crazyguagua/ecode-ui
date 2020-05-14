<template>
  <div class="ecode-checkbox" >
      <label class="checkbox-label" :class="labelCls"  >
          <input :name="name" @change="handleChange" :value="label" type="checkbox" :disabled="disabled" v-model="cValue" class="checkbox-input" />
          <template v-if="!isButton">
            <span class="checkbox-rect" @click.stop="showWave" ref="checkboxLabel" :class="{'ecode-click-animating':showAnimation}"></span>
            <span class="checkbox-content" @click.stop="showWave" >
                <slot></slot>
                <!-- 如果不传slot 那就默认用label属性 -->
                <template v-if="!$slots.default">
                    {{label}}
                </template>
            </span>
          </template>
          <span v-else class="checkbox-button" @click.stop="showWave" ref="checkboxLabel">
               <slot></slot>
                <!-- 如果不传slot 那就默认用label属性 -->
                <template v-if="!$slots.default">
                    {{label}}
                </template>
          </span>
      </label>
  </div>
</template>

<script>
import emit from '@/util/emit'
// 在vue中，v-model其实是checked语法糖，通过v-model来判断当前checkbox是否被选中， 它绑定一个数组，选中项的值会自动添加到数组中
export default {
    name:'EcodeCheckBox',
    mixins:[emit],
    props:{
        value:{},
        wave:{default:true,type:Boolean},
        disabled:{default:false,type:Boolean},
        label:{},
        name:{},
        indeterminate:{default:false,type:Boolean} //是否半选
    },
    methods:{
        handleChange(e){
            //change事件是在点击完触发的
            let checked = e.target.checked
            this.$emit('change',checked) 
            // console.log(this.cValue)  //这时候还没有更新
            //下一次更新队列在通知
            if(this.isInGroup){
                this.$nextTick(()=>{
                    this.dispatch('CheckboxGroup','change',this._checkboxGroup.value)
                })
            }
          
            
        },
        showWave(e){
           if(!this.disabled) this.showAnimation = true
        },
        annimationEvHandler(){
            this.showAnimation = false
        }
    },
    mounted(){
        if(this.wave){
            this.$refs.checkboxLabel.addEventListener('animationend',this.annimationEvHandler)
        }
    },
    beforeDestroy(){
        this.$refs.checkboxLabel.removeEventListener('animationend',this.annimationEvHandler)
    },
    data(){
        return {
            showAnimation:false
        }
    },
    computed:{
        cValue:{
            //在vue中多选框组 中每个多选框绑定的是一个数组
            get(){
                if(this.isInGroup){
                    return this._checkboxGroup.value
                }else{
                    return this.value
                }
                
            },
            set(v){
                // console.log('cValue:',this.cValue)
                // console.log('v:',v)
                if(this.isInGroup){
                    //通知checkboxGroup v-model 更新 
                    this.dispatch('CheckboxGroup','input',v)
                }else{
                  this.$emit('input',v)
                }
                
            }
        },
        //当前checkbox是否选中
        isChecked(){
           //判断cValue是数组还是bool
           if(Object.prototype.toString.call(this.cValue) === '[object Boolean]'){
               return this.cValue
           }else if(Array.isArray(this.cValue)){
               return this.cValue.includes(this.label)
           }
        },
        //选中样式
        labelCls(){
            return {
                'checked':this.isChecked,
                'disabled':this.disabled,
                'indeterminate':this.indeterminate,
            }
        },
        //是否在e-checkbox-group中
        isInGroup(){
            let parent = this.$parent
            while(parent ){
                if(parent.$options.name === 'CheckboxGroup'){
                    this._checkboxGroup = parent
                    return true
                }else{
                    parent = parent.$parent
                }
            }
            return false
        },
        isButton(){
            return this.$parent.button
        }
    },
    watch:{
        
    }
}
</script>