import HomeViews from '../views/HomeViews.vue'
import type { RouteRecordRaw } from 'vue-router'
import PersionView from '@/views/PersionView.vue'

export const routes:Array<RouteRecordRaw>= [
  {
    path: '/',
    name: '主页',
    component: HomeViews
  },
  {
    path:'/home',
    name: '个人中心',
    component: PersionView
  }
]
