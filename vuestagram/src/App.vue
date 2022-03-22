<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
  </div>

  <Container :instaData="instaData"></Container>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import data from "./assets/data.js";

export default {
  name: "App",
  data() {
    return {
      instaData: data,
    };
  },
  components: {
    Container,
  },
};
</script>

<style>
@import "./css/App.css";
</style>
