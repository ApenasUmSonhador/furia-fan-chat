import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import ChatPage from '@/pages/ChatPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/chat', component: ChatPage }
  ]
})
