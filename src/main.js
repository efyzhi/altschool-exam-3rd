import { createApp } from 'vue'
// import Router from 'vue-router'
import App from './App.vue'
import router from './router'
import './axios'
import store from "./store";
// import * as firebase from 'firebase'


createApp(App)
.use(router)
.use(store)
.mount('#app')
  