<template>
  <div>
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
          ></v-carousel-item>
        </v-carousel>
      </section>
      <section>
        <CardCarousel/>
      </section>
    </v-content>
  </div>
</template>

<script>
  import CardCarousel from './CardCarousel.vue'
  import img1 from '../assets/1_ICELAND_FLYN_FINAL-0132_1920x.jpg'
  import img2 from '../assets/2_ICELAND_FLYN_FINAL-1388284-2_1920x.jpg'
  import img3 from '../assets/3_ICELAND_FLYN_FINAL-1377318_1920x.jpg'
  export default {
    components: {
      CardCarousel
    },
    data: () => ({
      items: [
        {
          src: img1
        },
        {
          src: img2
        },
        {
          src: img3
        }
      ]
    })
  }
</script>

<style>

</style>
