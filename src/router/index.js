import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vehicle from '../views/Vehicle.vue'
import Electric from '../views/Electric.vue'
import Contact from '../views/Contact.vue'
import Advance from '../views/AdvanceSearch.vue'
import CarToView from '../views/CarToView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vehicles',
    name: 'Vehicles',
    component: Vehicle
  },
  {
    path: '/electric',
    name: 'Electric',
    component: Electric
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/advance',
    name: 'Advance',
    component: Advance
  },
  {
    path: '/carToView',
    name: 'CarToView',
    component: CarToView 
  },
  
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
