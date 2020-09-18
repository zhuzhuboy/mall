<template>
  <Swiper>
    <SwiperItem v-for="item in banner" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" @load="imgLoad" alt />
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    banner:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      isImgLoaded:false
    }
  },
  methods:{
    imgLoad(){
      if(this.isImgLoaded)return
      this.isImgLoaded = true
      this.$emit('loaded')
    }
  }
};
</script>
