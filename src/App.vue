<template>
  <template v-if="authIsReady">
  <div class="nav-container">
      <nav>
    <ul>
      <div v-if="user">
        <h3> Logged in as {{ message }}</h3>
        
        
      </div>
    </ul>
  </nav>
    <router-view></router-view>
  </div>
  </template>
</template>

<script>
import { useCurrentUser } from '@/composables/currentUser';
  export default {
    name: 'navBar',
    setup() {
      const message = useCurrentUser('Welcome');
      return {
        message
      }
    },
    computed: {
      authIsReady() {
        return this.$store.state.authIsReady
      }
    }
  }

  

</script>