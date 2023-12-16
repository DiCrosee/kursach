<template>
  <div class="first-component">
    <div class="white-block">
      <h2 class="center-text title-appointment-text">Оформление заказа</h2>
    </div>
    <!-- Форма записи на прием -->
    <order-form></order-form>
  </div>
</template>

<script>
import OrderForm from '@/components/OrderForm.vue'

export default {
  name: 'MakeOrderPage',
  components: {
    OrderForm, // Зарегистрируйте компонент
  },
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
  background-color: #47b8ff;
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
