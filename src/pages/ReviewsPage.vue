<script>
import { loadScript, unloadScript } from 'vue-plugin-load-script'
export default {
  name: 'reviews-page',
  mounted() {
    loadScript('https://res.smartwidgets.ru/app.js').then(() => {})
  },
  beforeUnmount() {
    unloadScript('https://res.smartwidgets.ru/app.js').then(() => {})
  },
}
</script>

<template>
  <div class="sw-app" data-app="38fc8e845a38f1b270cccfd323a250a0"></div>
</template>

<style scoped></style>
