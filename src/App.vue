<template>
  <div class="app">
    <div class="likes">
      <div>Number of likes: <strong>{{likes}}</strong> </div>
      <div>Number of dislikes: <strong>{{dislikes}}</strong> </div>

      <div class="buttons">
        <button @click="addLike">Like</button>
        <button @click="addDislike">Dislike</button>
      </div>
    </div>

    <form @submit.prevent>
      <h3>Create new post:</h3>

      <input @input="title = $event.target.value" v-bind:value="title" class="input" type="text"
        placeholder="Post title">

      <input @input="body = $event.target.value" v-bind:value="body" class="input" type="text"
        placeholder="Description">

      <button class="btn" @click="createPost">Create</button>
    </form>

    <div class="post" v-for="post in posts">
      <div><strong>Name:</strong> {{post.title}}</div>
      <div><strong>Description:</strong> {{post.body}}</div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      likes: 0,
      dislikes: 0,
      posts: [
        { id: 1, title: 'JavaScript 1', body: 'Post description 1' },
        { id: 2, title: 'JavaScript 2', body: 'Post description 2' },
        { id: 3, title: 'JavaScript 3', body: 'Post description 3' },
        { id: 3, title: 'JavaScript 4', body: 'Post description 4' },
      ],
      title: '',
      body: '',
    }
  },

  methods: {
    addLike () {
      this.likes += 1;
    },
    addDislike () {
      this.dislikes += 1;
    },
    createPost (event) {
      // event.preventDefault();

      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }
      this.posts.push(newPost);
      this.title = '';
      this.body = '';
    },
    // inputTitle (event) {
    //   this.title = event.target.value;
    // }
  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.likes {
  margin: 0px 0px 0px 0px;
}

.post {
  padding: 15px;
  border: 2px solid teal;
  margin: 10px 0px 0px 0px;
}

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
  align-self: flex-end;
  margin: 10px 0px 0px 0px;
  padding: 10px 50px;
  background: none;
  color: teal;
  border: 1px solid teal;

}
</style>