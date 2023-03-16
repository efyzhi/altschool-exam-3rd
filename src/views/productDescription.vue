<!-- ProductDetail.vue -->

<template>
  <div>
    <h2>{{ product.title }}</h2>
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      products: {
        type: Array,
        required: true
      }
    },
    computed: {
      product() {
        const productId = Number(this.$route.params.id)
        return this.products.find(p => p.id === productId)
      }
    }
  }
</script>
