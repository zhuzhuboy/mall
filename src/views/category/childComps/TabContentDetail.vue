<template>
  <Goods-list>
    <goods-list-item v-for="(item, index) in categoryDetail" :key="index" :goods="item"></goods-list-item>
  </Goods-list>
</template>

<script>
  import GoodsList from 'components/content/goods/GoodsList.vue'
  import GoodsListItem from 'components/content/goods/GoodsListItem.vue'

  export default {
    name: "TabContentDetail",
    components: {
      GoodsList,
      GoodsListItem
    },
    props: {
      categoryDetail: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
</style>
