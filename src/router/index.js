import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

// const Home = () => import('../views/mine/Mine.vue')
// const Mine = ()=> import("../views/mine/Mine.vue")
// const Category = ()=> import("../views/category/category.vue")
// const Cart = ()=> import("../views/cart/Cart.vue")

// console.log(Mine,'mine' )

const routes=[
    // {
    //     path:"/",
    //     redirect:"/home"
    //   },
      // {
      //   path:"/home",
      //   component:Home
      // },
    //   {
    //     path:"/mine",
    //     component:Mine
    //   },
    //   {
    //     path:"/cart",
    //     component:Cart
    //   },
    //   {
    //     path:"/category",
    //     component:Category
    //   }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router

