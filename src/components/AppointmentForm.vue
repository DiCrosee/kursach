<template>
  <div class="appointment-form">
    <n-tabs
      size="large"
      v-model:value="formType"
      justify-content="space-evenly"
      type="line"
      style="margin-bottom: 20px"
    >
      <n-tab name="byDoctor"> Запись по врачу </n-tab>
      <n-tab name="byService"> Запись по услуге </n-tab>
    </n-tabs>
    <n-form
      ref="formRef"
      :model="formValue"
      :rules="rules"
      label-placement="top"
    >
      <n-grid :span="24" :x-gap="24">
        <n-form-item-gi
          v-if="formType == 'byDoctor'"
          :span="16"
          label="Врач"
          path="selectedDoctor"
        >
          <n-select
            v-model:value="formValue.selectedDoctor"
            placeholder="Выберите врача"
            :options="doctorsOption"
          />
        </n-form-item-gi>
        <n-form-item-gi v-else :span="16" label="Услуга" path="selectedService">
          <n-select
            v-model:value="formValue.selectedService"
            placeholder="Выберите услугу"
            :options="services"
          />
        </n-form-item-gi>
        <n-form-item-gi :span="8" label="Дата приема" path="selectedDateTime">
          <n-date-picker
            style="width: 100%"
            v-model:value="formValue.selectedDateTime"
            type="datetime"
            placeholder="Выберите дату приема"
            :format="datetimeFormat"
            :timePickerProps="timePickerProps"
            :is-time-disabled="timeDisabled"
            clearable
          />
        </n-form-item-gi>
        <n-form-item-gi :span="8" label="Контактный телефон" path="phoneNumber">
          <n-input
            v-model:value="formValue.phoneNumber"
            placeholder="Введите телефон"
          />
        </n-form-item-gi>
        <n-form-item-gi :span="8" label="Имя" path="firstName">
          <n-input
            v-model:value="formValue.firstName"
            placeholder="Введите имя"
          />
        </n-form-item-gi>
        <n-form-item-gi :span="8" label="Фамилия" path="lastName">
          <n-input
            v-model:value="formValue.lastName"
            placeholder="Введите фамилию"
          />
        </n-form-item-gi>
        <n-form-item-gi :span="8" label="Кличка питомца" path="petName">
          <n-input
            v-model:value="formValue.petName"
            placeholder="Введите кличку питомца"
          />
        </n-form-item-gi>
        <n-form-item-gi :span="8" label="Вид питомца" path="selectedPetType">
          <n-select
            v-model:value="formValue.selectedPetType"
            placeholder="Выберите вид питомца"
            :options="petTypes"
          />
        </n-form-item-gi>
      </n-grid>
      <n-button @click="submitForm">Записаться</n-button>
    </n-form>
  </div>
</template>

<script>
import { useMessage } from "naive-ui";
import { ref } from "vue";
export default {
  data() {
    return {
      formType: "byDoctor",
      datetimeFormat: "yyyy-MM-dd HH:mm",
      timePickerProps: {
        format: "HH:mm",
      },
      // doctors: [
      //   { value: 1, label: "Васильев Егор Владиславович" },
      //   { value: 2, label: "Войтенко Максим Валентинович" },
      //   { value: 3, label: "Храмцова Виктория Игоревна" },
      // ],
      services: [
        { value: 1, label: "Кастрация" },
        { value: 2, label: "Стерилизация" },
        { value: 3, label: "Рентген" },
        { value: 4, label: "Чипирование" },
        { value: 5, label: "Прием терапевта" },
      ],
      petTypes: [
        { value: "Кот", label: "Кот" },
        { value: "Собака", label: "Собака" },
        { value: "Птица", label: "Птица" },
        // Добавьте других врачей по необходимости
      ],
    };
  },
  inject: ["doctors"],
  setup() {
    const message = useMessage();
    const formRef = ref(null);
    const formValue = ref({
      selectedDoctor: null,
      selectedService: null,
      selectedDateTime: null,
      phoneNumber: "",
      firstName: "",
      lastName: "",
      petName: "",
      selectedPetType: "",
    });
    return {
      message,
      formRef,
      formValue,
    };
  },
  computed: {
    doctorsOption() {
      return this.doctors.map((d) => ({ value: d.id, label: d.name }));
    },
    rules() {
      return {
        selectedDoctor: {
          required: true,
          type: "number",
          message: "Обязательное поле",
          trigger: ["blur", "change"],
        },
        selectedService: {
          required: true,
          type: "number",
          message: "Обязательное поле",
          trigger: ["blur", "change"],
        },
        selectedDateTime: {
          type: "number",
          required: true,
          message: "Обязательное поле",
          trigger: ["blur", "change"],
        },
        phoneNumber: {
          required: true,
          message: "Обязательное поле",
          trigger: ["input", "blur"],
        },
        firstName: {
          required: true,
          message: "Обязательное поле",
          trigger: ["input", "blur"],
        },
        lastName: {
          required: true,
          message: "Обязательное поле",
          trigger: ["input", "blur"],
        },
        petName: {
          required: true,
          message: "Обязательное поле",
          trigger: ["input", "blur"],
        },
        selectedPetType: {
          required: true,
          message: "Обязательное поле",
          trigger: ["blur", "change"],
        },
      };
    },
  },

  methods: {
    // timeDisabled(current, phase, value) {
    //   return {
    //     isHourDisabled
    //   }
    // },

    timeDisabled(ts) {
      // const date = new Date(ts).getDate();
      return {
        isHourDisabled: (hour) => {
          console.log("hour: ", hour);
          return !(9 < hour && hour < 18);
        },
      };
    },

    // isHourDisabled: (hour) => {
    //   return startOfDay(range[1]).valueOf() + hour * h + (h - s) - range[0] < d * 7;
    // },
    submitForm() {
      // Обработка отправки формы
      this.formRef
        ?.validate((errors) => {
          if (!errors) {
            this.message.success(
              `Вы записались на прием ${new Date(
                this.formValue.selectedDateTime
              )}. Мы позвоним вам на номер: ${this.formValue.phoneNumber}`
            );
            this.$router.push({ name: "home" });
          } else {
            console.log("form not valid", errors);
          }
        })
        .catch((err) => {});
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
  font-family: "Your-Desired-Font", sans-serif;
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
  background-color: #47b8ff;
  color: white;
  padding: 10px 20px;
  font-family: "Your-Desired-Font", sans-serif;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #3067a8;
}
</style>
