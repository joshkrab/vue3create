<template lang="">
  <input :value="modelValue" type="text" class="input" @input="updateInput"> 
</template>
<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput (event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>
<style scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin: 10px 0px 0px 0px;
}
</style>