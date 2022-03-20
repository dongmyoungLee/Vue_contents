<template>
  <div v-for="(item, idx) in blogContents" :key="idx">
    <h3>{{ blogContents[idx].title }}</h3>
    <p>{{ blogContents[idx].date }}</p>
  </div>
</template>

<script>
export default {
  name: "blogList",
  props: {
    blogContents: String,
  },
};
</script>

<style></style>
