<template>
    <div class="login-form">
      <h1>Login Page</h1>
      <form @submit.prevent="handleLogin">
        <label>Email:</label>
        <input type="email" v-model="email">
        <label>Password:</label>
        <input type="password" v-model="password">
        <button type="submit">Login</button>
<div> You don't have an account? <span @click="goToSignUp">Sign up</span></div>
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
    async handleLogin() {
       try {
        await this.$store.dispatch('login', { 
        email: this.email,
        password: this.password,
    })
      this.$router.push('/products')  
       } catch (err) {
        this.$error = this.error.message
       }
    },
    goToSignUp(){
      this.$router.push('/signup')
    }
  }
};
  </script>
  
<style>
  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    width: 75%;
    padding: 20px;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>