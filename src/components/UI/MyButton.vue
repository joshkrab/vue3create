<template>
  <button
    type="button"
    class="btn"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'my-button',
};
</script>
<style scoped>
.btn {
  align-self: center;
  padding: 10px 50px;
  background: none;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
}
</style>
