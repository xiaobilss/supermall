<template>
  <div id="app">
    <img src="~assets/image/icon_xjfb_tabbar_shouye_no.png">
    <router-view></router-view>
    <!-- <tabbar-main/> -->
  </div>
</template>

<script>
// import TabbarMain from "@/components/content/TabbarMain.vue"
export default {
  name: 'App',
  components:{
    // TabbarMain
  }
}
</script>

<style>
@import "assets/css/base.css"

</style>
