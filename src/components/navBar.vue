<template>
    <div class="nav-container">
        <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/signup">Signup</router-link></li>
        <li><router-link to="/signup/products">Products</router-link></li>
      </ul>
    </nav>
    </div>
    
</template>

<script>
    export default {
        name: 'navBar'
    }

</script>