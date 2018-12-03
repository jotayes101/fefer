<template>
  <v-toolbar
    fixed
    dark
    :color="colorToolbar"
    v-scroll="onScroll"
  >
    <v-toolbar-title class="white--text font-weight-black display-2 pink-shadow text-lowercase">Fefer</v-toolbar-title>
    <!-- <v-img src="../assets/logo1fefer2.png" aspect-ratio="1.7"></v-img> -->
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn class="white--text pink-shadow font-weight-black" flat>Woman</v-btn>
      <v-btn class="white--text pink-shadow font-weight-black" flat>Men</v-btn>
      <v-btn class="white--text pink-shadow font-weight-black" flat>Accesories</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn
      icon
      @click="accountFunc"
    >
        <v-icon class="white--text pink-shadow">account_circle</v-icon>
    </v-btn>
    <v-dialog v-model="dialogLogin" max-width="300px">
      <v-card>
        <v-container grid-list-md>
          <v-form>
            <v-text-field prepend-icon="person" name="login" label="Correo electrónico" type="text"></v-text-field>
            <v-text-field prepend-icon="lock" name="password" label="Contraseña" id="password" type="password"></v-text-field>
            <div class="text-md-right" style="margin-bottom: 15px;">
              <a class="link-custom">Olvidaste tu contraseña?</a>
            </div>
          </v-form>
          <v-btn block color="pink darken-1 white--text">Ingresar</v-btn>
          <v-btn
            slot="activator"
            flat
            style="text-transform: none;"
            block
            color="grey darken-1"
            @click="anyAccount"
          >
            No tienes una cuenta?
          </v-btn>
          <v-dialog v-model="dialogRegister" persistent max-width="600px">
            <v-card>
              <v-card-title>
                <span class="headline">Registro de usuario</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm12 md6>
                      <v-text-field label="Nombres*" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm12 md6>
                      <v-text-field label="Apellidos*" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm12 md6>
                      <v-text-field label="Correo electrónico*" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm12 md6>
                      <v-text-field label="Contraseña*" type="password" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-select
                        :items="['0-17', '18-29', '30-54', '54+']"
                        label="Rango de edad*"
                        required
                      ></v-select>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-autocomplete
                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                        label="Intereses"
                        multiple
                      ></v-autocomplete>
                    </v-flex>
                  </v-layout>
                </v-container>
                <small>*Indica que el dato es requerido</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="grey darken-1" flat @click.native="dialogRegister = false">Cancelar</v-btn>
                <v-btn color="pink darken-1 white--text" @click.native="dialogRegister = false">Registrarse</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-container>
      </v-card>
    </v-dialog>
    <v-btn icon>
      <v-badge color="pink darken-1" right>
        <span slot="badge">6</span>
        <v-icon class="white--text pink-shadow">shopping_cart</v-icon>
      </v-badge>
    </v-btn>

    <v-menu  offset-y>
      <v-btn
        slot="activator"
        flat
        style="min-width: 48px"
      >
        <img
          class="language-selected"
          src="@/assets/img/flags/spain.svg"
        >
      </v-btn>
      <v-list style="padding: 0px;">
        <div class="subheader-custom">
          <!-- <span style="left: auto; right: 5px; color: #6f47d0 line-height: 0;
          display: inline-block;
          overflow: hidden;
          height: 11px;
          width: 40px;
          top: 0;
          position: absolute;"></span> -->
          <span class="white--text text-md-center font-weight-light">Elige tu idioma</span>
        </div>
        <v-list-tile
          v-for="language in languages"
          :key="language.locale"
          @click=""
        >
          <v-list-tile-avatar>
            <img
              class="language-list"
              :src="require(`@/assets/img/flags/${language.flag}.svg`)"
            >
          </v-list-tile-avatar>
          <v-list-tile-title v-html="language.name"></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>

  import languages from '@/data/i18n/languages.json'
  export default {
    name: 'AppHeader',
    data: () => ({
      languages,
      colorToolbar: "transparent",
      dialogLogin: false,
      dialogRegister: false
    }),
    methods: {
      onScroll () {
        if (typeof window === 'undefined') return
        const top = window.pageYOffset ||
          document.documentElement.offsetTop ||
          0
        this.colorToolbar = (top > 100) ? "grey darken-4" : "transparent";
      },
      accountFunc () {
        //TODO: CHANGE FOR LOGIN VALIDATION
        if (true) {
          this.dialogLogin = true;
        } else {
          console.log("User logged");
        }
      },
      anyAccount () {
        this.dialogLogin = false;
        this.dialogRegister = true;
      }
    }
  }
</script>

<style>
  nav.v-toolbar {
    box-shadow: none;
  }
  a.link-custom:hover {
    text-decoration: underline;
    cursor: pointer;
    color: #D81B60;
    font-size: 13px;
  }
  img.language-selected {
    border-radius: 50%!important;
    width: 26px;
  }
  img.language-list {
    border-radius: 50%!important;
    width: 22px !important;
    height: 22px !important;
  }
  .subheader-custom {
    padding-top: 13px;
    height: 48px;
    text-align: center !important;
    background-image: url('../../assets/img/quick_actions_bg.jpg');
    background-size: cover;
  }
</style>
