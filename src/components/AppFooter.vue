<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      flat
      tile
      class="grey darken-4 pink--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="socialNetwork in socialNetworks"
          :key="socialNetwork.icon"
          class="mx-3 pink--text"
          :href="socialNetwork.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ socialNetwork.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="pink--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="pink--text">
        &copy;2018 — <strong>Fefer</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>


<script>
  export default {
    name: 'AppFooter',
    data() {
      return {
        socialNetworks: [
          {
            icon: 'fab fa-facebook',
            link: 'https://www.facebook.com/fefermiranda',
          },
          {
            icon: 'fab fa-twitter',
            link: 'https://www.twitter.com',
          },
          {
            icon: 'fab fa-youtube',
            link: 'https://www.youtube.com',
          },
          {
            icon: 'fab fa-instagram',
            link: 'https://www.instagram.com/fefer19',
          }
        ]
      }
    }
  }
</script>

<style>

</style>
