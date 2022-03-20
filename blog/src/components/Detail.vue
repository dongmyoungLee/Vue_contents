<template>
  <div>
    <h4>상세 페이지</h4>
    <h5>{{ blogContents[$route.params.id].title }}</h5>
    <p>{{ blogContents[$route.params.id].content }}</p>
  </div>
</template>

<script>
export default {
  name: "DetailPage",
  props: {
    blogContents: Array,
  },
};
</script>

<style></style>
