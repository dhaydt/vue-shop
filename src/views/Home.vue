<template>
  <div class="home">
    <navBar />
    <hero></hero>
    <a href="#products">shop</a>
    <products id="products"></products>

    <div class="container h-100">
      <div class="row p-5 h-100 justify-content-center align-items-center">
        <div class="col-md-6">
          <img src="/img/svg/product.svg" width="400" alt="">
        </div>
        <div class="col-md-6">
          <h3>Learn more about us</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum magni molestiae perferendis labore. Totam sapiente, natus nesciunt quas at ut praesentium quo aspernatur, deleniti dolorum corporis aperiam eaque impedit quos.</p>
          <button class="btn custom-btn btn-outline-primary mr-4">Browse product</button>
        </div>
      </div>
    </div>
    <login></login>
  </div>
</template>

<script>
// @ is an alias to /src
import products from '../sections/products'
import Hero from '../components/hero.vue'
import Products from '../sections/products.vue'
import Login from '../components/login.vue'
export default {
  name: 'Home',
  components: {
    Hero,
    products,
    Products,
    Login
  }
}
</script>
