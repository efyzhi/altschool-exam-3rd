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
  export default {
    name: 'LoginPage',
  data: () => ({
    username: '',
    password: '',
  }),
  methods: {
    async handlelogin() {
       try {
        await this.$store.dispatch('login', { 
        email: this.email,
        password: this.password,
        repeat_password: this.repeat_password
      })
      this.router.push('/')
       } catch (err) {
        // this.error = this.error.message
       }
    }
  }
};
  </script>
  