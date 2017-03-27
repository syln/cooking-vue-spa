import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import router from './routes/index';
import Mint from 'mint-ui';
import App from './app';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Mint);

new Vue({ // eslint-disable-line
  el: '#app',
  router,
  render: h => h(App)
});
