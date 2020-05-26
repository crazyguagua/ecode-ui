<template>


    <e-scrollbar class="doc-nav leftMenu">
     <div class="wrapper" style="padding-right:10px;">
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
    </e-scrollbar>


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
  width: 250px;
  left: 0;
  overflow: hidden;
  box-shadow: 0px 1px 2px #cfccd4;
  padding: 0px 0px;

  .nav-list {
    list-style: none;
  }
  .nav-list-item{
      padding: 0 20px;
  }
  .nav-list-item.active > a{
    color: #656bc1;
  }
  .nav-list-item.active{
    background: #e9ecf9;
    border-right: 3px solid #9aa9ea;
    transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .nav-list-item > a {
    line-height: 50px;
    height: 50px;
    color: #1f2f3d;
    cursor: pointer;
    display: block;
    &:hover {
      color: #7a82ec;
    }

  }
  
}
.subMenu{
    
    .subMenuTitle{
      color: #9E9E9E;
      font-size: 16px;
      border-bottom: 1px solid #f1eaea;
      padding: 10px 0px 10px 10px;
      margin: 10px;
    }
    > .nav-list > .nav-list-item > a{
       padding-left:15px;
    }
  }
</style>