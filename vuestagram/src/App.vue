<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step = 0">Cancel</li>
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
    :filterModi="filterModi"
    @write="writePost = $event"
  ></Container>

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
import { mapMutations, mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {
      step: 3,
      instaData: data,
      moreBtn: 0,
      img: "",
      writePost: "",
      filterModi: "",
      counter: 0,
    };
  },
  components: {
    Container,
  },
  computed: {
    ...mapState(["name", "age", "likes"]),
    ...mapState({ myname: "name" }),
  },
  methods: {
    ...mapMutations(["nameChange", "plus"]),
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
        filter: this.filterModi,
      };
      this.instaData.unshift(myPost);
      this.step = 0;
    },
  },
  mounted() {
    this.emitter.on("filterFire", (result) => {
      this.filterModi = result;
    });
  },
};
</script>

<style>
@import "./css/App.css";
</style>
