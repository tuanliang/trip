<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar></tab-bar>
    <loading></loading>
  </div>
</template>

<script setup>
import TabBar from '@/components/tab-bar/tab-bar.vue'
import Loading from '@/components/loading/loading.vue'
</script>



<style scoped></style>
