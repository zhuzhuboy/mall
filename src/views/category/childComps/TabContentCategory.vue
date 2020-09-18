<template>
  <div>
    <div class="item" v-for="(item, index) in subcategories.list" :key="index">
      <a :href="item.link">
        <img class="item-img" :src="item.image" alt @load="imgLoad" />
        <div class="item-text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
import {debounce} from 'common/utils.js'
export default {
  name: "TabContentCategory",
  components: {},
  props: {
    subcategories: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      debounceReturnFunc: null
    };
  },
  methods: {
    imgLoad() {
      this.debounceReturnFunc();
    }
  },
  created() {

    this.debounceReturnFunc = debounce(() => {
      this.$emit("imgLoaded");
    });
  }
};
</script>

<style scoped>
.panel img {
  width: 100%;
}

.item {
  text-align: center;
  font-size: 12px;
}

.item-img {
  width: 80%;
}

.item-text {
  margin-top: 15px;
}
</style>
