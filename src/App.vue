<!-- App.vue -->

<template>
  <div id="app">
<!--    <HomePage title="Ветеринарная клиника" subtitle="Ветеринарная клиника им. Васильева"/>-->
    <AppointmentPage title="Ветеринарная клиника" subtitle="Ветеринарная клиника им. Васильева"/>
  </div>
</template>

<script>
// import HomePage from './pages/HomePage.vue'
import AppointmentPage from './pages/AppointmentPage.vue'

export default {
  name: 'App',
  components: {
    // HomePage,
    AppointmentPage
  }
}
</script>

<style>
/* Твои стили, если есть */
</style>