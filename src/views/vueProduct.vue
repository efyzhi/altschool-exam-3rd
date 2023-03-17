<template>
  <div class="product-contain">
  <h1>Product Page</h1>
    <div>
      <div>
        <button class="btn-logout" @click="handleLogout">Logout</button>
      </div>

      <ul  class="product" >
        
        <li v-for="product in paginateProducts" :key="product.id" class="product-box" @click="this.$router.push(`/products/${product.id}`)">
          <div > <img :src="product.images[0]" alt="product-image" class="product-image"/> </div>
            <div class="product-body">
              <h3> {{ product.brand || '' }}</h3>
              <p>  {{ product.title || '' }} </p>
              <p> ${{ product.price }}</p>
          </div>
        </li>
      
      </ul> 
      <div class="pages"> 
        <button @click="prevPage" :disabled="currentPage === 1">Prev</button> <span> {{ currentPage }} of {{ TotalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === TotalPages">Next</button>
      </div>
      <!-- <router-view></router-view> -->
    </div>
  </div>
  </template>
  
  <script>
import axios from 'axios'

export default {
  name: 'vueProduct',
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 6,
      products: []
    }
  },

  methods: {
    prevPage() {
      this.currentPage -= 1;
    },
    nextPage() {
      this.currentPage += 1;
    },
    moveNext() {
      this.goToDes
    },
    handleLogout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
        }
  },

  computed: {
  paginateProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.products.slice(startIndex, endIndex);
  },
  TotalPages() {
    return Math.ceil( this.products.length / this.itemsPerPage )
  }
},

goToDes() {
    return this.$router.push('/products/${product.id}')
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
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .product-contain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #478097;
    height: 100vh;
  }

  .product-box {
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 5px 7px #4e4949;
    padding: 10px;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #c9eeff;
    color: rgb(13, 1, 1);
    transition: transform .2s;
    cursor: pointer;
  }

  .product-box:hover {
    transform: scale(1.2);
  }

  .product {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }

  .product-image {
    width: 100px;
    height: 100px;
  }

  .pages {
    text-align: center;
    margin-top: 20px;
  }
  </style>