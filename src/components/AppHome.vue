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
          <v-responsive class="carousel-position" dark>
            <v-container fill-height>
              <v-layout align-center>
                <v-flex>
                  <h3 class="pink-shadow white--text display-1 text-lg-center font-weight-light font-italic">{{ item.title }}</h3>
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
  import img1 from '../assets/banner4.jpg'
  import img5 from '../assets/banner5.jpeg'
  import img2 from '../assets/banner2.jpg'
  import img3 from '../assets/banner3.jpg'
  export default {
    components: {
      CardCarousel
    },
    data: () => ({
      items: [
        {
          src: img1,
          title: "Las mejores marcas y accesorios para verdaderos fanaticos de la ruta.",
          text: "Contenido de la imagen"
        },
        {
          src: img5,
          title: "Enterate de la programación de eventos y acompañame en rutas y salidas.",
          text: "Contenido de la imagen"
        },
        {
          src: img2,
          title: "Luce comoda y bella con la mejor ropa deportiva.",
          text: "Contenido de la imagen"
        },
        {
          src: img3,
          title: "Las mejores marcas y accesorios para verdaderos fanaticos de la montaña.",
          text: "Contenido de la imagen"
        }
      ]
    })
  }
</script>

<style>
  .carousel-position {
    position: absolute !important;
    bottom: 100px;
    width: 100%;
  }
</style>
