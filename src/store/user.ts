// initial state
import type { StoreOptions } from 'vuex'
import accessEnum from '@/access/accessEnum'
import { UserControllerService } from '../../generated'
import AccessEnum from '@/access/accessEnum'

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: '未登录',
    }
  }),
  // 支持执行异步操作，出发mutation的更改，调用mutation
  actions: {
    async getLoginUser({ commit, state }, payload) {
      // 从远程获取登录信息
      const res = await UserControllerService.getLoginUserUsingGet()
      if (res.code === 0) {
        commit('updateUser', res.data)
      }else{
        commit("updateUser",{...state.loginUser, userRole: AccessEnum.NOT_LOGIN})

      }

    }
  },
  // mutations就是定义对变量增删改查的代码
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload
    }
  }
} as StoreOptions<any>
