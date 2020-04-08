<template>
     <div class="tab-list">
          <div class="tab-headerWrapper" ref="tabHeaderWrapper">
            <div class="tab-header" :data-tab-name="tab.name" @click.stop="change(tab)" :class="{'active':tab.name === currentName}" v-for="tab in tabs" :key="tab.name">{{tab.label}}</div>
          </div>
          <e-tab-bar :tabs="tabs" :currentName="currentName" ></e-tab-bar>
      </div>
</template>

<script>
import ETabBar from './e-tab-bar'
export default {
  name: "eNav",
  props: {
    tabs: Array,
    currentName:String
  },
  components:{
      ETabBar
  },
  methods:{
     change(tab){
       this.$emit('change',tab)  
     }
  }
};
</script>

<style lang="scss">
$tab-active-color:#3c5ed8;
.tab-list {
  border-bottom: 1px solid #f0f0f0;
  margin: 0 0 16px;
  .tab-header {
    display: inline-block;
    padding: 10px;
    cursor: pointer;
    &.active {
      color: $tab-active-color;
    }
    &:hover {
      color: $tab-active-color;
    }
  }
}
</style>
