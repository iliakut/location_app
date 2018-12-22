<template>
  <div>
    <button @click="getLocalPosition">Обновить локацию</button>
    <button @click="getWeather">Обновить температуру</button>
    <div>Текущая температура</div>
    <div>Latitude: {{ latitude }}</div>
    <div>Longitude: {{ longitude }}</div>
    <div>Weather: {{ weather }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "localWeather",
  components: {},
  data: function() {
    return {
      optionsLocation: {
        enableHighAccuracy: true,
        timeout: 7000,
        maximumAge: 0
      },
      weather: {},
      latitude: 0,
      longitude: 0
    };
  },
  methods: {
    success: function(pos) {
      let crd = pos.coords;
      this.latitude = crd.latitude;
      this.longitude = crd.longitude;
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
    },
    error: function(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    },
    getLocalPosition: function() {
      navigator.geolocation.getCurrentPosition(
        this.success,
        this.error,
        this.options
      );
    },
    getWeather() {
      axios
        .get(
          `https://api.darksky.net/forecast/71be0b2a7e5f034a07355a1a85166e75/${this.latitude}, ${this.longitude}, lang=ru`
        )
        .then(weather => (this.weather = weather))
        .catch(error => console.log(error));
    }
  }
};
</script>
