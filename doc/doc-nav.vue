<template>
  <div class="doc-nav">
    <div class="empty"></div>
    <ul class="nav-list">
      <li class="nav-list-item" :class="{'active':$route.name=== l.name}" v-for="(l,index) in list" :key="l.name">
        <a @click="go(l.name)" >
          <span>{{l.title}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "入门",
          name:'guide'
        },{
            title:'栅格',
            name:'grid'
        },{
            title:'图标',
            name:'icon'
        },
        {
            title:'按钮',
            name:'button'
        },{
          title: "布局",
          name:'layout'
        },{
          title:'选项卡',
          name:'tab'
        }
        ,{
          title: "吐司",
          name:'toast'
        }  ,{
          title: "表格",
          name:'table'
        }
      ]
    };
  },
  methods:{
      go(name){
          this.$router.push({name:name})
          this.$emit('on-click-menu',name)
      }
  },
  watch:{
      $route:{
          handler(newVal){
         
          }
      }
  }
};
</script>

<style lang="scss">
.doc-nav.leftMenu {
  position: fixed;
  top: 68px;
  bottom: 0;
  width: 200px;
  padding: 10px;
  left: 0;
  overflow-y: auto;
  .nav-list {
    list-style: none;
  }
  .nav-list-item.active > a{
    color: #343caa;
  }
  .nav-list-item > a {
    line-height: 50px;
    height: 50px;
    color: #1f2f3d;
    cursor: pointer;
    display: block;
    &:hover {
      color: #343caa;
    }

  }
}
</style>