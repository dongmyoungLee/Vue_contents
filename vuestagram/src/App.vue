<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step === 1" @click="step = 2">Next</li>
      <li v-if="step === 2" @click="publish">발행</li>
    </ul>
  </div>

  <Container
    :instaData="instaData"
    :step="step"
    :img="img"
    @write="writePost = $event"
  ></Container>
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        accept="image/*"
        type="file"
        id="file"
        class="inputfile"
      />
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
      img: "",
      writePost: "",
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
    upload(e) {
      let fileImg = e.target.files;
      const url = URL.createObjectURL(fileImg[0]);
      this.img = url;
      this.step = 1;
    },
    publish() {
      let myPost = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.img,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.writePost,
        filter: "perpetua",
      };
      this.instaData.unshift(myPost);
      this.step = 0;
    },
  },
};
</script>

<style>
@import "./css/App.css";
</style>
