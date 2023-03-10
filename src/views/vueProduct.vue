<!-- ProductPage.vue -->
<template>
    <div>
      <h1>Product Page</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          <router-link :to="{ path: `/products/${product.id}` }">{{ product.name }}</router-link>
          <router-link :to="{ path: `/products/${product.id}/reviews` }">Reviews</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductPage',
    data() {
      return {
        products: [
          { id: 1, name: 'Product 1' },
          { id: 2, name: 'Product 2' },
          { id: 3, name: 'Product 3' }
        ]
      }
    }
  }
  </script>
  