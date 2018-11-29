<template>
  <v-content>
    <section>
      <v-carousel
        hide-delimiters
        height="657"
      >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        >
          <v-responsive class="textCarousel" dark>
            <v-container fill-height>
              <v-layout align-center>
                <v-flex>
                  <h3 class="white--text display-3 text-lg-right">{{ item.title }}</h3>
                  <!-- <span class="white--text subheading">{{ item.text }}</span> -->
                </v-flex>
              </v-layout>
            </v-container>
          </v-responsive>
        </v-carousel-item>
      </v-carousel>
    </section>
    <section>
      <CardCarousel/>
    </section>
  </v-content>
</template>

<script>
  import CardCarousel from './CardCarousel.vue'
  import img1 from '../assets/banner1.jpg'
  import img2 from '../assets/banner2.jpg'
  import img3 from '../assets/3_ICELAND_FLYN_FINAL-1377318_1920x.jpg'
  export default {
    components: {
      CardCarousel
    },
    data: () => ({
      items: [
        {
          src: img1,
          title: "Texto",
          text: "Contenido de la imagen"
        },
        {
          src: img2,
          title: "Texto",
          text: "Contenido de la imagen"
        },
        {
          src: img3,
          title: "Texto",
          text: "Contenido de la imagen"
        }
      ]
    })
  }
</script>

<style>
  .textCarousel {
    position: absolute !important;
    bottom: 100px;
    width: 100%;
  }
</style>
