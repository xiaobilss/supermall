<template>
  <div>
      <tab-bar>
        <tab-bar-item v-for="(item ,index) in tabbarData"
           :key="index"
           :path="item.path"
           :textColor="item.textColor"
           :textActive="item.textActive">
          <img slot="slot-icon" :src="item.img">
          <img slot="slot-icon-active" :src="item.imgActive">
          <div slot="slot-text">{{item.text}}</div>
        </tab-bar-item>
      </tab-bar>
  </div>
</template>
<script>
import TabBar from "components/common/tabbar/TabBar"
import TabBarItem from "components/common/tabbar/TabBarItem"
export default {
  name:"TabbarMain",
  components:{
    TabBar,
    TabBarItem
  },
  data(){
    return{
      tabbarData:[
        {
          path:"/home",
          img:require("@/assets/image/icon_xjfb_tabbar_shouye_no.png"),
          imgActive:require("@/assets/image/icon_xjfb_tabbar_shouye_yes.png"),
          text:"首页",
          textColor:"#444444",
          textActive:"red",
          active:true
        },
        {
          path:"/category",
          img:require("@/assets/image/icon_xjfb_tabbar_shouye_no.png"),
          imgActive:require("@/assets/image/icon_xjfb_tabbar_shouye_yes.png"),
          text:"分类",
          textColor:"#250020",
          textActive:"pink",
          active:false
        },
        {
          path:"/cart",
          img:require("@/assets/image/icon_xjfb_tabbar_wode_no.png"),
          imgActive:require("@/assets/image/icon_xjfb_tabbar_wode_yes.png"),
          text:"购物车",
          textColor:"#666",
          textActive:"#021",
          active:false
        },
        {
          path:"/mine",
          img:require("@/assets/image/icon_xjfb_tabbar_wode_no.png"),
          imgActive:require("@/assets/image/icon_xjfb_tabbar_wode_yes.png"),
          text:"我的",
          textColor:"#444444",
          textActive:"#0f0",
          active:false
        }
        ]
    }
  }


}
</script>
