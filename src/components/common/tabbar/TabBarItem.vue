<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot  name="slot-icon" ><img src="~assets/image/icon_xjfb_tabbar_shouye_no.png"></slot>
    </div>
    <div v-else>
      <slot  name="slot-icon-active" ><img src="~assets/image/icon_xjfb_tabbar_shouye_yes.png"></slot>
    </div>
    <div :style="isTextColor">
      <slot name="slot-text"><div>tabbar</div></slot>
    </div>


  </div>
</template>
<script>
export default {
  name:"TabBarItem",
  props:{
    path:String,
    textColor:{
      type:String,
      default:"#666"
    },
    textActive:{
      type:String,
      default:"red"
    }
  },
  computed:{

    isActive(){
      return this.$route.path.indexOf(this.path)!== -1;
    },
    isTextColor(){
      return this.isActive ? {color:this.textActive}:{color:this.textColor}
    }
  },
  data(){
    return{
      // isActive:false,
      // path:"/home"
    }
  },
  methods:{
    itemClick(){
       this.$router.replace(this.path)
       console.log(this.path);
    }
  }
}
</script>
<style scoped>
.tab-bar-item{
  flex: 1;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.activeText{
  color: red;
}
.noActiveText{
  color:#010
}
</style>
