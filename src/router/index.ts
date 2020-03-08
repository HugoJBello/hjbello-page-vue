import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Tag from '../views/Tag.vue'
import EntryPage from '../views/EntryPage.vue'

//const Entries =  require('../assets/entries.json')
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tags/:tag',
      name: 'tags',
      component: Tag
    },
    {
      path: '/entry/:entryId',
      name: 'index',
      component: EntryPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },

  ]
})
