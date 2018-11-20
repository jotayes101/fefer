<template>
  <div class="layout v-carousel" style="padding-top: 48px; padding-bottom:48px;">
    <div class="flex xs1 sm1 md1 lg1 offset-sm1">
      <div class="v-carousel__prev">
        <button type="button" class="v-btn v-btn--icon">
          <div class="v-btn__content">
            <i aria-hidden="true" class="v-icon fas fa-chevron-left grey--text" style="font-size: 46px;"></i>
          </div>
        </button>
      </div>
    </div>
    <div class="flex xs12 sm6 md3 lg3 offset-sm1">
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          class="mx-auto"
          color="grey lighten-4"
          max-width="600"
        >
          <v-img
            :aspect-ratio="16/9"
            src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out pink darken-2 v-card--reveal display-3 white--text"
                style="height: 100%;"
              >
                $14.99
              </div>
            </v-expand-transition>
          </v-img>
          <v-card-text
            class="pt-4"
            style="position: relative;"
          >
            <v-btn
              absolute
              color="pink"
              class="white--text"
              fab
              large
              right
              top
            >
              <v-icon>mdi-cart</v-icon>
            </v-btn>
            <div class="font-weight-light grey--text title mb-2">For the perfect</div>
            <h3 class="display-1 font-weight-light pink--text mb-2">QW cooking</h3>
            <div class="font-weight-light title mb-2">
              Our Vintage kitchen utensils.
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
    </div>
    <div class="flex xs12 sm6 md3 lg3 offset-sm1">
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          class="mx-auto"
          color="grey lighten-4"
          max-width="600"
        >
          <v-img
            :aspect-ratio="16/9"
            src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out pink darken-2 v-card--reveal display-3 white--text"
                style="height: 100%;"
              >
                $14.99
              </div>
            </v-expand-transition>
          </v-img>
          <v-card-text
            class="pt-4"
            style="position: relative;"
          >
            <v-btn
              absolute
              color="pink"
              class="white--text"
              fab
              large
              right
              top
            >
              <v-icon>mdi-cart</v-icon>
            </v-btn>
            <div class="font-weight-light grey--text title mb-2">For the perfect</div>
            <h3 class="display-1 font-weight-light pink--text mb-2">QW cooking</h3>
            <div class="font-weight-light title mb-2">
              Our Vintage kitchen utensils.
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
    </div>
    <div class="flex xs12 sm6 md3 lg3 offset-sm1">
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          class="mx-auto"
          color="grey lighten-4"
          max-width="600"
        >
          <v-img
            :aspect-ratio="16/9"
            src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out pink darken-2 v-card--reveal display-3 white--text"
                style="height: 100%;"
              >
                $14.99
              </div>
            </v-expand-transition>
          </v-img>
          <v-card-text
            class="pt-4"
            style="position: relative;"
          >
            <v-btn
              absolute
              color="pink"
              class="white--text"
              fab
              large
              right
              top
            >
              <v-icon>mdi-cart</v-icon>
            </v-btn>
            <div class="font-weight-light grey--text title mb-2">For the perfect</div>
            <h3 class="display-1 font-weight-light pink--text mb-2">QW cooking</h3>
            <div class="font-weight-light title mb-2">
              Our Vintage kitchen utensils.
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
    </div>
    <div class="flex xs1 sm1 md1 lg1 offset-sm1">
      <div class="v-carousel__next">
        <button type="button" class="v-btn v-btn--icon">
          <div class="v-btn__content">
            <i aria-hidden="true" class="v-icon fas fa-chevron-right grey--text" style="font-size: 46px;"></i>
          </div>
          </button>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CardCarousel',
  }
</script>

<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
  }
</style>
