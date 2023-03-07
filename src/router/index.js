import { createRouter, createWebHistory } from 'vue-router'
import loginForm from '@/views/loginForm.vue'
import signupForm from '@/views/signupForm.vue'


const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
        path: '/',
        name: 'loginForm',
        component: loginForm
    },
    {
        path: '/signupForm',
        name: 'signupForm',
        component: signupForm
    },
]
})


export default router