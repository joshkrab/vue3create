<template>
  <form @submit.prevent>
    <h3>Create new post:</h3>

    <my-input
      v-model="post.title"
      placeholder="Post title"
    />

    <my-input
      v-model="post.body"
      placeholder="Description"
    />

    <!-- <my-input v-model:value="post.title" v-model:myvalue="post.title"
              placeholder="Post title" /> -->

    <my-button
      style="margin-top: 15px"
      @click="createPost"
      >Create</my-button
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },

  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      };
    },
  },

  // watch: {
  //   post: {
  //     handler(newVak) {
  //       console.log(newVak);
  //     },
  //     deep: true,
  //   },
  // },
};
</script>

<style>
form {
  margin: 20px 0px 0px 0px;
  display: flex;
  flex-direction: column;
}
</style>
