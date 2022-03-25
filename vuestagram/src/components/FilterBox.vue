<template>
  <div
    :class="filter"
    class="filter-item"
    :style="`background-image : url(${img})`"
    @click="filterFire"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "filterBox",
  props: {
    img: String,
    filter: String,
  },
  methods: {
    filterFire() {
      this.emitter.emit("filterFire", this.filter);
    },
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
