<template>
  <v-content>
    <v-container>
      <v-layout row wrap>
      <v-flex xs12>
      <section>
        <h1>{{ $t('message') }}</h1>
      </section>
      </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'About',
    mounted: function () {
      this.$root.$emit('changeToolbar', {
        color: "grey darken-4",
        app: true
      });
    }
  }
</script>
