
import VueRouter from 'vue-router';
import {routes} from '@/routes';
import Vue from 'vue';
import App from './App.vue';
import {store} from '@/store/store';
import VueResource from 'vue-resource';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes,
  mode: "history"
})


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
