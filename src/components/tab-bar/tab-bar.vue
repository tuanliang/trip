<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
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
import { ref } from 'vue';
import { getAssetURL } from "@/utils/get_assets.js"
import tabbarData from '@/assets/data/tabbar'

const currentIndex = ref(0)


</script>

<style lang="less" scoped>
.tab-bar {
  img {
    height: 28px;
  }
}
</style>
