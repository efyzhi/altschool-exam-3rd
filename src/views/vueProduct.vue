<template>
    <div>
      <h1>Product Page</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          <div> {{ product.id }} {{ product.title }} </div>
          <h3> {{ product.brand }}</h3>
          <p> {{ product.description }}</p>
        </li>
      </ul> 
      
      <router-view></router-view>
    </div>
  </template>
  
  <script>
// import { response } from 'express';
import axios from 'axios'

export default {
  name: 'vueProduct',
  data() {
    return {
      products: []
    }
  },
  async mounted() {
    try {
      const response = await axios.get('https://dummyjson.com/products')
      this.products = response.data.products
    } catch (error) {
      console.error(error)
    }
  }
}
  </script>
  