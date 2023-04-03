<template>
  <div class="app">
    <!-- <Weather /> -->
    <!-- <Likes /> -->
    <PostForm @create="createPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script>
import Likes from '@/components/Likes.vue'
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import Weather from './components/Weather.vue'

export default {
  components: {
    Likes,
    PostList,
    PostForm,
    Weather
  },
  data () {
    return {
      posts: [
        { id: 1, title: 'JavaScript 1', body: 'Post description 1' },
        { id: 2, title: 'JavaScript 2', body: 'Post description 2' },
        { id: 3, title: 'JavaScript 3', body: 'Post description 3' },
        { id: 3, title: 'JavaScript 4', body: 'Post description 4' },
      ],
    }
  },

  methods: {
    createPost (post) {
      this.posts.push(post)
    },

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
</style>