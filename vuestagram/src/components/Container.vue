<template>
  <div>
    <Post
      v-for="(item, index) in instaData"
      :key="index"
      :instaData="instaData[index]"
    />
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "ContainerBox",
  components: {
    Post,
  },
  props: {
    instaData: Array,
  },
};
</script>

<style></style>
