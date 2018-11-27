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
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn slot="activator" icon>
        <v-badge color="pink" right>
          <span slot="badge">!</span>
          <v-icon class="pink--text">account_circle</v-icon>
        </v-badge>
      </v-btn>
      <!-- <v-btn slot="activator" color="primary" dark>Open Dialog</v-btn> -->
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-form>
              <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
              <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
            </v-form>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    dialog: false
  }
</script>

<style>
  nav.v-toolbar {
    box-shadow: none;
  }
</style>
