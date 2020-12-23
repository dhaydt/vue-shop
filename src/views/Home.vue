<template>
  <div class="home">
    <hero></hero>
    <a href="#products">shop</a>
    <products id="products"></products>
  </div>
</template>

<script>
// @ is an alias to /src
import products from '../sections/products'
import Hero from '../components/hero.vue'
import Products from '../sections/products.vue'
export default {
  name: 'Home',
  components: {
    Hero,
    products,
    Products
  }
}
</script>
