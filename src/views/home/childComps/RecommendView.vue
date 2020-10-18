<template>
  <div class="recommend">
    <div
      class="recommend-item"
      v-for="(item, index) in recommneds"
      :key="index"
    >
      <a :href="item.link">
        <img :src="item.image" />
        <div>
          {{ item.title }}
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    recommneds: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 5px solid #eee;
}
.recommend-item {
  flex: 1;
}
img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
