<template>
  <!-- <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banner" :key="index">
        <img v-lazy="item.image" />
      </van-swipe-item>
    </van-swipe> -->

  <van-swipe
    class="my-swipe"
    :autoplay="3000"
    :duration="1500"
    indicator-color="1989fa"
    show-indicators
  >
    <van-swipe-item v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img v-lazy="item.image" />
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      current: 0
    };
  }
};
</script>

<style scoped>
.van-swipe {
  width: 100vw;
  height: 3.9rem;
}
.van-swipe-item {
  width: 100%;
  height: 100%;
  float: left;
}
img {
  width: 100%;
  height: 100%;
}
</style>
