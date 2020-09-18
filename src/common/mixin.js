import {
  debounce
} from 'common/utils'
import Vue from 'vue'
let func = debounce((arg1, arg2) => {
  console.log(arg1, arg2)
}, 200)


import {POP,NEW,SELL} from './const'

export default {
  created() {
    this.handleFunc = () => {

      if ((this.$route.path.includes('home'))) {

        func("cc", "gg");
      } else if ((this.$route.path.includes('detail'))) {

        func("zz", "bb");
      }
    }


    this.$bus.$on('imgLoaded', this.handleFunc)
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}

