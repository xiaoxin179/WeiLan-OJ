<script setup lang="ts">
import { routes } from '@/router/routes'
import { useRouter } from 'vue-router'
import {  computed, ref } from 'vue'
import { useStore } from 'vuex'
import checkAccess from '@/access/checkAccess'
import accessEnum from '@/access/accessEnum'
const router = useRouter()
const store = useStore()
const loginUser = ref(store.state.user.loginUser);
const doMenuClick = (key: string) => {
  router.push({
    path: key
  })
}
// 默认处于主页
const selectKeys = ref(['/'])
router.afterEach((to) => {
  selectKeys.value = [to.path]
})
setTimeout(() => {
  store.dispatch('user/getLoginUser', {
    userName: 'xiaoxin',
    userRole: accessEnum.ADMIN
  })
}, 2000)
// 过滤路由
const canVisible = computed(() => {
  return routes.filter((item, index) => {
    if (item.meta?.hide) {
      return false;
    }
    // 根据权限过滤菜单
    if (!checkAccess(store.state.user.loginUser, item?.meta?.access as string)) {
      return false;
    }
    return true;
  })
})
</script>
<template>
  <div id="globeHeader">
    <a-menu mode="horizontal" @menu-item-click="doMenuClick" :selected-keys="selectKeys">
      <a-menu-item key="0" disabled>
      </a-menu-item>
      <a-menu-item v-for="item in canVisible" :key="item.path">{{ item.name }}</a-menu-item>
    </a-menu>
    <div class="personName">{{ loginUser?.userName ?? '未登陆' }}</div>
  </div>
</template>
<style scoped>
#globeHeader {
  display: flex;
}
.personName {
  display: flex;
  align-items: center;
  font-weight: bold;
  width: 100px;
}
</style>
