<template>
  <v-app>
    <AppHeader/>
    <router-view/>
    <AppFooter/>
    <AppFab/>
  </v-app>
</template>

<script>
import AppHeader from './components/core/AppHeader.vue'
import AppHome from './components/home/AppHome.vue'
import AppFooter from './components/core/AppFooter.vue'
import AppFab from "./components/core/AppFab";
export default {
  name: 'app',
  components: {
    AppHeader,
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
