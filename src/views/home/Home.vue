<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">slider1</div>
        <div class="swiper-slide">slider2</div>
        <div class="swiper-slide">slider3</div>
      </div>
    </div>


  </div>
</template>
<script>
import NavBar from "components/common/navBar/NavBar.vue"
import {getHomeMultidata} from "network/home.js"



import Swiper from   "assets/swiper/swiper-bundle.min.js";




// import "assets/swiper/swiper-bundle.min.css"

// var mySwiper = new Swiper('.swiper-container', {
//   autoplay: 5000,//可选选项，自动滑动
//   autoplay : 3000,
//   speed:300,
//   direction : 'vertical',

// })
export default {
  data(){
    return {
      banners:[],
      recommends:[]
    }
  },
  components:{
    NavBar,
  },
  created(){
    getHomeMultidata().then(res=>{
      this.banners=res.data.banner.list;
      this.recommends= res.data.recommend.list;
      console.log(this.banners);
      console.log(this.recommends);
    })
  },
  mounted() {
console.log(Swiper,'swiper' )
    new Swiper ('.swiper-container', {
      autoplay: 1000,
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar',
      })

  }

}
</script>


<style scoped>
.home-nav{
  background-color: pink;
  color: #fff;
}
.swiper-container{
  width: 100%;
  height: 160px;
  background-color: rosybrown;
}
.swiper-wrapper{

  height: 100%;
}
</style>
