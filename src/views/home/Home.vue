<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <!-- 轮播图 -->
    <!-- <home-swiper :banner="banners"></home-swiper> -->
    <recommend-view :recommneds="recommends"></recommend-view>
    <feature-view></feature-view>
    <feature-view></feature-view>
    <feature-view></feature-view>
  </div>
</template>
<script>
import NavBar from "components/common/navBar/NavBar.vue";
import HomeSwiper from "./Swiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView.vue";

import { getHomeMultidata } from "network/home.js";

export default {
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      console.log(this.banners);
      console.log(this.recommends);
    });
  }
  // mounted() {
  //   new Swiper(".swiper-container", {
  //     autoplay: 1000,
  //     loop: true,
  //     // 如果需要分页器
  //     pagination: ".swiper-pagination",
  //     // 如果需要前进后退按钮
  //     nextButton: ".swiper-button-next",
  //     prevButton: ".swiper-button-prev",
  //     // 如果需要滚动条
  //     scrollbar: ".swiper-scrollbar"
  //   });

  //   console.log(document.querySelector(".swiper-container"));
  //   // },
  //   // beforeMount() {
  //   var mySwiper = document.querySelector(".swiper-container").swiper;
  //   mySwiper.slideNext();
  // }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: pink;
  color: #fff;
}
.swiper-container {
  width: 100%;
  height: 160px;
  background-color: rosybrown;
}
</style>
