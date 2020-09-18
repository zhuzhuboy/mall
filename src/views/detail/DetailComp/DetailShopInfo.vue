<template>
  <!-- <div>{{shop}}</div> -->
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt />
      <span>{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item middle-left">
        <div class="sells-info">
          <p class="sells-count">{{shop.sells | showPrice}}</p>
          <p class="sells-text">总销量</p>
        </div>
        <div class="goods-info">
          <p class="goods-count">{{shop.goodsCount | showPrice}}</p>
          <p class="goods-text">商品数量</p>
        </div>
      </div>
      <div class="shop-middle-item middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}">
              <span>{{item.isBetter ? '高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {

  filters:{
    showPrice(price){

        if(price<10000){return price}
        return (price/10000).toFixed(1)+"万"
      }
  },
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },

};
</script>

<style lang="scss">
.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.shop-top {
  display: flex;
  align-items: center;
  line-height: 45px;
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border-radius: 1px solid rgba(0, 0, 0, 0.1);
  }
  span {
    margin-left: 10px;
    vertical-align: center;
  }
}
.shop-middle {
  display: flex;
  .shop-middle-item {
    flex: 1;
  }
  .middle-left {
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    .sells-count,
    .goods-count {
      padding: 16px 0;
      font-size: 18px;
    }
    .sells-text,
    .goods-text {
      font-size: 14px;
    }
  }
  .middle-right {
    font-size: 14px;
    color: #333;
    table {
      text-align: initial;
      width: 120px;
      margin: 0 auto;
      td {
        padding: 5px 0;
      }
      .score {
        color: #5ea732;
      }
      .score-better {
        color: #f13e3a;
      }
      .better span {
        background-color: #5ea732;
        color: #fff;
        text-align: center;
      }
      .better-more span {
        background-color: #f13e3a;
      }
    }
  }
}
.shop-bottom {
  text-align: center;
  margin-top: 10px;
}

.enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>




