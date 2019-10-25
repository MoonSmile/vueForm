import Vue from 'vue'
import Router from 'vue-router'
import simpleDesc from './views/simpleDesc'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      name:'simpleDesc',
      path: '/simpleDesc',
      component: simpleDesc
    }
  ]
})

