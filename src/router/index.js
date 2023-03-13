import { createRouter, createWebHistory } from 'vue-router'
import loginForm from '@/views/loginForm.vue'
import signupForm from '@/views/signupForm.vue'
import homeView from '@/views/homeView'
import vueProduct from '@/views/vueProduct.vue'


const routes = [
  { 
    path: '/', 
    component: homeView 
  },
  { 
    path: '/signup', 
    component: signupForm 
},
  { 
    path: '/login', 
    component: loginForm,
    children: [
      {
        path: '/products',
        component: vueProduct
      }
    ]
   }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
