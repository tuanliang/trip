<template>
  <div class="detail">
    <van-nav-bar title="房屋详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    <detail-swipe :swipe-data="mainPart?.topModule?.housePicture?.housePics"></detail-swipe>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { getDetailInfos } from '@/services/index'
import detailSwipe from './cpns/detail-01-swipe.vue';

const router = useRouter()
const route = useRoute()
const houseId = route.params.id
const onClickLeft = () => {
  router.back()
}

const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)
getDetailInfos(houseId).then(res => {
  detailInfos.value = res.data.data
})
</script>

<style lang="less" scoped></style>
