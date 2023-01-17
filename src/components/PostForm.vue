<template>
  <form @submit.prevent>
    <h3>Create new post:</h3>

    <input v-model="post.title" class="input" type="text" placeholder="Post title">

    <input v-model="post.body" class="input" type="text" placeholder="Description">

    <button class="btn" @click="createPost">Create</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },

  methods: {
    createPost () {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: '',
      }
    }
  }
}
</script>

<style>
form {
  margin: 20px 0px 0px 0px;
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin: 10px 0px 0px 0px;
}

.btn {
  align-self: center;
  margin: 10px 0px 0px 0px;
  padding: 10px 50px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>