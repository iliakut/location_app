<template>
  <div>
    <h1>Saint-Petersburg Weather</h1>
    <div></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "cityWeather",
  data: function() {
    return {
      weather: {},
      latitude: 59.5339,
      longitude: 30.1551
    };
  },
  methods: {
    getWeather() {
      axios
        .get(
          `https://api.darksky.net/forecast/71be0b2a7e5f034a07355a1a85166e75/${this.latitude}, ${this.longitude}, lang=ru`
        )
        .then(weather => (this.weather = weather))
        .catch(error => console.log(error));
    }
  },
  created: function() {
    this.getWeather();
  }
};
</script>
