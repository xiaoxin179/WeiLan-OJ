<script setup lang="ts">
import { routes } from '@/router/routes'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useStore } from 'vuex'

const router = useRouter()
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
const store = useStore()
setTimeout(() => {
  store.dispatch('user/getLoginUser', {
    userName: "xiaoxin"
  })
},2000)
</script>

<template>
  <div id="globeHeader">
    <a-menu mode="horizontal" @menu-item-click="doMenuClick" :selected-keys="selectKeys">
      <a-menu-item key="0" disabled>
      </a-menu-item>
      <a-menu-item v-for="item in routes" :key="item.path">{{ item.name }}</a-menu-item>
    </a-menu>
    <div class="personName">{{ store.state.user?.loginUser?.userName ?? '未登陆' }}</div>
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
