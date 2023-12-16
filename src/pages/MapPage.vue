<script>
import { loadScript, unloadScript } from 'vue-plugin-load-script'
export default {
  name: 'map-page',
  mounted() {
    loadScript('/map.js').then(() => {})
  },
  beforeUnmount() {
    unloadScript('/map.js').then(() => {})
  },
}
</script>

<template>
  <div class="map">
    <div class="map__info">
      <div class="map__address">
        <p>Яковлева, 19</p>
        <p>Октябрьский район, Томск 634003</p>
      </div>
      <div class="map__frame">
        <iframe
          id="map_388652659"
          frameborder="0"
          width="100%"
          height="600px"
          sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
