<script setup lang="ts">
import { routes }  from '@/router/routes'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const doMenuClick=(key:string)=>{
  router.push({
    path: key
  })
}
// 默认处于主页
const selectKeys = ref(["/"])
router.afterEach((to)=>{
  selectKeys.value = [to.path]
})


</script>

<template>
<div id="globeHeader">
  <a-menu mode="horizontal" :default-selected-keys="['1']" @menu-item-click="doMenuClick"  :selected-keys="selectKeys">
    <a-menu-item key="0"  disabled>
    </a-menu-item>
    <a-menu-item v-for="item in routes" :key="item.path">{{item.name}}</a-menu-item>
  </a-menu>
</div>
</template>

<style scoped>

</style>
