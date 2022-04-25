import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import covMaterial from '@/views/material/covMaterial'
import covTesting from '@/views/covTesting.vue/covTesting'
import travelPolicy from '../views/travel/travelPolicy'

Vue.use(VueRouter)

const routes = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/riskarea',
    //   name: 'riskarea',
    //   component: riskarea
    // },
    {
      path: '/covMaterial',
      name: 'covMaterial',
      component: covMaterial
    },
    {
      path: '/covTesting',
      name: 'covTesting',
      component: covTesting
    },
    {
      path: '/travel',
      name: 'travelPolicy',
      component: travelPolicy
    }
  ]
})

export default routes
