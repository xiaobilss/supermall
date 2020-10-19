<template>
  <div class="tab-control">
      <div class="tab-control-item"
        v-for="(item,index) in titles"
        :key="index"
        :class="{active:index ===currenIndex}"
        @click="tabControlClick(index)">
        <span>{{item}}</span>
      </div>
    </div>
</template>
<script>
export default {
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currenIndex:0
    }
  },
  methods:{
    tabControlClick(index){
      this.currenIndex=index
    }
  }
}
</script>
<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  background-color: #fff;
}
.tab-control-item{
  flex: 1;
}
.tab-control-item span{
  padding: 5px;
}
.active{
  color: var(--color-high-text)
}
.active span{
  border-bottom: 3px solid var(--color-high-text)
}
</style>
