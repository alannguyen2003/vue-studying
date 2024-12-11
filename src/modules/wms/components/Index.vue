
<script setup>
import { reactive } from 'vue';
var awesome = reactive({awesome: true});
// eslint-disable-next-line no-unused-vars
const changeAwesome = () => {
  awesome.awesome = !awesome.awesome;
  console.log(awesome.awesome)
};

</script>
// <!-- eslint-disable vue/require-v-for-key -->
<template>
  <div>
    This is Index page
    <button @click="changeAwesome">Toggle</button>

    <h1 v-if="awesome.awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <ul>
      <!--<li v-for="item in data.data.data">{{ item.first_name }}</li>-->
    </ul>
  </div>
</template>

<script>
// import service from "../../../../services/demo-service"
export default {
  name: "index-page",
  data() {
    return {
      data: []
    }
  },
  created() {
    // this.getData()
  },
  methods: {
    // getData() {
    //   service.getListOfApi() 
    //       .then((response) => {
    //         this.data = response;
    //         console.log(this.data.data.data)
    //       })
    // }
    // onClick() {
    //   awesome = !awesome;
    // }
  }
}
</script>

<style>

</style>