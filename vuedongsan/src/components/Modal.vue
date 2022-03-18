<template>
  <div class="black_bg" v-if="modalOpen === true">
    <div class="white_bg">
      <h4>{{ oneRoom[clickModal].title }}</h4>
      <p>{{ oneRoom[clickModal].content }}</p>
      <!-- <button @click="modalOpen = false">닫기</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "modalContainer",
  props: {
    oneRoom: Array,
    clickModal: Number,
    modalOpen: Boolean,
  },
};
</script>

<style></style>
