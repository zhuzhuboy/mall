<template>
  <div class="home-recommend">
    <div v-for="item in recommend" :key="item.title" class="recomend-item">
      <a :href="item.link">
        <img :src="item.image" alt @load="imgLoaded" />
      </a>
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data(){
    return {
      isLoaded:false
    }
  },
  methods:{
    imgLoaded(){
      if(this.isLoaded)return
      this.isLoaded=true
      this.$emit('loaded')
    }
  }
};
</script>

<style lang="scss">
.home-recommend{
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #ccc;
  .recomend-item{
    flex: 1;
    img{
      width: 60px;
      height: 60px;
      margin-bottom: 5px;
    }
  }
}
</style>
