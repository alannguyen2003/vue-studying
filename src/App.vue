<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Nguyên nè"/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import service from '../services/demo-service'
// import Demo from './modules/wms/components/Demo.vue';
export default {
  name: 'App',
  methods: {
    // getData() {
    //   service.getListOfApi() 
    //     .then((response) => {
    //       this.data = response;
    //       console.log(this.data.data.statusCode)
    //     })
    // }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
