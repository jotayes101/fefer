<template>
  <v-app>
    <AppHeader/>
    <AppHome/>
    <AppFooter/>
    <AppFab/>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppHome from './components/AppHome.vue'
import AppFooter from './components/AppFooter.vue'
import AppFab from "./components/AppFab";

export default {
  name: 'app',
  components: {
    AppHeader,
    AppHome,
    AppFooter,
    AppFab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
