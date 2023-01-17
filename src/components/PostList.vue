<template>
  <div class="post" v-for="post in posts">
    <div><strong>Name:</strong> {{post.title}}</div>
    <div><strong>Description:</strong> {{post.body}}</div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }

}
</script>

<style>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin: 10px 0px 0px 0px;
}
</style>