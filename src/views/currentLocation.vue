<template>
  <div>
    <h1>Current Location</h1>
    <button @click="getLocationPostponded" class="buttonGreen buttonGreen1">
      Update
    </button>
    <serverLoader v-if="latitude === 0"></serverLoader>
    <div v-else>
      <h3>Latitude: {{ latitude }}</h3>
      <h3>Longitude: {{ longitude }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "currentLocation",
  components: {
    serverLoader: () => import("@/components/serverLoader.vue")
  },
  data: function() {
    return {
      optionsLocation: {
        enableHighAccuracy: true,
        timeout: 7000,
        maximumAge: 0
      },
      cities: {},
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
    getLocationPostponded: function() {
      this.latitude = 0;
      this.longitude = 0;
      setTimeout(this.getLocalPosition, 3000);
    }
  },
  created: function() {
    this.getLocationPostponded();
  }
};
</script>
