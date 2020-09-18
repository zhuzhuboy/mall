import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopCar: []
  },
  mutations: {
    addGoods(state, payload) {
      payload.count = 1;
      payload.checked = true;
      state.shopCar.push(payload)
      state.shopCar = [...state.shopCar]
    },
    addGoodsCount(state, index) {
      state.shopCar[index].count++
      state.shopCar = [...state.shopCar]
    },
    changeSelectState(state, id) {
      let goodsIndex = state.shopCar.findIndex(item => {
        console.log(item.iid)
        return item.iid == id
      })
      console.log(goodsIndex)
      state.shopCar[goodsIndex].checked = !state.shopCar[goodsIndex].checked
    },
    checkedAll(state) {
      for (const iterator of state.shopCar) {
        iterator.checked = true
      }
    },
    uncheckedAll(state) {
      for (const iterator of state.shopCar) {
        iterator.checked = false
      }
    }
  },
  actions: {
    AddShopCar({
      state,
      commit
    }, payload) {
      console.log('promise')
      return new Promise((res, rej) => {
        let goods = state.shopCar.find(item => {

          return payload.iid === item.iid
        })
        let index = state.shopCar.indexOf(goods)
        if (goods) {
          // 有商品了，添加商品数量。把下标传递进去
          commit('addGoodsCount', index)
          res('数量增加成功')
        } else {
          commit('addGoods', payload)
          res('商品已加入购物车')
        }
      })

    }
  },
  getters: {
    getGoodsLength(state) {
      return state.shopCar.length
    },
    getAllGoods(state) {
      return state.shopCar
    }
  },

  modules: {}
})
