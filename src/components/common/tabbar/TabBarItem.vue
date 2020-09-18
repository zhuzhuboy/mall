<template>
  <div class="tab-bar-item" @click="handleClick">
    <div>
        <slot name="item-icon" v-if="!isActive"></slot>
        <slot name="item-icon-active" v-else></slot>
    </div>
    <div :style="{
      color:isActive?this.fontColor:'black'
    }">
        <slot name="item-font"></slot>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    path: {
      type: String
    },
    fontColor:{
      type:String,
      default:'red'
    }
  },
  computed:{
      isActive(){

          return this.$route.path.includes(this.path)
      }
  },
  methods: {
    handleClick() {

      if (this.$route.path.includes(this.path)) return;

      this.$router.replace(this.path);
    }
  }

};
</script>

<style>
.tab-bar-item {
  flex: 1;
  width: 24px;
  height: 100%;
}
.tab-bar-item img {
  display: inline-block;
  margin-top: 10px;
  width: 20px;
}
.tab-bar-item div {
  font-size: 13px;
}
.active{
    color: red;
}
</style>
