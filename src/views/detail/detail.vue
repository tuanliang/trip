<template>
  <div class="detail top-page">
    <van-nav-bar title="房屋详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    <detail-swipe :swipe-data="mainPart?.topModule?.housePicture?.housePics"></detail-swipe>
    <detail-infos :info-data="mainPart?.topModule"></detail-infos>
    <detail-facility :facility-data="mainPart?.dynamicModule?.facilityModule?.houseFacility"></detail-facility>
    <detail-landlord :landlord-data="mainPart?.dynamicModule?.landlordModule"></detail-landlord>
    <detail-comment :comment-data="mainPart?.dynamicModule?.commentModule"></detail-comment>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { getDetailInfos } from '@/services/index'
import detailSwipe from './cpns/detail-01-swipe.vue';
import detailInfos from './cpns/detail-02-infos.vue';
import detailFacility from './cpns/detail-03-facility.vue'
import detailLandlord from './cpns/detail-04-landlord.vue'
import detailComment from './cpns/detail-05-comment.vue'

const router = useRouter()
const route = useRoute()
const houseId = route.params.id
const onClickLeft = () => {
  router.back()
}

const detailInfo = ref({})
const mainPart = computed(() => detailInfo.value.mainPart)
getDetailInfos(houseId).then(res => {
  detailInfo.value = res.data.data
})
</script>

<style lang="less" scoped></style>
