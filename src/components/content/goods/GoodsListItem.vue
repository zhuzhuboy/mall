<template>
  <div class="goods-list-item" @click="handleGoodsClick">
    <img :src="getImage" @load="loaded" alt />

    <div class="info">
      <p>{{ d.title }}</p>

      <span class="price">{{ d.price }}</span>
      <span class="collection">{{ d.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    d: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed:{
    getImage(){
      return this.d.image || this.d.img || this.d.show && this.d.show.img

    }
  },

  methods: {
    loaded() {
      this.$bus.$emit("imgLoaded");
    },
    handleGoodsClick() {
      this.$router.push("/detail/" + this.d.iid);
    }
  }
};
</script>

<style lang="scss">
.goods-list-item {
  margin-top: 10px;
  padding-bottom: 55px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px;

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 4px 0;
    }
    .price {
      margin-right: 20px;
    }
  }
}
</style>
