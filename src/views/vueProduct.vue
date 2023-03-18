<template>
  <div class="product-contain">
    <h1> Product List</h1>
    <div>
      <p>Logged in as {{ currentUser.email }}</p>
      <button @click="handleLogout">Logout</button>
    </div>
    <ul class="product">
      <li v-for="product in paginateProducts" :key="product.id" class="product-box">
        <div >
           <img :src="product.images[0]" alt="product-image" class="product-image"/> 
        </div>
        <div class="product-body" @click="goToDes(product.id)">
          <p>{{ product.brand }}</p>
          <p>{{ product.title }}</p>
          <p>Price: ${{ product.price }}</p>
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
    gap: 20px;
  }
  .product-box {
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  background: #c9eeff;
  color: rgb(13, 1, 1);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  }

  .product-box:hover {
  transform: translateY(-10px);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
}
  .product {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
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
    .product-box {
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  background: #c9eeff;
  color: rgb(13, 1, 1);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  width: 150px;
  }
}

@media screen and (max-width: 1024px) {
    .product-box {
      flex-basis: calc(50% - 10px);
    }
  }

  @media screen and (max-width: 480px) {
    .product-contain {
      padding: 10px;
    }
  }
  </style>