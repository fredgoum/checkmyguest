import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store  from './store';
import moment from 'moment';
import VueTelInput from 'vue-tel-input';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

require('@/assets/css/app.css');

Vue.config.productionTip = false
Vue.prototype.moment = moment
Vue.use(VueTelInput)

new Vue({
  vuetify,
  router,
  store ,
  render: h => h(App)
}).$mount('#app')
