<template>
  <div class="feature">
    <a href="http://act.mogujie.com/zzlx67">
      <img :src="img" alt="" />
    </a>
  </div>
</template>
<script>
export default {
  name: "FeatureView",
  data() {
    return {
      img: require("assets/image/recommend_bg.jpg")
    };
  }
};
</script>
<style scoped>
.feature img {
  width: 100%;
}
</style>
