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
  .pink-shadow {
    text-shadow: 2px 2px #D81B60;
  }
</style>
