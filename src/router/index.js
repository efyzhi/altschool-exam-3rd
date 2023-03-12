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
    path: '/login', 
    component: loginForm 
},
  { 
    path: '/signup', 
    component: signupForm,
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
