<template>
  <v-toolbar
    fixed
    color="transparent"
    scroll-off-screen
  >
    <v-toolbar-title class="pink--text font-weight-black">Fefer</v-toolbar-title>
    <!-- <v-img src="../assets/logo1fefer2.png" aspect-ratio="1.7"></v-img> -->
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn class="pink--text font-weight-black" flat>Woman</v-btn>
      <v-btn class="pink--text font-weight-black" flat>Men</v-btn>
      <v-btn class="pink--text font-weight-black" flat>Accesories</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-badge color="pink" right>
        <span slot="badge">!</span>
        <v-icon class="pink--text">account_circle</v-icon>
      </v-badge>
    </v-btn>
    <v-btn icon>
      <v-badge color="pink" right>
        <span slot="badge">6</span>
        <v-icon class="pink--text">shopping_cart</v-icon>
      </v-badge>
    </v-btn>
  </v-toolbar>
</template>

<script>
  // import img1 from '../assets/logo1fefer2.png'
  export default {
    name: 'AppHeader',
  }
</script>

<style>
  nav.v-toolbar {
    box-shadow: none;
  }
</style>
