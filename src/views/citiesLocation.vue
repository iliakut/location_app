<template>
  <div>
    <h1>Cities coordinates</h1>
    <button @click="getLocation" class="buttonGreen buttonGreen1">
      Update
    </button>
    <serverLoader v-if="!cities.length"></serverLoader>
    <div v-else>
      <div v-for="city in cities" :key="city.name">
        <h2>{{ city.name }}:</h2>
        <h3>latitude: {{ city.latitude }}</h3>
        <h3>longitude: {{ city.longitude }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "citiesLocation",
  components: {
    serverLoader: () => import("@/components/serverLoader.vue")
  },
  data: function() {
    return {
      cities: []
    };
  },
  methods: {
    getLocation() {
      this.cities = [];
      setTimeout(this._getLocation, 3000);
    },
    _getLocation() {
      axios
        .get("http://localhost:3004/cities")
        .then(cities => (this.cities = cities.data))
        .catch(error => console.log(error));
    }
  },
  created: function() {
    this.getLocation();
  }
};
</script>
