import Vue from "vue";
import Router from "vue-router";
import currentLocation from "./views/currentLocation.vue";
import citiesLocation from "./views/citiesLocation.vue";
import about from "./views/about.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/currentLocation",
      name: "currentLocation",
      component: currentLocation
    },
    {
      path: "/citiesLocation",
      name: "citiesLocation",
      component: citiesLocation
    },
    {
      path: "/",
      name: "about",
      component: about
    }
  ]
});
