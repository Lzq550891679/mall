import Vue from 'vue'
import VurRouter from 'vue-router'

// 1、安装插件
Vue.use(VurRouter)

const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Shopcart = () => import('views/shopcart/Shopcart.vue')
const Profile = () => import('views/profile/Profile.vue')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  },
]
// 2、创建router
const router = new VurRouter({
  routes,
  mode: 'history'
})

// 3、导出router(4、去main.js挂载router)
export default router
