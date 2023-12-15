<!-- homepage -->

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
      <!-- Отображение фактов о котах и фотографий -->
      <div class="content-container">
        <!-- Блок с фактами о котах -->
        <div class="cat-facts-container">
          <div class="cat-facts">
            <h2 class="center-text cat-facts-title">Интересные факты о кошках</h2>
            <ul class="cat-facts-list">
              <li v-for="fact in catFacts" :key="fact.length" class="cat-fact-item">
                <span class="fact-text">{{ fact.fact }}</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- Блок с фотографиями -->
        <div class="photos-container">
          <div class="caption-container">
            <p class="caption-text">Вот вам немного милых котиков!</p>
          </div>
          <img src="https://avatars.dzeninfra.ru/get-zen_doc/96506/pub_5be3e9401bff3000ab1c55e3_5be3e9e829b2fc00a917866c/orig" alt="Photo 1" class="photo-item" />
          <img src="../photo/oskar.jpg" alt="Photo 2" class="photo-item" />
          <img src="https://s9.travelask.ru/uploads/post/000/029/496/main_image/full-8be99e670c82a7dd22eeab986855ecb8.jpg" alt="Photo 3" class="photo-item" />
          <img src="https://cs12.pikabu.ru/images/big_size_comm_an/2021-01_6/161187164813667781.gif" alt="Photo 4" class="photo-item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomePage',
  props: {
    title: String,
    subtitle: String,
  },
  data() {
    return {
      catFacts: [],
    };
  },
  mounted() {
    // Выполняем запрос к API при загрузке компонента.
    this.fetchCatFacts();
  },
  methods: {
    async fetchCatFacts() {
      try {
        // Выполняем запрос к обновленному API о фактах о котах.
        const response = await axios.get('https://catfact.ninja/facts?max_length=600&limit=20');
        this.catFacts = response.data.data; // Получаем факты из ответа API.
      } catch (error) {
        console.error('Error fetching cat facts:', error);
      }
    },
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
  display: flex;
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

.content-container {
  display: flex; /* Изменено на flex для размещения блоков в строку */
}

.cat-facts-container {
  width: 50%;
  margin: 20px 20px 20px 0; /* Изменено для отступа справа */
}

.cat-facts {
  border: 2px solid #47B8FF;
  border-radius: 8px;
  padding: 20px;
}

.cat-facts-title {
  font-family: 'Your-Desired-Font', sans-serif;
  font-size: 28px;
  color: #333;
}

.cat-facts-list {
  list-style: none;
  padding: 0;
}

.cat-fact-item {
  margin-bottom: 15px;
}

.fact-text {
  font-family: 'Your-Desired-Font', sans-serif;
  font-size: 22px;
  color: #333;
}

.photos-container {
  width: 50%; /* Задаем ширину блока с фотографиями */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px; /* Добавлен отступ сверху */
}

.photo-item {
  width: 49%; /* Задаем ширину каждой фотографии */
  margin-bottom: 10px;
}


.caption-container {
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  border: 2px solid #47B8FF;
  padding: 10px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 10px;
}

.caption-text {
  font-family: 'Your-Desired-Font', sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: #46b7fd;
}
</style>
