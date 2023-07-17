<template>
  <div class="city top-page">
    <van-search v-model="searchValue" placeholder="城市/区域/位置" show-action @cancel="onCancel" />
    <van-tabs v-model:active="tabActive" color="#ff9854">
      <template v-for="(value, key, index) in allCities" :key="key">
        <van-tab :title="value.title">
        </van-tab>
      </template>
    </van-tabs>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/store/modules/city.js'
import { storeToRefs } from "pinia"

const searchValue = ref("")

const router = useRouter()
const onCancel = () => {
  router.back()
}

const tabActive = ref(0)

const cityStore = useCityStore()
cityStore.fetchAllCitiesData(0)
const { allCities } = storeToRefs(cityStore)

</script>

<style lang="less" scoped>
.city {}
</style>
