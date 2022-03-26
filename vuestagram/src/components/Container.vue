<template>
  <div>
    <div v-if="step === 0">
      <Post
        v-for="(item, index) in instaData"
        :key="index"
        :instaData="instaData[index]"
        :filterModi="filterModi"
      />
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step === 1">
      <div
        :class="filterModi"
        class="upload-image"
        :style="`background-image : url(${img})`"
      ></div>
      <div class="filters">
        <FilterBox
          :img="img"
          v-for="filter in filterData"
          :key="filter"
          :class="item"
          :filter="filter"
        >
          <span>{{ filter }}</span>
        </FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step === 2">
      <div
        :class="filterModi"
        class="upload-image"
        :style="`background-image : url(${img})`"
      ></div>
      <div class="write">
        <textarea
          class="write-box"
          @input="$emit('write', $event.target.value)"
        >
write!</textarea
        >
      </div>
    </div>

    <!-- myPage -->
    <div v-if="step === 3">
      <Mypage :one="1" />
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import Mypage from "./Mypage.vue";

export default {
  name: "ContainerBox",
  data() {
    return {
      filterData: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
  components: {
    Post,
    FilterBox,
    Mypage,
  },
  props: {
    instaData: Array,
    step: Number,
    img: String,
    filterModi: String,
  },
};
</script>

<style>
@import "../css/Container.css";
</style>
