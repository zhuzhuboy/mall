<template>
  <div class="detail-recommend">
    <GoodsList :goodsList="recommendList" />
  </div>

</template>

<script>
import GoodsList from "components/content/goods/GoodsList.vue";
export default {
  components:{
    GoodsList
  },
  props: {
    recommendList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data(){
    return {

    }
  },
  methods:{

  }
};
</script>


