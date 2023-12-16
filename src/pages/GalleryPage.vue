<script>
export default {
  name: 'gallery-page',
  inject: ['photos'],
}
</script>

<template>
  <div class="order-page">
    <div class="products">
      <div class="product" v-for="photo in photos" :key="photo.id">
        <div class="product__photo">
          <img class="product__img" :src="photo.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
