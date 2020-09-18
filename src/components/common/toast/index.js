let toast = {};
import Toast from './Toast.vue'
toast.install = function (Vue) {
  // console.log(9999)
  //   Vue.component('Toast',Toast);
  //   console.log(Toast)
  //   Vue.$mount()
  //    let toast = Toast.
  //   Vue.prototype.$toastShow = function(msg,duration){
  //     Toast.show( msg,duration)
  //   }

  let compConstructor = Vue.extend(Toast)
  let toast = new compConstructor()
  console.log(toast)
  toast.$mount(document.createElement('div'))

  document.querySelector('body').appendChild(toast.$el)
  Vue.prototype.$toastShow = function (msg, duration) {
    console.log(toast.$el)
    toast.show(msg, duration)
  }

}

export default toast
