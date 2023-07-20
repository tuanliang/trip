<template>
  <div class="app">
    <router-view v-slot="props">
      <keep-alive includes="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
    <tab-bar></tab-bar>
    <loading></loading>
  </div>
</template>

<script setup>
import TabBar from '@/components/tab-bar/tab-bar.vue'
import Loading from '@/components/loading/loading.vue'
</script>



<style scoped></style>
