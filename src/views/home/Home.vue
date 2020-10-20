<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommneds="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="titles" @tabClick="tabClcik"/>
    <goods-list :goods="goods[goodsTitle].list" />
  </div>
</template>
<script>
import NavBar from "components/common/navBar/NavBar.vue";

import TabControl from "components/content/tabControl/TabControl.vue"
import GoodsList from "components/content/goods/GoodsList.vue"

import HomeSwiper from "./Swiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView.vue";



import { getHomeMultidata ,getHomeGoods} from "network/home.js";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      titles:[],
      goodsTitle:"pop",
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]},
      }
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList
  },
  computed:{
    getGoodsListTitle(){
      return goods[goodsTitle].list;
    }
  },
  created() {
    // 轮播,主功能
    this.getHomeMultidatas();
    // 请求商品数据
    this.getDataGoodsList("pop")
    this.getDataGoodsList("new")
    this.getDataGoodsList("sell")
  },
  methods:{
    getHomeMultidatas(){
      getHomeMultidata().then(res => {
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
          });
    },
    getDataGoodsList(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res=>{

        console.log("请求商品数据:",res.data);
        // console.log(res.data.list);

        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.titles=[];
        res.data.filter.list.filter(item =>{
          this.titles.push(item.title)
        })

      })
    },
    tabClcik(index){
        this.index=index;
       switch(index){
         case 0:
            this.goodsTitle="pop";
          break;
          case 1:
            this.goodsTitle="new";
          break;
          case 2:
            this.goodsTitle="sell";
          break;
       }

    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: pink;
  color: #fff;

  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;
}
.swiper-container {
  width: 100%;
  height: 160px;
  background-color: rosybrown;
}
.tab-control{
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
