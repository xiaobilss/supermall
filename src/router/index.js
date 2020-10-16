import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

const Home = () => import('../views/home/Home.vue')
const Mine = ()=> import("../views/mine/Mine.vue")
const Category = ()=> import("../views/category/Category.vue")
const Cart = ()=> import("../views/cart/Cart.vue")

// console.log(Mine,'mine' )

// import Home from "../views/home/Home.vue"
// import Mine from "../views/mine/Mine.vue"
// import Cart from "../views/cart/Cart.vue"
// import Category from "../views/category/Category.vue"

const routes=[
    {
        path:"/",
        redirect:"/home"
      },
      {
        path:"/home",
        component:Home
      },
      {
        path:"/mine",
        component:Mine
      },
      {
        path:"/cart",
        component:Cart
      },
      {
        path:"/category",
        component:Category
      }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router

