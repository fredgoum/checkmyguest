import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home';
import ContactForm from '@/components/ContactForm';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts',
    name: 'ContactForm',
    component: ContactForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
