<template>
  <div class="post">
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${instaData.userImage})` }"
      ></div>
      <span class="profile-name">{{ instaData.name }}</span>
    </div>
    <div
      class="post-body"
      :style="{ backgroundImage: `url(${instaData.postImage})` }"
    ></div>
    <div class="post-content">
      <p>{{ instaData.likes }} Likes</p>
      <p>
        <strong>{{ instaData.name }}</strong> {{ instaData.content }}
      </p>
      <p class="date">{{ instaData.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPage",
  props: {
    instaData: Array,
  },
};
</script>

<style>
@import "../css/Post.css";
</style>
