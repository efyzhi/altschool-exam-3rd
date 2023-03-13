<template>
    <main>
        <form @submit.prevent="handleSignin">
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
        </form>
        
    </main>
</template>

<script>
// import axios from 'axios'

   export default {
  name: 'signupForm',
  data: () => ({
    userExists: false,
    email: '',
    password: "",
    repeat_password: "",
    rules: {
      required: value => !!value || "Required",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    }
  }),

    methods: {
      handleSignin() {
      if (this.valid()) {
        this.$store.dispatch('REGISTER', {
          email: this.email,
          password: this.password
        })
        .then(({ status }) => {
          this.$store.commit("SET_NOTIFICATION", {
            display: true,
            text: 'Your account has been successfully created! you can now login.',
            alertClass: "danger"
          });
          this.$router.push('/login')
        })
        .catch (error => {
          this.userExists = true;
        })
      }
    },
    valid() {
      return this.password === this.confirm_password;
    }
  }
};
</script>