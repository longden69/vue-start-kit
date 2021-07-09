import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { ValidationProvider } from 'vee-validate';
import App from './App.vue';
import router from './router';
import store from './store';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

import './assets/app.scss';

import languages from './i18n';

Vue.use(VueI18n);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.component('ValidationProvider', ValidationProvider);

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'ja', // set locale
  messages: languages, // set locale messages
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
