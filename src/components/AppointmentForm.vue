<template>
  <div class="appointment-form">
    <form @submit.prevent="submitForm">
      <!-- Врач и дата приема -->
      <div class="mini-block">
        <div class="form-group">
          <label for="doctor">Выберите врача:</label>
          <select v-model="selectedDoctor" id="doctor" name="doctor">
            <option v-for="doctor in doctors" :key="doctor.id" :value="doctor.id">{{ doctor.name }}</option>
          </select>
        </div>

        <div class="form-group">
          <label for="date">Выберите дату приема:</label>
          <input type="date" v-model="selectedDate" id="date" name="date" required>
        </div>

        <div class="form-group">
          <label for="time">Выберите время приема:</label>
          <input type="time" v-model="selectedTime" id="time" name="time" required>
        </div>
      </div>

      <!-- Контактный телефон -->
      <div class="mini-block">
        <div class="form-group">
          <label for="phone">Контактный телефон:</label>
          <input type="tel" v-model="phoneNumber" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
        </div>
      </div>

      <!-- Имя и фамилия клиента -->
      <div class="mini-block">
        <div class="form-group">
          <label for="firstName">Имя клиента:</label>
          <input type="text" v-model="firstName" id="firstName" name="firstName" required>
        </div>

        <div class="form-group">
          <label for="lastName">Фамилия клиента:</label>
          <input type="text" v-model="lastName" id="lastName" name="lastName" required>
        </div>
      </div>

      <!-- Питомец: кличка и вид -->
      <div class="mini-block">
        <div class="form-group">
          <label for="petName">Кличка питомца:</label>
          <input type="text" v-model="petName" id="petName" name="petName" required>
        </div>

        <div class="form-group">
          <label for="petType">Вид питомца:</label>
          <select v-model="selectedPetType" id="petType" name="petType">
            <option value="Кот">Кот</option>
            <option value="Собака">Собака</option>
            <option value="Птица">Птица</option>
            <!-- Добавьте другие виды питомцев по необходимости -->
          </select>
        </div>
      </div>

      <button type="submit" class="submit-button">Записаться</button>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      doctors: [
        { id: 1, name: 'Васильев Егор Владиславович' },
        { id: 2, name: 'Войтенко Максим Валентинович' },
        { id: 3, name: 'Храмцова Виктория Игоревна' },
        // Добавьте других врачей по необходимости
      ],
      selectedDoctor: '',
      selectedDate: '',
      selectedTime: '',
      phoneNumber: '',
      firstName: '',
      lastName: '',
      petName: '',
      selectedPetType: '',
    };
  },
  methods: {
    submitForm() {
      // Обработка отправки формы
      console.log('Форма отправлена:', this.selectedDoctor, this.selectedDate, this.selectedTime,
          this.phoneNumber, this.firstName, this.lastName, this.petName, this.selectedPetType);
    },
  },
};
</script>

<style scoped>
/* Ваши стили для формы */
.center-text {
  text-align: center;
}

.form-title {
  font-family: 'Your-Desired-Font', sans-serif;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.mini-block {
  display: flex;
  justify-content: space-between;
}

.form-group {
  margin-bottom: 15px;
}

.submit-button {
  background-color: #47B8FF;
  color: white;
  padding: 10px 20px;
  font-family: 'Your-Desired-Font', sans-serif;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #3067A8;
}
</style>
