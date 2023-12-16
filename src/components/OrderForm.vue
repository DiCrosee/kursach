<template>
  <div class="appointment-form">
    <n-form ref="formRef" :model="formValue" :rules="rules" label-placement="top">
      <n-grid :span="24" :x-gap="24">
        <n-form-item-gi :span="8" label="Номер карты" path="cardNumber">
          <n-input
            v-model:value="formValue.cardNumber"
            placeholder="0000 0000 0000 0000"
            :allow-input="onlyAllowNumber"
            maxlength="16"
            :options="doctorsOption"
          />
        </n-form-item-gi>
        <n-form-item-gi :span="8" label="Срок действия" path="expireDate">
          <n-date-picker
            style="width: 100%"
            v-model:value="formValue.expireDate"
            type="month"
            placeholder="Укажите срок действия"
            :format="datetimeFormat"
            clearable
          />
        </n-form-item-gi>
        <n-form-item-gi :span="8" label="Владелец карты" path="cardHolder">
          <n-input v-model:value="formValue.cardHolder" placeholder="Владелец карты" />
        </n-form-item-gi>
        <n-form-item-gi :span="8" label="CVV" path="cvv">
          <n-input
            v-model:value="formValue.cvv"
            :allow-input="onlyAllowNumber"
            maxlength="3"
            placeholder="Код с обратной стороны карты"
          />
        </n-form-item-gi>
        <n-form-item-gi :span="16" label="Адрес доставки" path="address">
          <n-input v-model:value="formValue.address" placeholder="Куда доставить товар" />
        </n-form-item-gi>
      </n-grid>
      <n-button @click="submitForm">Оплатить</n-button>
    </n-form>
  </div>
</template>

<script>
import { useMessage } from 'naive-ui'
import { ref } from 'vue'
export default {
  data() {
    return {
      formType: 'byDoctor',
      datetimeFormat: 'yyyy/MM',
      timePickerProps: {
        format: 'HH:mm',
      },
      // doctors: [
      //   { value: 1, label: "Васильев Егор Владиславович" },
      //   { value: 2, label: "Войтенко Максим Валентинович" },
      //   { value: 3, label: "Храмцова Виктория Игоревна" },
      // ],
      services: [
        { value: 1, label: 'Кастрация' },
        { value: 2, label: 'Стерилизация' },
        { value: 3, label: 'Рентген' },
        { value: 4, label: 'Чипирование' },
        { value: 5, label: 'Прием терапевта' },
      ],
      petTypes: [
        { value: 'Кот', label: 'Кот' },
        { value: 'Собака', label: 'Собака' },
        { value: 'Птица', label: 'Птица' },
        // Добавьте других врачей по необходимости
      ],
    }
  },
  inject: ['doctors'],
  setup() {
    const message = useMessage()
    const formRef = ref(null)
    const formValue = ref({
      cardNumber: '',
      expireDate: null,
      cardHolder: '',
      cvv: '',
      address: '',
    })
    return {
      message,
      formRef,
      formValue,
      onlyAllowNumber: (value) => !value || /^\d+$/.test(value),
    }
  },
  computed: {
    doctorsOption() {
      return this.doctors.map((d) => ({ value: d.id, label: d.name }))
    },
    rules() {
      return {
        cardNumber: {
          required: true,
          message: 'Обязательное поле',
          trigger: ['blur', 'change'],
        },
        expireDate: {
          type: 'number',
          required: true,
          message: 'Обязательное поле',
          trigger: ['blur', 'change'],
        },
        cardHolder: {
          required: true,
          message: 'Обязательное поле',
          trigger: ['input', 'blur'],
        },
        cvv: {
          required: true,
          message: 'Обязательное поле',
          trigger: ['input', 'blur'],
        },
        address: {
          required: true,
          message: 'Обязательное поле',
          trigger: ['input', 'blur'],
        },
        petName: {
          required: true,
          message: 'Обязательное поле',
          trigger: ['input', 'blur'],
        },
        selectedPetType: {
          required: true,
          message: 'Обязательное поле',
          trigger: ['blur', 'change'],
        },
      }
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
          console.log('hour: ', hour)
          return !(9 < hour && hour < 18)
        },
      }
    },

    // isHourDisabled: (hour) => {
    //   return startOfDay(range[1]).valueOf() + hour * h + (h - s) - range[0] < d * 7;
    // },
    submitForm() {
      // Обработка отправки формы
      this.formRef
        ?.validate((errors) => {
          if (!errors) {
            this.message.success(`Заказ оформлен. Адрес доставки: ${this.formValue.address}`)
            this.$router.push({ name: 'home' })
          } else {
            console.log('form not valid', errors)
          }
        })
        .catch((err) => {})
    },
  },
}
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
  background-color: #47b8ff;
  color: white;
  padding: 10px 20px;
  font-family: 'Your-Desired-Font', sans-serif;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #3067a8;
}
</style>
