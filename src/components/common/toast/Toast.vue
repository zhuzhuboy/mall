<template>
    <div id="toast" v-if="isShow">
        {{message}}

    </div>
</template>

<script>
export default {
    data(){
      return {
        message:null,
        isShow:false
      }
    },
    methods:{
      show(message,duration=1500){
          console.log('show')
          this.isShow=true;
          console.log(this)
          this.message = message
          setTimeout(() => {
            this.isShow=false
          }, duration);
      }
    }

}
</script>

<style lang="scss" scoped>
  #toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,50%);
    z-index: 999;

    padding: 5px 10px;
    border-radius: 10px;

    background-color: rgba(0, 0, 0, 0.65);
    color: white;

  }

</style>
