<template>
  <section v-if="loading">
    <!-- <LoadingCom /> -->
  </section>
  <section v-else class="grid-container">
    <img :src="product.images[0]" alt="product" />
    <div class="item2">
      <h3>{{ product.title }}</h3>
      <p class="description">{{ product.description }}</p>
      <p class="rate">{{ product.rating }}⭐</p>
      <p class="stock">{{ product.stock }} left</p>
      <p><span>category</span> {{ product.category }}</p>
      <p class="mgs">
        Back to <router-Link to="/products">Products</router-Link>
      </p>
    </div>
  </section>
</template>

<script>
// import { ref, onMounted } from 'vue';
// import { useRoute, RouterLink } from 'vue-router';

export default {
  name: 'productDescription',
  components: {
    // LoadingCom,
  },
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
/* styles */
</style>
