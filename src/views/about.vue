<template>
  <div>
    <h1>About</h1>
    <serverLoader v-if="showPage === 0"></serverLoader>
    <div v-else>
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
  name: "about",
    data: function() {
      return {
          showPage: 0
      }
    },
    components: {
        serverLoader: () => import("@/components/serverLoader.vue")
    },
    methods: {
      loadPageWait: function() {
          setTimeout(this.loadPage, 3000);
      },
      loadPage: function() {
          this.showPage = 1;
      }
    },
    created: function() {
        this.loadPageWait();
    }
};
</script>
<style scoped></style>
