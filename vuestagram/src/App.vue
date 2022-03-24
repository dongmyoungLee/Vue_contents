<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
  </div>

  <Container :instaData="instaData" :step="step"></Container>
  <button @click="more">더보기</button>

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
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      step: 0,
      instaData: data,
      moreBtn: 0,
    };
  },
  components: {
    Container,
  },
  methods: {
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.moreBtn}.json`)
        .then((result) => {
          this.instaData.push(result.data);
          this.moreBtn++;
        });
    },
  },
};
</script>

<style>
@import "./css/App.css";
</style>
