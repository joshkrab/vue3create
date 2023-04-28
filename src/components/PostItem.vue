<template>
  <div class="post">
    <div>
      <div><strong>Name:</strong> {{ post.title }}</div>
      <div><strong>Description:</strong> {{ post.body }}</div>
    </div>
    <div class="btns">
      <my-button @click="$emit('remove', post)">Delete</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin: 10px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
