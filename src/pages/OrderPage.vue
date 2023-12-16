<script>
export default {
  name: 'order-page',
  inject: ['order', 'products'],
}
</script>

<template>
  <div class="order-page">
    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <div class="product__photo">
          <img class="product__img" :src="product.image" />
        </div>
        <div class="product__text">
          <p>{{ product.name }}</p>
        </div>
        <div class="product__price">
          <p>{{ product.price }}&nbsp;руб.</p>
        </div>
        <div class="product__buy">
          <n-button @click="order.push(product)">в корзину</n-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
