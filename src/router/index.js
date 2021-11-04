import Vue from 'vue'
import Router from 'vue-router'
import Cluster from '../components/Cluster'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {name: 'cluster'}
    },
    {
      path: '/cluster',
      name: 'cluster',
      component: Cluster
    }
  ]
})
