<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">About</router-link> |
      <router-link to="/currentLocation">Current location</router-link> |
      <router-link to="/citiesLocation">Cities location</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.buttonGreen {
  background-color: #42b983; /* Green */
  border: none;
  color: white;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
}

.buttonGreen1 {
  background-color: white;
  color: black;
  border: 2px solid #42b983;
}

.buttonGreen1:hover {
  background-color: #42b983;
  color: white;
}
</style>
