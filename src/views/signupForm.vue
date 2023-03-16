<template>
    <main>
      <section class="over-sec">
        <div class="overlay"></div>
        <img src="../assets/signup.jpg" class="signup-img"/>
      </section>
      <section  class="signup-box">
        <form @submit.prevent="handleSignup">
            <h1 class="signup-text"> Sign Up</h1>
            <h2 class="signup-text">Create an account</h2>
            <label for="email">Email</label>
            <input type="text" placeholder="Enter email" v-model="email" required>

            <label for="password">Password</label>
            <input type="password" placeholder="Enter password" v-model="password" required>

            <label for="repeat_password">Repeat_password</label>
            <input type="password" placeholder="Confirm password" v-model="repeat_password" required>
            <p> By creating an account you agree to our <a href='#'>Terms & Privacy</a>.</p>
            <div>
                <button type="submit">Sign Up</button>
            </div>
            <div v-if="error"> {{ error }}</div>
        </form>
      </section>
    </main>
</template>

<script>
// import axios from 'axios'
  // import store from './store'


   export default {
    // const store = useStore()

  name: 'signupForm',
  data: () => ({
    email: '',
    password: "",
    repeat_password: "",
    error: "",
    rules: {
      required: value => !!value || "Required",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    }
  }),

    methods: {
      async handleSignup() {
       try {
        await this.$store.dispatch('signup', { 
        email: this.email,
        password: this.password,
        repeat_password: this.repeat_password
      })
      this.$router.push('/')
      } catch (err) {
        this.$error = this.error.message
       }
    }
  }
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  overflow: hidden;
}

main {
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  background-color: #478097;
}

.signup-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 5px;
  color: rgb(227, 221, 221);
}

  .signup-img {
    width: 100%;
    height: 100vh;
    /* object-fit: cover; */
  }

  label {
    text-align: left;
    margin-top: 25px;

  }

  input {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    background: rgb(215, 206, 206);
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    border-bottom: 4px solid rgb(172, 169, 169);
  }

  input:focus {
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  background: #fff;
  outline: none;
  }

  .signup-text {
    text-align: center;
  }

  .overlay {
    width: 100%;
    height: 100%;
    background: #000;
    position: absolute;
    opacity: 0.4;
    z-index: 10;
    top: 0;
    left: 0;
  }

  .over-sec {
    position: relative;
  }

</style>