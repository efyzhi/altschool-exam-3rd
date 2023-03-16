<template>
   <h1>Product Page</h1>
    <div>
      <ul  class="product">
        <li v-for="product in products" :key="product.id" class="product-box">
          <router-link :to="{ name: 'product', params: { id: product.id } }">
            <div class="product-image"> <img :src="product.images[0] && product.images[1]" alt="product-image" /> </div>
            <div> {{ product.id || '' }} {{ product.title || '' }} </div>
            <h3> {{ product.brand || '' }}</h3>
            
          </router-link>
        </li>
      </ul> 
      
      <!-- <router-view></router-view> -->
    </div>
  </template>
  
  <script>
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
      axios.defaults.withCredentials = false
      const response = await axios.get('https://dummyjson.com/products')
      this.products = response.data.products
    } catch (error) {
      console.error(error)
    }
  }
}
  </script>
  
  <style>
  .product-box {
    border: 2px solid black;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    list-style: none;
  }

  .product {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .product-image {
    width: 200px;
    height: 200px;
  }
  </style>