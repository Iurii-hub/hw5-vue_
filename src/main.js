import {coreJs} from 'core-js/fn/array';
import VueRouter from 'vue-router';
import {routes} from '@/routes';
import Vue from 'vue';
import App from './App.vue';
import {store} from '@/store/store';



Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
})


new Vue({
  render: h => h(App),
  router,
  store,
  coreJs
}).$mount('#app')
