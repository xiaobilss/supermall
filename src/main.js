import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js"

import "assets/swiper/swiper-bundle.min.css"


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
