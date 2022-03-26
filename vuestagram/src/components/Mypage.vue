<template>
  <div style="padding: 10px">
    <div style="padding: 10px">
      <h4>팔로워</h4>
      <input
        @input="search($event.target.value)"
        placeholder="팔로워를 검색하세요"
      />
      <div class="post-header" v-for="(item, index) in follower" :key="index">
        <div
          class="profile"
          :style="`background-image: url(${item.image})`"
        ></div>
        <span class="profile-name">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import axios from "axios";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "mypageInfo",
  props: {
    one: Number,
  },
  setup() {
    let follower = ref([]);
    let followerOriginal = ref([]);

    onMounted(() => {
      axios.get("/follower.json").then((result) => {
        follower.value = result.data;
        followerOriginal.value = [...result.data];
      });
    });

    function search(keyword) {
      let newFollower = followerOriginal.value.filter((item) => {
        return item.name.indexOf(keyword) != -1;
      });
      follower.value = [...newFollower];
      /*
      
      1. followerOriginal 을 만들어 filter 된 결과를 follower에넣고 렌더링 되고있음.
      2. 검색어를 지우면 지웠을때의 남아있는 단어로 filter된 결과를 follower에넣고 렌더링 되고있음.
      3. 검색어를 모두 지우면 공백이니까 결과는 그대로
      
      */
    }

    return { follower, search };
  },
  data() {
    return {};
  },
};
</script>

<style></style>
