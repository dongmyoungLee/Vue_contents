<template>
  <div class="black_bg" v-if="modalOpen === true">
    <div class="white_bg">
      <h4>상세페이지</h4>
      <p>내용</p>
      <button @click="modalOpen = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="(test, i) in menus" :key="i" href="#">{{ test }}</a>
  </div>

  <div v-for="(item, idx) in products" :key="idx">
    <img class="room-img" src="./assets/room0.jpg" alt="study" />
    <h4 @click="modalOpen = true" :style="style">{{ products[idx] }}</h4>
    <p>50 만원</p>
    <button @click="police[idx]++">허위매물신고</button>
    <span>신고 수 : {{ police[idx] }}</span>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menus: ["Home", "Shop", "About", "Contact"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      style: "color : blue",
      police: [0, 0, 0],
      modalOpen: false,
    };
  },
  methods: {
    increase() {
      console.log(this);
    },
  },
  components: {},
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
</style>
