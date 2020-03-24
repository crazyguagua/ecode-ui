<template>
  <div class="doc-nav">
    <div class="empty"></div>
    <ul class="nav-list">
      <li class="nav-list-item" v-for="(l,index) in list" :key="l.name">
        <a @click="go(l.name)">
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
        },
        {
          title: "输入框",
          name:'input'
        }
      ]
    };
  },
  methods:{
      go(name){
          this.$router.push({name:name})
      }
  }
};
</script>

<style lang="scss">
.doc-nav {
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