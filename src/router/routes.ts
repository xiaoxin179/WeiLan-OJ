import HomeViews from '../views/HomeViews.vue'
import type { RouteRecordRaw } from 'vue-router'
import PersionView from '@/views/PersionView.vue'
import AdminView from '@/views/AdminView.vue'
import noAuth from '@/views/noAuth.vue'
import accessEnum from '@/access/accessEnum'
import UserLayout from '@/layouts/UserLayout.vue'
import UserLoginView from '@/views/user/UserLoginView.vue'
import UserRegisterView from '@/views/user/UserRegisterView.vue'
import AddQuestionView from '@/views/question/AddQuestionView.vue'
import MangementQuestionView from '@/views/question/MangementQuestionView.vue'
import AccessEnum from '@/access/accessEnum'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/user',
    name: '用户',
    component: UserLayout,
    children: [
      {
        path: '/user/login',
        name: '用户登录',
        component: UserLoginView
      },
      {
        path: '/user/register',
        name: '用户注册',
        component: UserRegisterView
      }
    ],meta:{
      hide:true
    }
  },
  {
    path: '/',
    name: '主页',
    component: HomeViews,
    meta: {
      hide: false
    }
  },
  {
    path:'/add/question',
    name:"添加题目",
    component:AddQuestionView,
    meta:{
      access: accessEnum.ADMIN
    }
  },
  {
    path:'/mangement/question',
    name:"管理题目",
    component:MangementQuestionView,
    meta:{
      access: accessEnum.ADMIN
    }
  },
  {
    path: "/update/question",
    name: "更新题目",
    component: AddQuestionView,
    meta: {
      access: AccessEnum.USER,
      hide: true,
    },
  },
  {
    path: '/noAuth',
    name: '无权限',
    component: noAuth,
    meta: {
      hide: true
    }
  },
  {
    path: '/home',
    name: '个人中心',
    component: PersionView
  },
  {
    path: '/admin',
    name: '权限管理',
    component: AdminView,
    meta: {
      access: accessEnum.ADMIN
    }
  }
]
