<template>
    <template v-if="authIsReady">
    <div class="nav-container">
        <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <div v-if="!user">
          <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/signup">Signup</router-link></li>
        </div>
        

        <div v-if="user">
          <h3> Logged in as {{ user.email }}</h3>
          <li><router-link to="/products">Products</router-link></li>
          
        </div>
      </ul>
    </nav>
    </div>
  </template>
</template>

<script>
    export default {
      name: 'navBar',
      methods: {
        handleLogout() {
          this.$store.dispatch('logout')
          this.$router.push('/')
        }
      },
      computed: {
        authIsReady() {
          return this.$store.state.authIsReady
        }
      }
    }

    

</script>