<template>
  <div class="doc-nav">
    <div class="empty"></div>
    <ul class="nav-list">
      <template  v-for="(l,index) in list" >
        <li class="nav-list-item" :class="{'active':$route.name=== l.name}"  v-if="!l.children">
          <a @click="go(l.name)">
            <span>{{l.title}}</span>
          </a>
        </li>
        <div class="subMenu" v-else>
          <div class="subMenuTitle">
            {{l.title}}
          </div>
          <ul class="nav-list">
            <li class="nav-list-item" :class="{'active':$route.name=== l.name}" v-for="(l,index) in l.children" :key="l.name">
              <a @click="go(l.name)">
                <span>{{l.title}}</span>
              </a>
            </li>
          </ul>
        </div>
      </template>
    </ul>
  </div>
</template>

<script>
import menuList from './menuList.js'
export default {
  data() {
    return {
      list: menuList
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
.subMenu{
    
    .subMenuTitle{
      color: #9E9E9E;
      font-size: 14px;
    }
    > .nav-list > .nav-list-item > a{
       padding-left:5px;
    }
  }
</style>