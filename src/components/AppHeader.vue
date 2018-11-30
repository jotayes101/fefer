<template>
  <v-toolbar
    fixed
    :color="colorToolbar"
    v-scroll="onScroll"
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
    <v-dialog max-width="300px">
      <v-btn slot="activator" icon>
          <v-icon class="pink--text">account_circle</v-icon>
      </v-btn>
      <v-card>
        <v-card-title
          class="headline pink darken-2 white--text"
        >
          <span class="headline">Ingresar</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-form>
              <v-text-field prepend-icon="person" name="login" label="Correo electrónico" type="text"></v-text-field>
              <v-text-field prepend-icon="lock" name="password" label="Contraseña" id="password" type="password"></v-text-field>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="pink darken-2 white--text">Ingresar</v-btn>
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
  export default {
    name: 'AppHeader',
    data: () => ({
      colorToolbar: "transparent"
    }),
    methods: {
      onScroll () {
        if (typeof window === 'undefined') return
        const top = window.pageYOffset ||
          document.documentElement.offsetTop ||
          0
        this.colorToolbar = (top > 100) ? "grey darken-4" : "transparent";
      }
    }
  }
</script>

<style>
  nav.v-toolbar {
    box-shadow: none;
  }
</style>
