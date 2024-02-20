<script setup lang="ts">
import CodeEidtor from '@/components/CodeEidtor.vue'
import { ref } from 'vue'

const value = ref()
const onChange=(v:string)=>{
  value.value=v;
}
</script>

<template>
<div id="personView">
  <CodeEidtor :value="value" :handle-change="onChange"/>
</div>
</template>

<style scoped>

</style>
