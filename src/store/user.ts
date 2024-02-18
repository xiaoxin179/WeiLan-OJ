// initial state
import type { StoreOptions } from 'vuex'

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: '未登录'
    }
  }),
  // 支持执行异步操作，出发mutation的更改，调用mutation
  actions: {
    getLoginUser({ commit, state }, payload) {
      commit('updateUser', { userName: 'XIAOXIN', role: 'admin' })
    }
  },
  // mutations就是定义对变量增删改查的代码
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload
    }
  }
} as StoreOptions<any>
