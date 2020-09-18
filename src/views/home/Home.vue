<template>
  <div class="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <TabControl
      :titles="titles"
      class="tab-control"
      @handleTabClick="handleTabClick"
      ref="tabControlSticky"
      v-show="showTabControl"
    />
    <Scroll
      class="scroll-wrap"
      :pullUpLoad="true"
      :probeType="3"
      ref="scroll"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <HomeSwiper :banner="banner" @loaded="swiperImgLoaded" />
      <RecommendView :recommend="recommend" @loaded="recommendImgLoaded" />
      <FeatureView />
      <TabControl
        :titles="titles"
        class="tab-control"
        @handleTabClick="handleTabClick"
        ref="tabControl"
      />
      <GoodsList :goodsList="goodsChange" />
    </Scroll>
    <Back-top @click.native="handleBackTop" v-show="isShowBackTop" />

  </div>
</template>

<script>
// 子组件
import HomeSwiper from "./ChildComp/HomeSwiper.vue";
import RecommendView from "./ChildComp/RecommendView.vue";
import FeatureView from "./ChildComp/FeatureView";
// 网络请求
import { getHomeData, getGoodsData } from "network/homeAPI.js";
// 公共组件
import NavBar from "components/common/navbar/Navbar.vue";
import TabControl from "components/content/TabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";

import {debounce} from "common/utils.js";

import mixinBackTop from "common/mixinBackTop.js";
export default {
  mixins: [mixinBackTop],
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      titles: ["新款", "流行", "热卖"],
      banner: [],
      recommend: [],
      currentType: "new",
      curIndex: 0,
      goods: {
        new: {
          page: 0,
          list: [],
          position: {
            x: 0,
            y: 0
          }
        },
        pop: {
          page: 0,
          list: [],
          position: {
            x: 0,
            y: 0
          }
        },
        sell: {
          page: 0,
          list: [],
          position: {
            x: 0,
            y: 0
          }
        }
      },
      swiperLoaded: false,
      recommendLoaded: false,
      tabControlOffsetTop: 0,
      showTabControl: false,
      offEvent:false
    };
  },

  activated() {
    let posY;
    if (!this.goods[this.currentType].position.y) {
      posY = 0;
    } else {
      posY = this.goods[this.currentType].position.y;
    }
    this.handleTabClick(this.curIndex, posY);
  },
  deactivated() {
    this.$refs.scroll.bscroll.stop();

    !this.offEvent && this.$bus.$off('imgLoaded',this.handleFunc)
    this.offEvent = true
  },
  computed: {
    goodsChange() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    // let func = debounce((a, b) => {console.log(a,b)}, 100);
    // this.$bus.$on("imgLoaded", () => {

    //   if(!(this.$route.path.includes('home')))return
    //   console.log(8888888888)
    //   func("I AM CUIZHUO", "MY NAME IS GUOBEI");
    // });
    window.bus = this.$bus


    // 请求首页data
    this.requestHomeData();
    //请求商品data
    this.requestGoodsData("pop");
    this.requestGoodsData("sell");
    this.requestGoodsData("new");
  },

  methods: {
    handleTabClick(index, posY) {
      // 之前的值
      this.curIndex = index;

      switch (index) {
        case 0:
          this.currentType = "new";
          break;
        case 1:
          this.currentType = "pop";
          break;
        case 2:
          this.currentType = "sell";
          break;
        default:
          break;
      }

      this.$refs.tabControlSticky.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
      // 新值
      let newvalueY = this.goods[this.currentType].position.y;

      let positionY = newvalueY ? newvalueY : -this.tabControlOffsetTop;
      this.$refs.scroll.scrollTo(0, posY == 0 ? posY : positionY, 0);
    },
    contentScroll(position) {
      let { x, y } = position;
      this.goods[this.currentType].position.y = y;

      y = Math.abs(y);
      if (y > 1000) {
        this.isShowBackTop = true;
      } else {
        this.isShowBackTop = false;
      }

      if (this.tabControlOffsetTop && y > this.tabControlOffsetTop) {
        this.showTabControl = true;
      } else {
        this.showTabControl = false;
      }
      this.$refs.scroll.bscroll.refresh();
    },
    loadMore() {
      this.requestGoodsData(this.currentType);

      this.$refs.scroll.finishPullUp();
    },
    swiperImgLoaded() {
      this.swiperLoaded = true;
      this.getTabControlOffsetTop();
    },
    recommendImgLoaded() {
      this.recommendLoaded = true;
      this.getTabControlOffsetTop();
    },
    getTabControlOffsetTop() {
      if (this.recommendLoaded == true && this.swiperLoaded == true) {
        this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop;
      }
    },
    // 网络请求
    requestGoodsData(type) {
      let page = this.goods[type].page + 1;
      getGoodsData({ type, page: page }).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
      });
    },
    requestHomeData() {
      getHomeData().then(res => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    }
  },
  updated() {
    this.$refs.scroll.bscroll.refresh();
  }
};
</script>

<style lang="scss">
.home {
  padding-top: 44px;
  height: 100vh;
}
.home-nav {
  background-color: $color-tint;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: 44px;
}

.tab-control {
  position: sticky;
  top: 44px;
}

.scroll-wrap {
  overflow: hidden;
  position: absolute;

  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
