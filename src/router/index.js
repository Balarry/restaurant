import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/Components/Home.vue'
import ContactUs from '@/Components/ContactUs.vue'
import Menu from '@/Components/Menu.vue'
import Reservation from '@/Components/Reservation.vue'
import MenuItem from '@/Components/MenuItem.vue'
import Orders from '@/Components/Orders.vue'
import SignUp from '@/Components/SignUp_2.vue'
import Login from '@/Components/Login.vue'
import UserProfile from '@/Components/UserProfile.vue'
import Admin from '@/Components/Admin.vue'
import WelcomePage from '@/views/WelcomePage.vue'
import UserPage from '@/views/UserPage.vue'
import AuthService from '@/services/AuthService'
import RestaurantPage from '@/views/RestaurantPage.vue'

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
    {
      name: 'admin',
      path: '/admin',
      component: Admin
    },
    {
      name: 'Welcome',
      path: '/welcome',
      component: WelcomePage
    },
    {
      name: 'Users',
      path: '/userpage',
      component: UserPage
    },
     {
      name: 'Restaurant',
      path: '/restaurant',
      component: RestaurantPage
    },
    
  ],
});
router.beforeEach((to, from, next) => {
  const publicPages = ['/', '/login', '/sign-up', '/about-us', '/test'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = AuthService.isLoggedIn();

  if(!loggedIn && authRequired){
    return next('/login');
  }
  next()
})

export default router
