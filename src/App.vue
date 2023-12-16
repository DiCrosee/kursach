<!-- App.vue -->

<template>
  <div id="app">
    <n-config-provider
      abstract
      :locale="locale"
      :date-locale="dateLocale"
      :theme-overrides="themeOverrides"
    >
      <n-message-provider>
        <RootView></RootView>
      </n-message-provider>
    </n-config-provider>
  </div>
</template>

<script>
// import HomePage from './pages/HomePage.vue'
// import AppointmentPage from './pages/AppointmentPage.vue'
import RootView from './pages/RootView.vue'
import { NConfigProvider, NNotificationProvider, NMessageProvider } from 'naive-ui'
import { ruRU, dateRuRU } from 'naive-ui'
import naiveUiThemeOverrides from '../naive-ui-theme-overrides.json'
import { ref, provide } from 'vue'

export default {
  name: 'App',
  components: {
    NConfigProvider,
    NMessageProvider,
    // HomePage,
    RootView,
  },
  setup() {
    const themeOverrides = naiveUiThemeOverrides
    const order = ref([])
    provide('order', order)
    return {
      themeOverrides,
      order,
    }
  },
  provide: {
    photos: [
      {
        id: 1,
        image: '/photo/oskar.jpg',
        name: 'Product',
      },
      {
        id: 1,
        image: '/photo/oskar.jpg',
        name: 'Product',
      },
      {
        id: 1,
        image: '/photo/oskar.jpg',
        name: 'Product',
      },
      {
        id: 1,
        image: '/photo/oskar.jpg',
        name: 'Product',
      },
      {
        id: 1,
        image: '/photo/oskar.jpg',
        name: 'Product',
      },
      {
        id: 1,
        image: '/photo/oskar.jpg',
        name: 'Product',
      },
      {
        id: 1,
        image: '/photo/oskar.jpg',
        name: 'Product',
      },
      {
        id: 1,
        image: '/photo/oskar.jpg',
        name: 'Product',
      },
      {
        id: 1,
        image: '/photo/oskar.jpg',
        name: 'Product',
      },
    ],
    products: [
      {
        id: 1,
        image: '/photo/oskar.jpg',
        name: 'Product',
        price: 2000,
      },
      {
        id: 1,
        image: '/photo/oskar.jpg',
        name: 'Product',
        price: 2000,
      },
      {
        id: 1,
        image: '/photo/oskar.jpg',
        name: 'Product',
        price: 2000,
      },
      {
        id: 1,
        image: '/photo/oskar.jpg',
        name: 'Product',
        price: 2000,
      },
      {
        id: 1,
        image: '/photo/oskar.jpg',
        name: 'Product',
        price: 2000,
      },
      {
        id: 1,
        image: '/photo/oskar.jpg',
        name: 'Product',
        price: 2000,
      },
      {
        id: 1,
        image: '/photo/oskar.jpg',
        name: 'Product',
        price: 2000,
      },
      {
        id: 1,
        image: '/photo/oskar.jpg',
        name: 'Product',
        price: 2000,
      },
      {
        id: 1,
        image: '/photo/oskar.jpg',
        name: 'Product',
        price: 2000,
      },
    ],
    doctors: [
      {
        id: 1,
        name: 'Васильев Егор Владиславович',
        position: 'главный врач',
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        photo: '/photo/oskar.jpg',
      },
      {
        id: 2,
        name: 'Войтенко Максим Валентинович',
        position: 'зам.главного врача',
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        photo: '/photo/oskar.jpg',
      },
      {
        id: 3,
        name: 'Храмцова Виктория Игоревна',
        position: 'терапевт',
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        photo: '/photo/oskar.jpg',
      },
      {
        id: 4,
        name: 'Витюгов Владимир Евгеньевич',
        position: 'хирург',
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        photo: '/photo/oskar.jpg',
      },
      {
        id: 5,
        name: 'Марьясов Владимир Александрович',
        position: 'анестезиолог',
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        photo: '/photo/oskar.jpg',
      },
    ],
  },
  computed: {
    locale() {
      return ruRU
    },
    dateLocale() {
      return dateRuRU
    },
  },
}
</script>

<style>
/* Твои стили, если есть */
</style>
