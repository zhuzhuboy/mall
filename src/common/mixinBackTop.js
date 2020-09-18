export default {
  data(){
    return {
      isShowBackTop: false,
    }
  },
  created() {

  },
  methods:{
    handleBackTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
  }
}
