import HomeViews from '../views/HomeViews.vue'
import type { RouteRecordRaw } from 'vue-router'
import PersionView from '@/views/PersionView.vue'
import AdminView from '@/views/AdminView.vue'
import noAuth from '@/views/noAuth.vue'
import accessEnum from '@/access/accessEnum'
export const routes:Array<RouteRecordRaw>= [
  {
    path: '/',
    name: '主页',
    component: HomeViews,
    meta:{
      hide:false
    }
  },
  {
    path: '/noAuth',
    name: '无权限',
    component: noAuth,
    meta:{
      hide:true
    }
  },
  {
    path:'/home',
    name: '个人中心',
    component: PersionView
  },
  {
    path:'/admin',
    name: '权限管理',
    component: AdminView,
    meta:{
      access:accessEnum.ADMIN
    }
  },
]
