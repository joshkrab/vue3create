<template>
  <div class="form">
    <h3>Check the weather now:</h3>

    <input v-model="city" class="input" type="text" placeholder="Input city name">

    <button class="btn" @click="getWeather">Get weather</button>

    <div class="output">Output: {{city}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      city: '',
    }
  },

  methods: {
    getWeather () {
      console.log(this.city);
      this.city = '';
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