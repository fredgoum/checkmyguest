import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import moment from 'moment';
import VueTelInput from 'vue-tel-input';

Vue.config.productionTip = false
Vue.prototype.moment = moment
Vue.use(VueTelInput)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
