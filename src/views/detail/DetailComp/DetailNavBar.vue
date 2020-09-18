<template>
  <NavBar>
    <div slot="left" class="backWrapper" @click="handleBack">
      <img src="~assets/img/common/back.svg" alt />
    </div>
    <div slot="center" class="detail-list">
      <div
        v-for="(name,index) in detailList"
        :key="name"
        @click="changeIndex(index)"
        :class="{
          active:index===currentIndex
        }"
        class="topbar-item"
      >{{ name }}</div>
    </div>
  </NavBar>
</template>
<script>
import NavBar from "components/common/navbar/Navbar.vue";
export default {
  components: {
    NavBar
  },

  data() {
    return {
      detailList: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    changeIndex(index) {

      this.currentIndex = index;
      this.$emit('turnTurnPosition',index)

    },
    handleBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss">
.backWrapper img {
  width: 20px;
  padding-top: 12px;
}
.detail-list {
  display: flex;
  .topbar-item {
    flex: 1;
  }
  .detail-list .active {
    color: $color-high-text;
  }
}
</style>
