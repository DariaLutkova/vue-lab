<template>
  <div id="app">
    <ul class="nav nav-tabs mb-3">
      <li class="nav-item">
        <router-link tag="a" class="nav-link" exact="exact" active-class="active" to="/"
          >Glamorous people</router-link
        >
      </li>
      <li class="nav-item">
        <router-link tag="a" class="nav-link" active-class="active" to="/add"
          >Add person</router-link
        >
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
// import Person from "./components/Person.vue";
// import PopUp from "./components/PopUp.vue";

export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  position: relative;
  box-sizing: border-box;
}
</style>
