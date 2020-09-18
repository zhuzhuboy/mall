import Vue from 'vue'
import VueRouter from 'vue-router'

const Category = ()=>import('views/category/Category.vue');
const Home = ()=>import('views/home/Home.vue');
const ShopCar = ()=>import('views/shopCar/ShopCar.vue');
const Profile = ()=>import('views/profile/Profile.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/shopCar',
    name: 'shopCar',
    component: ShopCar
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
