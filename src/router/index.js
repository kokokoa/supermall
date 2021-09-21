import Vue from "vue";
import VueRouter from "vue-router";

// 1.安装插件
Vue.use(VueRouter);
const Home = () =>
  import ('../views/home/home');
const Category = () =>
  import ('../views/category/category');
const Cart = () =>
  import ('../views/cart/cart');
const Profile = () =>
  import ('../views/profile/profile');
// 1.安装插件
Vue.use(VueRouter);
// 1.此处是routes  不是routers 
const routes = [{
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/category',
      component: Category,
    },
    {
      path: '/cart',
      component: Cart,
    },
    {
      path: '/profile',
      component: Profile,
    }
  ]
  // 2.创建路由对象
const router = new VueRouter({
  routes,
  mode: 'history'
});

// 3.导出
export default router;