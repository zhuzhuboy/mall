<template>
  <div class="shop-car">
    <NavBar>
      <template slot="center">
        <div>购物车({{ getGoodsLength }})</div>
      </template>
    </NavBar>
    <Scroll class="car-scroll">
        <ShopCarList>
          <ShopCarItem v-for="item in getAllGoods" :key="item.iid+only()" :goods="item">

          </ShopCarItem>
        </ShopCarList>
    </Scroll>
    <ShopCarButton />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "components/common/navbar/Navbar.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import ShopCarList from "./ChildComp/carList";
import ShopCarItem from "./ChildComp/carItem";
import ShopCarButton from "./ChildComp/BottomBar";
export default {
  components: {
    NavBar,
    Scroll,
    ShopCarList,
    ShopCarItem,
    ShopCarButton
  },
  computed: {
    ...mapGetters(["getGoodsLength","getAllGoods"])
  },
  methods:{
    only(){
      return Math.random().toFixed(4)
    }
  }
};
</script>


<style lang="scss" scoped>
.nav-bar {
  background-color: $color-tint;
  font-weight: 700;
  color: #fff;
}
.car-scroll{
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 45px;
  bottom: 50px;
}
</style>

