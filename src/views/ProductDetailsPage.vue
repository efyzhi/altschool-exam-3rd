<template>
    <div>
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>Price: {{ product.price }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductDetailsPage',
    data() {
      return {
        product: {}
      }
    },
    mounted() {
      const productId = this.$route.params.id
      // Make an API call to fetch the product details
      // and update the product data in the component
      this.product = {
        id: productId,
        name: `Product ${productId}`,
        description: `This is the description for Product ${productId}`,
        price: `$${(Math.random() * 100).toFixed(2)}`
      }
    }
  }
  </script>
  