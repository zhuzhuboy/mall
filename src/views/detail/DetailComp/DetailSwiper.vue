<template>
  <Swiper class="detail-swiper">
    <SwiperItem v-for="item in banner" :key="onlyKey(item)">
        <img :src="item"  alt />
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
  computed:{
    onlyKey(){
      return (id)=>{
        return id+Math.random()
      }
    }
  },
  props:{
    banner:{
      type:Array,
      default(){
        return []
      }
    }
  },
};
</script>

<style>
 .detail-swiper{
   height: 300px;
   overflow: hidden;
 }
</style>
