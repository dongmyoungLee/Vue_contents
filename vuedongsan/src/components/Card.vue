<template>
  <div>
    <img
      class="room-img"
      :src="oneRoom.image"
      alt="study"
      style="cursor: pointer"
    />
    <h4>{{ oneRoom.title }}</h4>
    <p>{{ oneRoom.price }}원</p>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    oneRoom: Object,
  },
};
</script>

<style></style>
