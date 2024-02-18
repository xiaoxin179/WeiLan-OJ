<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter();
// 从store中获取用户权限
const store = useStore();
router.beforeEach((to, from, next) => {
  // 仅管理员可见，判断当前用户是否有权限
  if (to.meta?.access === "canAdmin") {
    if (store.state.user.loginUser?.role !== "admin") {
      next("/noAuth");
      return;
    }
  }
  // 有权限则跳转
  next();
});

</script>

<template>
  <BasicLayout />
</template>

<style scoped>

</style>
