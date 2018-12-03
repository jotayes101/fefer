<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      flat
      tile
      class="grey darken-4 white--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="socialNetwork in socialNetworks"
          :key="socialNetwork.icon"
          :class="socialNetwork.class"
          :href="socialNetwork.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ socialNetwork.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2018 — <strong>fefer</strong>
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
            class: "mx-3 white--text back-facebook"
          },
          {
            icon: 'fab fa-twitter',
            link: 'https://www.twitter.com',
            class: "mx-3 white--text back-twitter"
          },
          {
            icon: 'fab fa-youtube',
            link: 'https://www.youtube.com',
            class: "mx-3 white--text back-youtube"
          },
          {
            icon: 'fab fa-instagram',
            link: 'https://www.instagram.com/fefer19',
            class: "mx-3 white--text back-instagram"
          }
        ]
      }
    }
  }
</script>

<style>
  .back-facebook:hover {
    background-color: #3b5993;
  }
  .back-twitter:hover {
    background-color: #55a8ea;
  }
  .back-instagram:hover {
    background-image: url(../assets/img/buttons/instagram-bg.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-transition: background-color 1000ms linear;
    -ms-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;
  }
  .back-youtube:hover {
    background-image: linear-gradient(90deg,#df2d27 0,#b9171d);
    background-repeat: repeat-x;
  }
</style>
