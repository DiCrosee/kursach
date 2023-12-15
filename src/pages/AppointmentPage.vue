<template>
  <div class="first-component">
    <div class="navigation">
      <router-link to="/" class="nav-button">Главная</router-link>
      <router-link to="/appointment" class="nav-button">Запись на прием</router-link>
      <router-link to="/doctor" class="nav-button">Врачи</router-link>
      <router-link to="/order" class="nav-button">Заказ товара</router-link>
      <router-link to="/gallery" class="nav-button">Фотогалерея</router-link>
      <router-link to="/map" class="nav-button">Карта</router-link>
      <router-link to="/reviews" class="nav-button">Отзывы</router-link>
    </div>
    <div class="blue-block">
      <h1 class="center-text title-text">{{ title }}</h1>
      <p class="center-text subtitle-text">{{ subtitle }}</p>
    </div>
    <div class="white-block">
      <h2 class="center-text title-appointment-text">Запись на прием</h2>
    </div>
    <!-- Форма записи на прием -->
    <AppointmentForm />
  </div>
</template>

<script>
import AppointmentForm from "@/components/AppointmentForm.vue";

export default {
  name: 'AppointmentPage',
  components: {
    AppointmentForm, // Зарегистрируйте компонент
  },
  props: {
    title: String,
    subtitle: String,
  },
};
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
  background-color: #47B8FF;
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
  background-color: #47B8FF;
  padding: 20px 10px 10px 10px;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-button {
  margin: 54px 10px 8px 10px;
  padding: 12px 24px;
  font-family: 'Your-Desired-Font', sans-serif;
  font-size: 16px;
  color: white;
  text-decoration: none;
  background-color: #47B8FF;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

.nav-button:hover {
  background-color: #3067A8;
}

/* appoinment-page */

.title-appointment-text {
  font-family: 'Your-Desired-Font', sans-serif;
  font-size: 24px;
  color: #333; /* Цвет текста в белом блоке */
}

</style>