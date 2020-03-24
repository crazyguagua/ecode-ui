<template>
  <div
    class="ecode-col"
    :style="{'padding':`0 ${padding}px`}"
    :class="{[`ecode-col-${span}`]:true,[`ecode-col-offset-${offset}`]:offset!=undefined}"
  >
    <slot></slot>
  </div>
</template>

<script>
const Validator = value => {
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
      type: Object,
      validator: Validator
    },
    pad: {
      type: Object,
      validator: Validator
    },
    pc: {
      type: Object,
      validator: Validator
    },
    large: {
      type: Object,
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

@mixin breakPoint($name,$breakpoint){
    @media (max-width: $breakpoint) {
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
@include breakPoint(phone,576px);
@include breakPoint(pad,992px);
@include breakPoint(pc,1200px);
@include breakPoint(large,1600px);

</style>