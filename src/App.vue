<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <MainTabBar />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar.vue";

export default {
  components: {
    MainTabBar
  },

};
</script>
<style lang='scss'>
@import "assets/css/normalize.css";
@import "assets/css/index.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  background-color: #fff;
}
</style>
