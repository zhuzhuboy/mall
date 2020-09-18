<template>
  <div class="detail">

    <DetailNavBar
      class="nav"
      @turnTurnPosition="turnPosition"
      :nav-index="currentNavIndex"
      ref="navBar"
    />

    <Scroll
      class="detail-scroll"
      ref="scroll"
      :key="'sc'"
      :pull-up-load="true"
      :probe-type="3"
      @scroll="scroll"
    >
      <DetailSwiper :banner="banner" />
      <DetailBaseInfo :goods="goodsDetail"></DetailBaseInfo>
      <DetailShopInfo :shop="shopsDetail" />
      <DetailGoodsInfo :detailInfo="detailInfo" @imgLoaded="imgLoaded" ref="goods" />
      <DetailParamInfo :paramInfo="itemParams" ref="params" />
      <DetailComment :commentInfo="commentList" ref="comment" />
      <DetailRecommend :recommendList="recommendList" ref="recommend" />
    </Scroll>
    <Back-top @click.native="handleBackTop" v-show="isShowBackTop" class="back-top" />
    <DetailButtonBar @addToCart="handleAddToCart" />

  </div>
</template>

<script>
import DetailNavBar from "./DetailComp/DetailNavBar";
import DetailSwiper from "./DetailComp/DetailSwiper.vue";
import DetailBaseInfo from "./DetailComp/DetailBaseInfo.vue";
import DetailShopInfo from "./DetailComp/DetailShopInfo.vue";
import DetailGoodsInfo from "./DetailComp/DetailGoodsInfo.vue";
import DetailComment from "./DetailComp/DetailComment.vue";
import DetailRecommend from "./DetailComp/DetailRecommend.vue";
import DetailParamInfo from "./DetailComp/DetailParamInfo.vue";
import DetailButtonBar from "./DetailComp/DetailButtonBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";
import mixinBackTop from "common/mixinBackTop.js";

// API
import {
  getDetailData,
  Goods,
  Shop,
  Params,
  getRecommend
} from "network/detailAPI.js";
import { debounce } from "common/utils.js";


export default {
  mixins: [mixinBackTop],
  name: "detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailRecommend,
    DetailComment,
    DetailButtonBar,
    BackTop
  },
  data() {
    return {
      iid: null,
      banner: null,
      goodsDetail: {}, //该属性更新为异步，所以初始化为对象,
      shopsDetail: {},
      detailInfo: {},
      itemParams: {},
      recommendList: [],
      commentList: {},
      navMapPosition: [],
      imgDeFunc: null,
      currentNavIndex: 0,
      firstLoad: false,
      timer: null
    };
  },
  created() {
    // 得到动态路由信息

    this.iid = this.$route.params.id;
    // 获取数据，更新data内数据
    this.getDetailData();
    // 获取数据，更新data内recommendList数据
    this.getRecommend();
  },
  watch: {
    navMapPosition() {

      this.currentNavIndex &&
        this.$refs.scroll.scrollTo(
          0,
          -this.navMapPosition[this.currentNavIndex],
          200
        );
    }
  },
  updated() {

    this.$refs.navBar.currentIndex = this.currentNavIndex;
  },
  methods:{
    imgLoaded() {
      this.imgDeFunc();

      this.$refs.scroll.bscroll.refresh();
    },
    turnPosition(index) {

      this.currentNavIndex = index;
      this.$refs.scroll.scrollTo(0, -this.navMapPosition[index], 0);
    },

    scroll({ x, y }) {
      const curTime = Date.now();
      y = Math.abs(y)
      if (!this.timer || curTime - this.timer >= 500) {
        this.timer = curTime;
        let index = this.getIndex(this.navMapPosition, y);

        if (this.currentNavIndex != index) {

          this.currentNavIndex = index;
        }

        if (y > 1000) {
          this.isShowBackTop = true;

        } else {
          this.isShowBackTop = false;
        }
      }

      // const throttle = function(func, wait) {
      //   let lastTime;
      //   return function() {
      //     const curTime = Date.now();
      //     if (!lastTime || curTime - lastTime >= wait) {
      //       lastTime = curTime;
      //       return func();
      //     }
      //   };
      // };
    },

    getIndex(arr, value) {
      let index;
      index = arr.findIndex(item => {
        return item >= value;
      });
      index == -1 ? (index = arr.length - 1) : "";
      return index;
    },
    handleAddToCart(){

        // 1.创建对象
        const shopCar = {}
        // 2.对象信息
        shopCar.iid = this.iid;
        shopCar.imgURL = this.banner[0]
        shopCar.title = this.goodsDetail.title
        shopCar.desc = this.goodsDetail.desc;
        shopCar.newPrice = this.goodsDetail.realPrice;
        // 3.添加到Store中
        let pro = this.$store.dispatch('AddShopCar', shopCar) .then(res=>{
          console.log(res)
           this.$toastShow(res,1000)
        })

    },
    // 网络请求
    getDetailData() {

      getDetailData(this.iid).then(res => {
        let data = res.result;


        // 初始化data数据
        this.banner = data.itemInfo.topImages;
        this.goodsDetail = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        this.shopsDetail = new Shop(data.shopInfo);
        this.detailInfo = data.detailInfo;
        this.itemParams = new Params(data.itemParams);
        this.commentList = data.rate.list ? data.rate.list[0] : {};
        this.$nextTick(() => {});

        this.imgDeFunc = debounce(() => {
          this.navMapPosition = [];
          let goodsOffsetTop = this.$refs.goods.$el.offsetTop;
          let paramsOffsetTop = this.$refs.params.$el.offsetTop;
          let commentOffsetTop = this.$refs.comment.$el.offsetTop;
          let recommedOffsetTop = this.$refs.recommend.$el.offsetTop;

          this.navMapPosition.push(
            goodsOffsetTop,
            paramsOffsetTop,
            commentOffsetTop,
            recommedOffsetTop
          );
        }, 200);
      });
    },
    getRecommend() {
      getRecommend().then(res => {
        this.recommendList = res.data.list;
      });
    }
  }
};
</script>
<style lang="scss">
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-scroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 70px;
  left: 0;
  right: 0;
  z-index: 10;
}
.nav {
  position: relative;
  z-index: 20;
  background: #fff;
}
.back-top{
  z-index: 11;
  position: fixed;
  bottom: 80px;
  right: 20px;
}
</style>
