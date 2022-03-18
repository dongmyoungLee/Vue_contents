<template>
  <Modal
    :oneRoom="oneRoom"
    :clickModal="clickModal"
    :modalOpen="modalOpen"
  ></Modal>

  <div class="menu">
    <a v-for="(test, i) in menus" :key="i" href="#">{{ test }}</a>
  </div>

  <Discount></Discount>

  <Card
    v-for="(item, index) in oneRoom"
    :key="index"
    :oneRoom="oneRoom[index]"
  ></Card>
</template>

<script>
import data from "./assets/oneroom";
import Discount from "./components/Discount.vue";
import Modal from "./components/Modal.vue";
import Card from "./components/Card.vue";

export default {
  name: "App",
  data() {
    return {
      clickModal: 0,
      oneRoom: data,
      menus: ["Home", "Shop", "About", "Contact"],
      modalOpen: false,
    };
  },
  methods: {},
  components: {
    Discount,
    Modal,
    Card,
  },
};
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black_bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white_bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
  text-decoration: none;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>
