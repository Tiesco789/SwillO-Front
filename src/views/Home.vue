<template>
  <div class="beers-container" v-for="beer in beers" :key="beer.id">
    <div class="beer-description">
      <div class="beer-title">
        <h3>{{ beer.title.slice(0, 7) }} {{ beer.title.slice(6) }}</h3>
      </div>
      <p>
        {{ beer.description }}
      </p>
      <div class="beer-info">
        <div>
          <span>TIPO:</span>
          <h3>{{ beer.type }}</h3>
        </div>
        <div>
          <span>IBU:</span>
          <h3>{{ beer.ibu }}</h3>
        </div>
        <div>
          <span>ALCOOL:</span>
          <h3>{{ beer.alcohol }}%</h3>
        </div>
        <div>
          <span> ºC IDEAL:</span>
          <h3>{{ beer.temperature_one }} ºC a {{ beer.temperature_two }}ºC</h3>
        </div>
        <div>
          <span>COPO IDEAL:</span>
          <h3>{{ beer.glass }}</h3>
        </div>
      </div>
    </div>

    <div class="beer-img">
      <img :src="require(`@/assets/${beer.image}`)" alt="" />
    </div>
  </div>
</template>

<script>
import beerData from '../beer.json';

export default {
  data() {
    return {
      beers: beerData,
    };
  },
};
</script>

<style lang="scss" scoped>
.beers-container {
  display: flex;
  margin-bottom: 80px;
  justify-content: center;
  align-items: center;
  margin: 80px auto;
  width: 60%;

  .beer-description {
    .beer-title {
      display: flex;
      h3 {
        color: white;
        margin-bottom: 25px;
        font-size: 1.5rem;
        text-align: center;
      }

      p {
        font-size: 14px;
        font-weight: normal;
        width: 580px;
      }
      ::after {
        content: '';
        height: 1px;
        display: block;
        margin-top: 8px;
        background-color: #e58200;
        width: 180px;
      }
    }

    .beer-info {
      display: flex;
      justify-content: space-evenly;
      padding: 18px;
      align-items: center;
      margin-top: 40px;
      background-color: #201f24;
      border-radius: 8px;
      box-shadow: 0 1px 0 0 #e58200;

      div {
        margin-left: 16px;
        width: 125px;

        span {
          display: flex;
          color: #e58200;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 400;
        }
        h3 {
          font-family: 'Roboto Slab', serif;
          font-size: 24px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
