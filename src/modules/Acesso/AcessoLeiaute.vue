<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <router-view />
    </v-container>
  </v-content>
</template>

<script>
/**
 * @link https://vuetifyjs.com/en/examples/layouts/centered
 */
export default {
  name: 'AcessoLeiaute',
  props: {
    source: String
  }
}
</script>
