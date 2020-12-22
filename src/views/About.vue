<template>
  <div class="about">
    <h1>This is an about page</h1>
    <hero></hero>
    <Button type="success" ghost>Success</Button>
  </div>
</template>
<script>
import hero from '../components/hero.vue'
export default {
  components: { hero },
  
}
</script>