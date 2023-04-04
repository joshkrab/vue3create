<template>
  <div v-if="posts.length > 0" class="post-list">
    <h3>List of posts</h3>

    <PostItem v-for="post in posts" :post="post" :key="post.id"
              @remove="$emit('remove', post)" />
  </div>

  <h2 v-else style="color: red">The list of posts is empty</h2>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }

}
</script>

<style></style>