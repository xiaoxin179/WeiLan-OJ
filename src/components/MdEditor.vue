<template>
  <Editor :value="value" :plugins="plugins" @change="handleChange" :mode="mode"/>
</template>
<script setup lang="ts">
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import { Editor } from '@bytemd/vue-next'
import { defineProps, withDefaults } from 'vue'

const plugins = [
  gfm(),
  highlight()
  // Add more plugins here
]
/*
*定义组件的类型
 */
interface Props {
  value: string,
  mode:string,
  handleChange: (v: string) => void
}
const props = withDefaults(defineProps<Props>(), {
  value: () => "",
  mode:()=>"split",
  handleChange: (v:string) => {
    console.log(v)
  }
})


</script>
<style scoped></style>
