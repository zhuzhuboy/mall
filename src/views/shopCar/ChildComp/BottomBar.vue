<template>
  <div class="bottom-menu">
    <CheckButton class="select-all" @checkBtnClick="checkBtnClick" v-model="isSelectAll"></CheckButton>
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product">去计算({{$store.getters.getAllGoods.filter(item=>item.checked).length}})</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CheckButton from "./CheckButton";

export default {
  name: "BottomBar",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(["getAllGoods"]),
    totalPrice() {
      let price = 0;
      let chooseGoods = this.getAllGoods.filter(item => item.checked);
      if (chooseGoods.length == 0) {
        return price;
      } else {
        for (const iterator of chooseGoods) {
          price += iterator.count * parseFloat(iterator.newPrice);
        }

        console.log(price);

        return price;
      }
    },
    isSelectAll: function() {
      if (this.getAllGoods.length == 0) {
        return false;
      } else {
        return (
          this.getAllGoods.find(item => item.checked === false) === undefined
        );
      }
    }
  },
  methods: {
    checkBtnClick: function() {
      // // 1.判断是否有未选中的按钮
      let isSelectAll = this.getAllGoods.find(item => !item.checked);

      // 2.有未选中的内容, 则全部选中
      if (isSelectAll) {
        this.$store.commit("checkedAll");
      } else {
        this.$store.commit("uncheckedAll");
      }

      console.log(999);
    }
  }
};
</script>

<style scoped>
.bottom-menu {
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 50px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}

.bottom-menu .select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}

.bottom-menu .total-price {
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}

.bottom-menu .buy-product {
  background-color: orangered;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
}
</style>
