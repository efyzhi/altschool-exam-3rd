<template>
  <section v-if="loading">
    
  </section>
  <section v-else class="grid-container">
    <img :src="product.images[0]" alt="product" class="p-img"/>
    <div class="item2">
      <h3>{{ product.title }}</h3>
      <p class="description">{{ product.description }}</p>
      <p class="rate">{{ product.rating }}⭐</p>
      <p class="stock">{{ product.stock }} left</p>
      <p><span class="u">category</span> {{ product.category }}</p>
      <p class="mgs">
        Back to <router-Link to="/products">Products</router-Link>
      </p>
    </div>
  </section>
</template>

<script>

export default {
  name: 'productDescription',
  
  data() {
    return {
      product: {},
      loading: true,
    };
  },
  methods: {
    fetchProduct() {
      const endpoint = `https://dummyjson.com/products/${this.$route.params.id}`;
      fetch(endpoint)
        .then((res) => res.json())
        .then((json) => (this.product = json))
        .finally(() => (this.loading = false));
    },
  },
  mounted() {
    this.fetchProduct();
  },
};
</script>

<style scoped>
  .grid-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 50px;
    background: #478097;
    height: 100vh;
  }

  .u {
    color: #000;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  a:hover {
    color: #fff;
  }

  .p-img {
    width: 200px;
    height: 200px;
  }

  
</style>