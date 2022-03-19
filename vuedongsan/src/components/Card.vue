<template>
  <div>
    <img
      @click="send()"
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
  methods: {
    send() {
      this.$emit("openModal", this.oneRoom.id);
    },
  },
};
</script>

<style></style>
