<template>
  <div class="black_bg" v-if="modalOpen === true">
    <div class="white_bg">
      <img :src="oneRoom[clickModal].image" style="width: 100%" />
      <h4>{{ oneRoom[clickModal].title }}</h4>
      <p>{{ oneRoom[clickModal].content }}</p>
      <!-- <input @input="month = $event.target.value" /> -->
      <input v-model.number="month" />
      <p>{{ month }} 개월 선택 함 {{ oneRoom[clickModal].price * month }}원</p>
      <button @click="$emit('closeModal')" style="cursor: pointer">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "modalContainer",
  data() {
    return {
      month: 1,
    };
  },
  watch: {
    month(after) {
      if (isNaN(after) == true) {
        console.log("숫자만 입력하세요");
        this.month = 1;
      }
    },
  },
  props: {
    oneRoom: Array,
    clickModal: Number,
    modalOpen: Boolean,
  },
  beforeupdated() {
    if (this.month === 2) {
      alert();
    }
  },
};
</script>

<style></style>
