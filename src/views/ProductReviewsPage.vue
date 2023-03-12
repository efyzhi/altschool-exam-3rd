<template>
    <div>
      <h1>{{ product.name }} Reviews</h1>
      <ul>
        <li v-for="review in reviews" :key="review.id">
          <p>{{ review.rating }}/5 stars - {{ review.comment }}</p>
        </li>
      </ul>
      <form @submit.prevent="submitReview">
        <label for="rating">Rating:</label>
        <select id="rating" v-model="newReview.rating">
          <option value="1">1 star</option>
          <option value="2">2 stars</option>
          <option value="3">3 stars</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
        </select>
        <br>
        <label for="comment">Comment:</label>
        <textarea id="comment" v-model="newReview.comment"></textarea>
        <br>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductReviewsPage',
    data() {
      return {
        product: {},
        reviews: [],
        newReview: {
          rating: 1,
          comment: ''
        }
      }
    },
    mounted() {
      const productId = this.$route.params.id
      // Make an API call to fetch the product details
      // and update the product data in the component
      this.product = {
        id: productId,
        name: `Product ${productId}`
      }
      // Make an API call to fetch the reviews for the product
      // and update the reviews data in the component
      this.reviews = [
        { id: 1, rating: 4, comment: 'Great product!' },
        { id: 2, rating: 2, comment: 'Not impressed.' },
        { id: 3, rating: 5, comment: 'Love it!' }
      ]
    },
    methods: {
      submitReview() {
        // Make an API call to submit the new review
        // and update the reviews data in the component
        // const newReview = {
          // id: this.reviews.length
        // }
    },
    }
  }
    
  </script>