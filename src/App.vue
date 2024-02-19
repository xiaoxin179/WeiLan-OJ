<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

/**
 * 全局初始化函数，有全局单次调用的代码，都可以写到这里
 */
const doInit = () => {
  console.log(
    '                   _oo0oo_                     \n' +
    '                  o8888888o										\n' +
    '                  88" . "88										\n' +
    '                  (| -_- |)										\n' +
    '                   O\\ = /O										\n' +
    '               ____/`---\'\\____									\n' +
    '             .   \' \\\\| |// `.									\n' +
    '              / \\\\||| : |||// \\								\n' +
    '           / _||||| -卍- |||||- \\								\n' +
    '              | | \\\\\\ - /// | |								\n' +
    '            | \\_| \'\'\\---/\'\' | |								\n' +
    '             \\ .-\\__ `-` ___/-. /							\n' +
    '          ___`. .\' /--.--\\ `. . __							\n' +
    '       ."" "< `.___\\_<|>_/___. ` >" "".        \n' +
    '      | | : `- \\`.;`\\ _ /`;.`/ - ` : | |       \n' +
    '        \\ \\ `-. \\_ __\\ /__ _/ .-` / /          \n' +
    '======`-.____`-.___\\_____/___.-`____.-\'======  \n' +
    '                   `=---=\'                     \n' +
    '.............................................  \n\t\t' +
    '佛祖镇楼                  BUG走开                          \n\t'
  )
}
onMounted(() => {
  doInit()
})
const route = useRoute()

</script>
<template>
  <template v-if="route.path.startsWith('/user')">
    <router-view />
  </template>
  <template v-else>
    <BasicLayout />
  </template>
</template>

<style scoped>

</style>
