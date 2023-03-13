import { createApp } from 'vue'
// import Router from 'vue-router'
import App from './App.vue'
import router from './router'
import './axios'
import store from "./store/store";


createApp(App)
.use(router)
.mount('#app')
