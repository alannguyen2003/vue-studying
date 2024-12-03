<template>
  <div>
    This is Index page
    <button @click="awesome = !awesome">Toggle</button>

    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const awesome = ref(true);
</script>
<script>
export default {
  name: "index-page",
  data() {
    return {
      data: Array
    }
  },
  methods: {
    getData() {
      
    }
  }
}
</script>

<style>

</style>