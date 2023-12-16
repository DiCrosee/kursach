<script>
export default {
  name: 'doctors-page',
  inject: ['doctors'],
}
</script>

<template>
  <div class="doctors-page">
    <n-tabs type="line" animated placement="left" style="height: 500px">
      <n-tab-pane v-for="doctor in doctors" :name="doctor.id" :tab="doctor.name" :key="doctor.id">
        <div class="doctors-page__info">
          <div class="doctors-page__photo">
            <img class="doctors-page__img" :src="doctor.photo" />
          </div>
          <div class="doctors-page__text">
            <h1>{{ doctor.name }}</h1>
            <h3>{{ doctor.position }}</h3>
            <p>{{ doctor.description }}</p>
          </div>
        </div>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<style scoped></style>
