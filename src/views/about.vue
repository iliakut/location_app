<template>
  <div>
    <h1>About</h1>
    <div>
      <h4>This application demonstrates:</h4>
      <p>The HTML Geolocation on</p>
      <router-link to="/currentLocation">Current location page</router-link>
      <p>Promise based HTTP client for the browser and node.js</p>
      <router-link to="/citiesLocation">Cities location page</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "about"
};
</script>

<style scoped></style>
