import { createRouter, createWebHistory } from 'vue-router'
import loginForm from '@/views/loginForm.vue'
import signupForm from '@/views/signupForm.vue'
// import homeView from '@/views/homeView'
import vueProduct from '@/views/vueProduct.vue'
import productDescription from '@/views/productDescription.vue'

const routes = [
  // { 
  //   path: '/', 
  //   component: homeView 
  // },
  { 
    path: '/', 
    component: loginForm,
   },
  { 
    path: '/signup', 
    component: signupForm 
},
   { 
    path: '/products',
    component: vueProduct
  },
  {
    path: '/products/:id',
    name: 'product',
    component: productDescription,
    props: true
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
