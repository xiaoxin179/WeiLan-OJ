<script setup lang="ts">
import MdEditor from '@/components/MdEditor.vue'
import { ref } from 'vue'
const value = ref()
const onChange = (v: string) => {
  value.value = v
}
</script>
<template>
  <div>
    <MdEditor :handle-change="onChange" :value="value"/>
  </div>
</template>

<style scoped>

</style>
