<script setup lang="ts">

import GlobeHeader from '@/components/GlobeHeader.vue'
</script>

<template>
<div id="basicLayout">
  <div class="header">
    <GlobeHeader />
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="foot">

  </div>
</div>
</template>

<style scoped>
.header{

}
.content {

}
.foot {

}
</style>
