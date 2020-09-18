<template>
  <div class="tab-control" >
    <div
      class="control-item"
      v-for="(item,index) in titles"
      :key="item"
      @click="handleClick(index)"
      :class="{
        active:index==currentIndex
      }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return ["喜洋洋", "灰太狼", "笨笨"];
      }
    }
  },
  methods: {
    handleClick(index) {
      this.currentIndex = index;

      this.$emit('handleTabClick',index)
    },
  }
};
</script>

<style lang="scss">
.tab-control {
  display: flex;
  background-color: #fff;
  height: 40px;
  line-height: 40px;
  z-index: 9;
  .control-item {
    flex: 1;
    span {
      display: inline-block;
      box-sizing: border-box;
      height: 40px;
      padding: 5px;
    }
  }
  .active {
    color: $color-high-text;
  }
  .active span {
    border-bottom: 2px solid $color-tint;
  }

  //   color: var(--color-high-text);
  // border-bottom: 3px solid var(--color-tint);
}
</style>
