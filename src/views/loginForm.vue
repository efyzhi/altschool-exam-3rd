<template>
  <article class="login-box">
    <section class="login-form">
    <div>
      <h1 class="login-text"> Welcome Back </h1>
      <h1 class="login-text">Login Page</h1>
      <form @submit.prevent="handleLogin">
        <label>Email:</label>
        <input type="email" v-model="email">
        <label>Password:</label>
        <input type="password" v-model="password">
        <button type="submit">Login</button>
<div> You don't have an account? <span><button @click="goToSignUp">Sign up</button></span></div>
      </form>
    </div>
  </section>
  <seection class="login-over">
    <div class="login-overlay"></div>
    <img src="../assets/login.jpg" alt="login-img" class="login-img"/>
  </seection>

  </article>
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
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.login-box {
  display: grid;
  grid-template-columns: 0.8fr 1fr;
}

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: #152238;
    color: #edc2c2;
  }

    .login-img {
    width: 100%;
    height: 100vh;
  }

  .login-over {
    position: relative;
  }

  .login-overlay {
    width: 100%;
    height: 100vh;
    position: absolute;
    background: #000;
    opacity: 0.3;
    z-index: 10;
  }

  .login-text {
    text-align: center;
  }
</style>