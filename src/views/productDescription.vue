<template>
  <div>
    <!-- <img :src="product.images[0]" alt="product"/> -->
    <h2>{{ product.title }}</h2>
    <p>{{ product.description }}</p>
  </div>
  <p> go back <router-link to="/products">Product</router-link></p>
</template>

<script>
// import axios from 'axios'
  export default {
    name: 'productD',
  data() {
    return {
      products: []
    }
  },
  

  mounted() {
    const id = this.$route.params.id;
    fetch(`https://dummyjson.com/products/${id}`)
      .then(response => response.json())
      .then(data => this.product = data);
  }
  }
</script>
