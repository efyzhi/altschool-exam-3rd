<template>
    <main>
        <form @submit.prevent="handleSignup">
            <h1> Sign Up</h1>
            <p>Create an account</p>
            <label for="email">Email</label>
            <input type="text" placeholder="Enter Enter email" v-model="email" required>

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