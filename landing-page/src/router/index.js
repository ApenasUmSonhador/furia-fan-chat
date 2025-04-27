import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import ChatPage from '@/pages/ChatPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
      meta: { title: 'FURIA - Home' }  // Título da HomePage
    },
    {
      path: '/chat',
      name: 'Chat',
      component: ChatPage,
      meta: { title: 'FURIA Fan Chat - Chat' }  // Título da ChatPage
    }
  ]
})
