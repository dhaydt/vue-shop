<template>
  <div class="home">
    <h1>home</h1>
    <button class="btn btn-primary">click</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  }
}
</script>
