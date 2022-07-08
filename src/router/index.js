import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue'
import Tabbar from '../views/Tabbar.vue'
import Message from '../views/Message.vue'

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      component: Tabbar,
      children: [
        {
          path: 'home',
          component: Home,
        },
        {
          path: 'message',
          component: Message,
        },
        {
          path: '',
          redirect: '/home'
        }
      ],
    },
  ]
})

export default router