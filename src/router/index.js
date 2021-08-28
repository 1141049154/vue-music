import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home',
    name: 'home',
  },
  {
    path: '/home',
    component:() => import('../views/home/Home.vue')
  },
  {
    path: '/recommend',
    component: () => import('../views/recommend/RecommEnd.vue')
  },
  {
    path:'/rank',
    component: () => import('../views/rank/Rank.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes,
 
  
})

export default router
