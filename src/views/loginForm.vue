<!-- LoginPage.vue -->
<template>
    <div>
      <h1>Login Page</h1>
      <form>
        <label>Email:</label>
        <input type="email" v-model="email">
        <label>Password:</label>
        <input type="password" v-model="password">
        <button @click.prevent="login">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        // TODO: Implement login logic
      }
    }
  }
  </script>
  