<template>
  <div class="city top-page">
    <div class="top">
      <van-search v-model="searchValue" placeholder="城市/区域/位置" show-action @cancel="onCancel" />
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key">
          </van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allCities">
        <city-group v-show="tabActive === key" :group-data="value"></city-group>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/store/modules/city.js'
import { storeToRefs } from "pinia"
import CityGroup from './cpns/city-group.vue'

const searchValue = ref("")

const router = useRouter()
const onCancel = () => {
  router.back()
}

const tabActive = ref(0)

const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)


</script>

<style lang="less" scoped>
.city {

  .top {
    display: relative;
    z-index: 9;
  }

  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
