<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item icon="home-o" :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
            <img v-else :src="getAssetURL(item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>

  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { getAssetURL } from "@/utils/get_assets.js"
import tabbarData from '@/assets/data/tabbar'

import { useRoute } from 'vue-router';


const route = useRoute()
const currentIndex = ref(0)
watch(route, (newRoute) => {
  const index = tabbarData.findIndex(item => item.path === newRoute.path)
  if (index === -1) return
  currentIndex.value = index
})


</script>

<style lang="less" scoped>
.tab-bar {
  img {
    height: 28px;
  }
}
</style>
