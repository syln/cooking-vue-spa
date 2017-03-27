import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 页面
import Home from 'pages/Home/index';

const routes = [
  {path:'/',component:Home},
];

const router = new VueRouter({
  routes:routes,
  mode:'history'
});

export default router;
