<template>
  <div class="home">
    <hero></hero>
    <button class="btn btn-primary">click</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '../components/hero.vue'
export default {
  name: 'Home',
  components: {
    Hero,
  }
}
</script>
