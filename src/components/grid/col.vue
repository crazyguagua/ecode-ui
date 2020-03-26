<template>
  <div
    class="ecode-col"
    :style="{'padding':`0 ${padding}px`}"
    :class="classList"
  >
    <slot></slot>
  </div>
</template>

<script>
const colprefix = 'ecode-col'
const Validator = value => {
  if(typeof value == 'number'){
    return true
  }
  // {span:1,offset:1}
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach(item => {
      if(!['span','offset'].includes(item)){
         return false
      }
  });
  return valid
};
export default {
  name: "ecodeCol",
  props: {
    span: {
      type: [Number, String],
      default: 1 //不写就默认24格
    },
    offset: {
      type: [Number, String]
    },
    phone: {
      type: [Number,Object],
      validator: Validator
    },
    pad: {
      type: [Number,Object],
      validator: Validator
    },
    pc: {
      type:[Number,Object],
      validator: Validator
    },
    narrowPc: {
      type: [Number,Object],
      validator: Validator
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    padding() {
      return this.gutter ? this.gutter * 0.5 : 0;
    },
    classList(){
      let clsArr = []
      let a = ['phone','pad','pc','narrow-pc']
      a.forEach(item=>{
          let val = this[item]
          if(typeof val ==='number'){
            clsArr.push(`${colprefix}-${item}-${val}`)
          }else if(typeof val === 'object'){
             let {offset,span=1} = val
             if(offset){
               clsArr.push(`${colprefix}-${item}-offset-${offset}`)
             }
              clsArr.push(`${colprefix}-${item}-${span}`)
          }
      })
      let array = [
        {[`${colprefix}-${this.span}`]:true,[`${colprefix}-offset-${this.offset}`]:this.offset!=undefined},

      ].concat(clsArr)
      return array
    }
  }
};
</script>

<style lang="scss">
.ecode-col {
  flex-shrink: 0; //flex-shrink:0 表示不换行也不收缩， 不妥协自己的宽度 ，不和别人挤，不缩自己的宽度，即使宽度之和超出也不换行;
}
$totalCols: 24;
$prefix: ecode-col;
@for $i from 0 through $totalCols {
  .#{$prefix}-#{$i} {
    width: ($i/$totalCols) * 100%;
  }
  .#{$prefix}-offset-#{$i} {
    margin-left: ($i/$totalCols) * 100%;
  }
}

@mixin breakPoint($name,$w,$px){
    @media only screen and ($w: $px) {
        @for $i from 0 through $totalCols {
            .#{$prefix}-#{$name}-#{$i} {
                width: ($i/$totalCols) * 100%;
            }
            .#{$prefix}-#{$name}-offset-#{$i} {
                margin-left: ($i/$totalCols) * 100%;
            }
        }
    }
}
@include breakPoint(phone,max-width,767px);
@include breakPoint(pad,min-width,768px);
@include breakPoint(narrow-pc,min-width,992px);
@include breakPoint(pc,min-width,1200px);

</style>