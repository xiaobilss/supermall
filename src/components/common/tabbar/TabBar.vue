<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:"Tabbar"
}
</script>
<style scoped>
.tab-bar{
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f6f6f6;
  box-shadow: 0px -1px 3px rgba(100, 100, 100, .3);
}

</style>
