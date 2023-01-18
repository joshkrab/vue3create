<template>
  <div class="form">
    <h3>Check the weather now:</h3>

    <input v-model="city" class="input" type="text" placeholder="Input city name">

    <button class="btn" @click="getWeather">Get weather</button>

    <div class="output">
      <div class="temperature">{{temperature}}</div>
      <div class="wind">{{wind}}</div>
      <div class="pressure">{{pressure}}</div>
    </div>

    <div class="out404">{{notFound}}</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      city: '',
      temperature: '',
      wind: '',
      pressure: '',
      notFound: '',
    }
  },

  methods: {
    async getWeather () {
      if (!this.city) {
        alert('Input city name');
        return;
      }

      this.temperature = ``;
      this.wind = ``;
      this.pressure = ``;

      let { data } = await axios.get(`http://127.0.0.1:1880/weather/${this.city}`);
      console.log(data);
      this.city = '';

      if (!data.content.main) {
        this.notFound = data.content
      } else {
        this.notFound = ``;
        this.temperature = `Temperature: ${Math.round(data.content.main.temp)}°C`;
        this.wind = `Wind: ${Math.round(data.content.wind.speed)}m/s`;
        this.pressure = `Pressure: ${Math.round(data.content.main.pressure * 0.001)}bar`;
      }
    }
  }
}

</script>

<style>
.form {
  margin: 20px 0px 30px 0px;
  display: flex;
  flex-direction: column;
}
</style>