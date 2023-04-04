<template>
  <div class="app">
    <!-- <Weather /> -->
    <!-- <Likes /> -->
    <h1>Page with posts</h1>
    <!-- <input
      type="text"
      v-model.trim="modificatorValue"
    /> -->
    <!-- <my-button @click="fetchPosts">Get posts</my-button> -->

    <div class="app__btns">
      <my-button @click="showDialog">Add post </my-button>

      <my-select
        v-model="selectedSort"
        :options="sortedOptions"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </my-dialog>

    <PostList
      :posts="sortedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Downloading...</div>
  </div>
</template>

<script>
import Likes from '@/components/Likes.vue';
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import Weather from './components/Weather.vue';
import axios from 'axios';

export default {
  components: {
    Likes,
    PostList,
    PostForm,
    Weather,
  },
  data() {
    return {
      // posts: [
      //   { id: 1, title: 'JavaScript 1', body: 'Post description 1' },
      //   { id: 2, title: 'JavaScript 2', body: 'Post description 2' },
      //   { id: 3, title: 'JavaScript 3', body: 'Post description 3' },
      //   { id: 3, title: 'JavaScript 4', body: 'Post description 4' },
      // ],
      posts: [],
      dialogVisible: false,
      // modificatorValue: '',
      isPostsLoading: false,
      selectedSort: '',
      sortedOptions: [
        { value: 'title', name: 'By title' },
        { value: 'body', name: 'By Description' },
        { value: 'id', name: 'By ID' },
      ],
    };
  },

  mounted() {
    this.isPostsLoading = true;
    this.fetchPosts();
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((a, b) =>
        `${a[this.selectedSort]}`?.localeCompare(`${b[this.selectedSort]}`)
      );
    },
  },

  // watch: {
  //   selectedSort(newValue) {
  //     console.log(newValue);
  //     this.posts.sort((a, b) =>
  //       `${a[newValue]}`?.localeCompare(`${b[newValue]}`)
  //     );
  //   },
  // },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        setTimeout(async () => {
          const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts?_limit=10'
          );
          this.posts = response.data;
          this.isPostsLoading = false;
        }, 1000);
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
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
.app__btns {
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
}
</style>
