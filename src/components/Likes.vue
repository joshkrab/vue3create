<template>
  <div class="likes">
    <div>Number of likes: <strong>{{likes}}</strong> </div>
    <div>Number of dislikes: <strong>{{dislikes}}</strong> </div>

    <div class="buttons">
      <button @click="addLike">Like</button>
      <button @click="addDislike">Dislike</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      likes: 0,
      dislikes: 0,
    }
  },
  methods: {
    addLike () {
      this.likes += 1;
    },
    addDislike () {
      this.dislikes += 1;
    },
  }
}
</script>

<style>

</style>