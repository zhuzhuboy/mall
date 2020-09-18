<template>
  <TabBar>
    <TabBarItem path='home' fontColor='deeppink'>
        <img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <div slot="item-font">首页</div>
      </TabBarItem>
      <TabBarItem path='category'>
        <img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/category_active.svg" alt="" slot="item-icon-active">
        <div slot="item-font">分类</div>
      </TabBarItem>
      <TabBarItem path='shopCar'>
        <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot="item-icon-active">
        <div slot="item-font">购物车</div>
      </TabBarItem>
      <TabBarItem path='profile'>
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="item-icon-active">
        <div slot="item-font">我的</div>
    </TabBarItem>

  </TabBar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar//TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {};
  }
};
</script>
