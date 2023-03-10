import { createApp } from 'vue'
// import Router from 'vue-router'
import App from './App.vue'
import router from './router'

createApp(App)
.use(router)
.mount('#app')
