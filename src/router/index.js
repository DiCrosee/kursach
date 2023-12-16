import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import AppointmentPage from '../pages/AppointmentPage.vue'
import DoctorsPage from '../pages/DoctorsPage.vue'
import OrderPage from '../pages/OrderPage.vue'
import MapPage from '../pages/MapPage.vue'
import ReviewsPage from '../pages/ReviewsPage.vue'
import GalleryPage from '../pages/GalleryPage.vue'
import MakeOrderPage from '../pages/MakeOrderPage.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: AppointmentPage,
    },
    {
      path: '/doctors',
      name: 'doctors',
      component: DoctorsPage,
    },
    {
      path: '/order',
      name: 'order',
      component: OrderPage,
    },
    {
      path: '/map',
      name: 'map',
      component: MapPage,
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: ReviewsPage,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryPage,
    },
    {
      path: '/make-order',
      name: 'make-order',
      component: MakeOrderPage,
    },
  ],
})

export default router
