<!-- LoginPage.vue -->
<template>
    <div>
      <h1>Login Page</h1>
      <form @submit.prevent="handleLogin">
        <label>Email:</label>
        <input type="email" v-model="email">
        <label>Password:</label>
        <input type="password" v-model="password">
        <button>Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name: 'LoginPage',
  data: () => ({
    username: '',
    password: '',
    error: false
  }),
  methods: {
    login() {
      this.$store.dispatch("LOGIN", {
        username: this.username,
        password: this.password
      })
      .then(success => {
        this.$router.push("/")
      })
      .catch(error => {
        this.error = true;
      })
    }
  }
};
  </script>
  