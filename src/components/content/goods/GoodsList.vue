<template>
  <div class="goods-list">

    <GoodsListItem  v-for="item in goodsList" :key="item.iid+now()" :d="item" class="goods-item" />

  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  components: {
    GoodsListItem
  },
  props:{
    goodsList:{
      type:Array,
      default: function () {
        return []
      }
    }
  },
  data(){
    return {
      time:1
    }
  },
  methods:{
    now(){

      return (Math.random()*100).toFixed(4)
    }
  },


};
</script>

<style lang="scss">
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .goods-item{
      width: 48%;
      height: 300px;
    }
  }
</style>
