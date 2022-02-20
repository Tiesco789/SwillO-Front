/* eslint-disable */
<template>
  <h1>Escolha seu produto</h1>

  <div class="store">
    <div class="card" v-for="beer in beers" :key="beer.id">
      <div class="product-img">
        <img :src="require(`@/assets/${beer.image}`)" alt="" />
      </div>
      <div class="info-card">
        <span>{{ beer.title }} | {{ beer.vol }}ml</span>
      </div>
      <span> R$ {{ beer.price }}.00</span>
      <button class="add-to-cart">
        Adicionar ao carrinho
        <img :src="require(`@/assets/cart.svg`)" alt="" />
      </button>
    </div>

    <div class="card" v-for="glass in glasses" :key="glass.id">
      <div class="product-img">
        <img :src="require(`@/assets/${glass.image}`)" alt="" />
      </div>
      <div class="info-card">
        <span>{{ glass.title }} | {{ glass.vol }}ml</span>
      </div>
      <span> R$ {{ glass.price }}.00</span>
      <button class="add-to-cart">
        Adicionar ao carrinho
        <img :src="require(`@/assets/cart.svg`)" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
import beersData from "../beer.json";
import glassData from "../glass.json";

export default {
  data() {
    return {
      glasses: glassData,
      beers: beersData,
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  padding-bottom: 20px;
  margin: 80px 120px;
  border-bottom: 1px solid #2a2633;
}

.store {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2a2633;
    margin: 40px;
    border-radius: 8px;
    width: 280px;
    height: 530px;
    transition: box-shadow 0.1s ease-in-out;

    &:hover {
      box-shadow: 0 0 0 2px #e58200;
    }

    .product-img {
      img {
        height: 300px;
      }
    }

    .add-to-cart {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #e58200;
      border-radius: 8px;
      width: 80%;
      height: 40px;
      margin-top: 20px;
      color: #2a2633;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      font-family: "Roboto Slab", serif;
      transition: background-color 0.1s ease-in-out;

      &:hover {
        background-color: lighten($color: #e58200, $amount: 10%);
      }

      img {
        margin-left: 10px;
      }
    }
  }
}
</style>
