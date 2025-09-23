import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/Components/Home.vue'
import ContactUs from '@/Components/ContactUs.vue'
import Menu from '@/Components/Menu.vue'
import Reservation from '@/Components/Reservation.vue'
import MenuItem from '@/Components/MenuItem.vue'
import Orders from '@/Components/Orders.vue'
import SignUp from '@/Components/SignUp.vue'
import Login from '@/Components/Login.vue'
import UserProfile from '@/Components/UserProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'contactus',
      path: '/contactus',
      component: ContactUs
    },
    {
      name: 'menu',
      path: '/menu',
      component: Menu
    },
    {
      name: 'reservation',
      path:'/reservation',
      component: Reservation
    },
    {
      name: 'menuitem',
      path:'/menuitem',
      component: MenuItem
    },
    {
      name: 'orders',
      path:'/orders',
      component: Orders
    },
    {
      name: 'signup',
      path: '/signup',
      component: SignUp
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'userprofile',
      path: '/userprofile',
      component: UserProfile
    },
    
  ],
})

export default router
