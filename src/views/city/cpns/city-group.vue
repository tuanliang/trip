<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">

      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(item, index) in groupData.hotCities" :key="index">
          <div class="city" @click="itemClick(item)">{{ item.cityName }}</div>
        </template>
      </div>


      <template v-for="(item, index) in groupData?.cities" :key="index">
        <van-index-anchor :index="item.group" />
        <template v-for="(city, indey) in item.cities" :key="indey">
          <van-cell :title="city.cityName" @click="itemClick(city)" />
        </template>
      </template>

    </van-index-bar>

  </div>
</template>

<script setup>
import useCityStore from '@/store/modules/city';
import { computed } from 'vue';
import { useRouter } from 'vue-router';


const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

const indexList = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift("#")
  return list
})

const router = useRouter()
const cityStore = useCityStore()
const itemClick = (item) => {
  cityStore.currentCity = item

  router.back()
}
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px;
  padding-right: 25px;

  .city {
    width: 70px;
    height: 28px;
    background-color: #fff4ec;
    text-align: center;
    line-height: 28px;
    margin-top: 10px;
    border-radius: 14px;
    font-size: 12px;
  }
}
</style>
