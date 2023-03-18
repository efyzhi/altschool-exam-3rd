<template>
  <div class="product-contain">
    <h1>Vue Product Page</h1>
    <div v-if="currentUser">
      <p>Logged in as {{ currentUser.name }}</p>
      <button @click="handleLogout">Logout</button>
    </div>
    <div v-else>
      <p>You are not logged in.</p>
      <router-link to="/login">Login</router-link>
    </div>
    <ul class="product">
      <li v-for="product in paginateProducts" :key="product.id" class="product-box">
        <div > <img :src="product.images[0]" alt="product-image" class="product-image"/> </div>
        <div class="product-body" @click="goToDes(product.id)">
          <h2>{{ product.brand }}</h2>
          <p>{{ product.title }}</p>
          <p>Price: {{ product.price }}</p>
        </div>
      </li>
    </ul>
    <div class="pages">
      <button  class="btn prev-page" @click="prevPage" :disabled="currentPage === 1">Prev</button>
      <span>{{ currentPage }} / {{ TotalPages }}</span>
      <button class="btn next-page" @click="nextPage" :disabled="currentPage === TotalPages">Next</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useCurrentUser } from '@/composables/currentUser';

export default {
  name: 'vueProduct',
  setup() {
    const { currentUser } = useCurrentUser();
    return { currentUser };
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 6,
      products: []
    };
  },
  methods: {
    prevPage() {
      this.currentPage -= 1;
    },
    nextPage() {
      this.currentPage += 1;
    },
    goToDes(productId) {
      this.$router.push(`/products/${productId}`);
    },
    handleLogout() {
      this.$store.dispatch('logout');
      this.$router.push('/');
    }
  },
  computed: {
    paginateProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.products.slice(startIndex, endIndex);
    },
    TotalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    }
  },
  async mounted() {
    try {
      axios.defaults.withCredentials = false;
      const response = await axios.get('https://dummyjson.com/products');
      this.products = response.data.products;
    } catch (error) {
      console.error(error);
    }
  }
};
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
    position: relative;
  }

  .product-box {
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 5px 7px #4e4949;
    padding: 10px;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #c9eeff;
    color: rgb(13, 1, 1);
    transition: transform 1s;
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

  .btn {
    padding: 10px;
    border-radius: 10px;
    background: black;
    color: #478097;
    cursor: pointer;
    border: none;
  }

  .btn:hover {
    background: #fff;
    color: #000;
    border: none;
    transition: all linear 0.5s;
  }

  span {
    padding: 5px;
    color: #fff;
  }

  .btn-logout {
    padding: 10px 20px;
    position: absolute;
    top: 50px;
    right: 50px;
    cursor: pointer;
    transition: all linear 0.5s;
  }

  .btn-logout:hover {
    background: #8a7a7a;
  }

  @media screen and (max-width: 768px) {
    .product-contain {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: scroll;
      padding: 20px;
    }

    .product-box {
      display: flex;
      flex-direction: columns;
      justify-content: center;
      align-items: center;
    }

    .product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    width: 90%;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 50px;
  }
}
  </style>