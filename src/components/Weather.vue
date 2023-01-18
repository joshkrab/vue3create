<template>
  <div class="form">
    <h3>Check the weather now:</h3>

    <input v-model="city" class="input" type="text" placeholder="Input city name">

    <button class="btn" @click="getWeather">Get weather</button>

    <div v-bind:class="outClasses.join(' ')">
      <div>{{temperature}}</div>
      <div>{{wind}}</div>
      <div>{{pressure}}</div>
    </div>

    <div v-bind:class="out404Classes.join(' ')">{{notFound}}</div>
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
      outClasses: ['output'],
      out404Classes: ['out404'],
    }
  },

  methods: {
    async getWeather () {
      if (!this.city) {
        alert('Input city name');
        return;
      }

      const { data } = await axios.get(`http://127.0.0.1:1880/weather/${this.city}`);
      // console.log(data);
      // this.city = '';

      if (!data.content.main) {
        this.notFound = data.content;
        this.outClasses = ['output'];
        this.out404Classes.push('show');
      } else {
        this.out404Classes = ['out404'];
        this.outClasses.push('show');
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

.output,
.out404 {
  margin: 10px 0px 0px 0px;
  padding: 20px;
  display: none;
  background-color: rgb(240, 240, 240);
  box-shadow: 4px 3px 15px 0px #000000;
  border-radius: 5px;
}

.out404 {
  text-transform: uppercase;
  color: rgb(223, 121, 121);
}

.show {
  display: block;
}
</style>