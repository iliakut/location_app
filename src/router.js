import Vue from "vue";
import Router from "vue-router";
import localWeather from "./views/localWeather.vue";
import cityWeather from "./views/cityWeather.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "localWeather",
      component: localWeather
    },
    {
      path: "/cityWeather",
      name: "cityWeather",
      component: cityWeather
    }
  ]
});
