<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content" ref="abc">
      <slot />
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);

// BScroll.use(Pullup)
export default {
  props: {
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      }
    },
    probeType: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  data() {
    return {
      bscroll: null
    };
  },

  mounted() {
    this.initBscroll();

  },
  updated() {
    this.bscroll.refresh();
  },
  methods: {
    initBscroll() {
      // this.bscroll = new BScroll(this.$refs.wrapper, {
      //   click: true,
      //   pullUpLoad: true,
      //   probeType: 3
      // });

      this.bscroll = new BScroll(this.$refs.wrapper, {
        pullUpLoad: this.pullUpLoad,
        click: true,
        probeType: this.probeType
      });

      this.pullUpLoad && this.bscroll.on("pullingUp", props => {

        this.$emit("pullingUp");
        // this.bscroll.finishPullUp();
         this.bscroll.refresh();
      });

      this.bscroll.on("scroll", position => {

        this.$emit("scroll", position);
      });
    },
    scrollTo(x, y, time = 500) {
      this.bscroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.bscroll.finishPullUp();
    }
  }
};
</script>

<style>

</style>
