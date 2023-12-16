<template>
  <div class="first-component">
    <div class="top-panel">
      <div class="navigation">
        <router-link :to="{ name: 'home' }" class="nav-button">Главная</router-link>
        <router-link :to="{ name: 'appointment' }" class="nav-button">Запись на прием</router-link>
        <router-link :to="{ name: 'doctors' }" class="nav-button">Врачи</router-link>
        <router-link :to="{ name: 'order' }" class="nav-button">Заказ товара</router-link>
        <router-link :to="{ name: 'gallery' }" class="nav-button">Фотогалерея</router-link>
        <router-link :to="{ name: 'map' }" class="nav-button">Карта</router-link>
        <router-link :to="{ name: 'reviews' }" class="nav-button">Отзывы</router-link>
      </div>
      <div class="cart">
        <n-popover trigger="click">
          <template #trigger>
            <n-badge v-model:value="len" :max="15">
              <div style="color: black">
                <n-icon size="32" class="pointer">
                  <CartOutline />
                </n-icon>
              </div>
            </n-badge>
          </template>
          <template #header>
            <n-text strong depth="1"> Корзина </n-text>
          </template>
          <div class="card-content">
            <div class="product-line" v-for="(prod, idx) in order" :key="prod.id + '-' + idx">
              {{ prod.name }} - {{ prod.price }}
            </div>
            <div>Всего: {{ total }}</div>
          </div>
          <template #footer>
            <n-button @click="$router.push({ name: 'make-order' })"> Оформить</n-button>
          </template>
        </n-popover>
      </div>
    </div>

    <div class="blue-block">
      <h1 class="center-text title-text">{{ title }}</h1>
      <p class="center-text subtitle-text">{{ subtitle }}</p>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
// import { RouterLink, RouterView } from "vue";

import { CartOutline } from '@vicons/ionicons5'
import _ from 'lodash'

export default {
  name: 'RootView',
  components: { CartOutline },
  inject: ['order'],
  data: () => ({
    // len: 0,
    title: 'Ветеринарная клиника',
    subtitle: 'Ветеринарная клиника им. Васильева',
  }),
  computed: {
    len() {
      return _.sum(this.order.map((p) => 1)) || 0
    },
    total() {
      return _.sum(this.order.map((p) => p.price)) || 0
    },
  },
  // watch: {
  //   order: {
  //     handler(newValue, oldValue) {
  //       console.log('w order')
  //       this.len = _.sum(newValue.map((p) => 1))
  //     },
  //     deep: true,
  //     immediate: true,
  //   },
  // },
}
</script>

<style scoped>
.center-text {
  text-align: center;
}

.title-text {
  font-family: 'Your-Desired-Font', sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: white;
}

.subtitle-text {
  font-family: 'Your-Desired-Font', sans-serif;
  font-size: 26px;
  color: white;
}

.blue-block {
  background-color: #47b8ff;
  padding: 20px;
}

.white-block {
  background-color: white;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation {
  padding: 20px 10px 10px 10px;
  text-align: center;
}

.nav-button {
  margin: 54px 10px 8px 10px;
  padding: 12px 24px;
  font-family: 'Your-Desired-Font', sans-serif;
  font-size: 16px;
  color: white;
  text-decoration: none;
  background-color: #47b8ff;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

.nav-button:hover {
  background-color: #3067a8;
}

/* appoinment-page */

.title-appointment-text {
  font-family: 'Your-Desired-Font', sans-serif;
  font-size: 24px;
  color: #333; /* Цвет текста в белом блоке */
}
</style>
