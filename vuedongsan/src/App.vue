<template>
  <transition name="fade">
    <Modal
      @closeModal="modalOpen = false"
      :oneRoom="oneRoom"
      :clickModal="clickModal"
      :modalOpen="modalOpen"
    ></Modal>
  </transition>

  <div class="menu">
    <a v-for="(test, i) in menus" :key="i" href="#">{{ test }}</a>
  </div>

  <Discount v-if="showDiscount === true" :discount="discount"></Discount>

  <button @click="priceSort()">낮은가격순</button>
  <button @click="priceSort2()">높은가격순</button>
  <button @click="priceSortBack()">되돌리기</button>

  <Card
    @openModal="
      modalOpen = true;
      clickModal = $event;
    "
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
      discount: 30,
      showDiscount: true,
      oneRoomOrigin: [...data],
      clickModal: 0,
      oneRoom: data,
      menus: ["Home", "Shop", "About", "Contact"],
      modalOpen: false,
    };
  },
  methods: {
    priceSort() {
      this.oneRoom.sort((a, b) => {
        return a.price - b.price;
      });
    },
    priceSortBack() {
      this.oneRoom = [...this.oneRoomOrigin];
    },
    priceSort2() {
      this.oneRoom.sort((a, b) => {
        return b.price - a.price;
      });
    },
  },
  components: {
    Discount,
    Modal,
    Card,
  },
  mounted() {
    setInterval(() => {
      this.discount--;
    }, 1000);
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

/* animation */

.fade-enter-from {
  opacity: 0;
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}

.start {
  opacity: 0;
  transition: all 0.5s;
}
.end {
  opacity: 1;
}
</style>
