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
          :src="require(`@/assets/${item.src}`)"
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

  export default {
    components: {
      CardCarousel
    },
    data: () => ({
      items: [
        {
          src: "banner4.jpg",
          title: "Las mejores marcas y accesorios para verdaderos fanaticos de la ruta.",
          text: "Contenido de la imagen"
        },
        {
          src: "banner5.jpeg",
          title: "Enterate de la programación de eventos y acompañame en rutas y salidas.",
          text: "Contenido de la imagen"
        },
        {
          src: "banner2.jpg",
          title: "Luce comoda y bella con la mejor ropa deportiva.",
          text: "Contenido de la imagen"
        },
        {
          src: "banner3.jpg",
          title: "Las mejores marcas y accesorios para verdaderos fanaticos de la montaña.",
          text: "Contenido de la imagen"
        }
      ]
    }),
    mounted: function () { 
      this.$root.$emit('changeToolbar', {
        color: "transparent",
        app: false
      });
    }
  }
</script>

<style>
  .carousel-position {
    position: absolute !important;
    bottom: 100px;
    width: 100%;
  }
</style>
