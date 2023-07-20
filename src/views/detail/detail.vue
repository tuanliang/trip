<template>
  <div class="detail top-page" ref="navBarRef">
    <nav-bar :title="['描述', '设施', '房东', '评论', '地图']" class="nav-bar" v-show="showTabbar" @baritemClick="barclick"
      ref="tabControlRef"></nav-bar>


    <van-nav-bar title="房屋详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="mainpart" v-memo="[mainPart]">
      <detail-swipe :swipe-data="mainPart?.topModule?.housePicture?.housePics"></detail-swipe>
      <detail-infos :ref="getSectionRef" :info-data="mainPart?.topModule"></detail-infos>
      <detail-facility :ref="getSectionRef"
        :facility-data="mainPart?.dynamicModule?.facilityModule?.houseFacility"></detail-facility>
      <detail-landlord :ref="getSectionRef" :landlord-data="mainPart?.dynamicModule?.landlordModule"></detail-landlord>
      <detail-comment :ref="getSectionRef" :comment-data="mainPart?.dynamicModule?.commentModule"></detail-comment>
      <detail-map :ref="getSectionRef" :position="mainPart?.dynamicModule?.positionModule"></detail-map>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { getDetailInfos } from '@/services/index'
import detailSwipe from './cpns/detail-01-swipe.vue';
import detailInfos from './cpns/detail-02-infos.vue';
import detailFacility from './cpns/detail-03-facility.vue'
import detailLandlord from './cpns/detail-04-landlord.vue'
import detailComment from './cpns/detail-05-comment.vue'
import detailMap from './cpns/detail-07-map.vue'
import navBar from '@/components/nav-bar/nav-bar.vue'
import useScroll from '@/hooks/usescroll.js'

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

const navBarRef = ref()
const { scrollTop } = useScroll(navBarRef)
const showTabbar = computed(() => {
  return scrollTop.value >= 300
})

const sectionArr = []
sectionArr.slice(0, 4)
const getSectionRef = (value) => {
  if (!value) return
  sectionArr.push(value.$el)
}

let isClick = false
let currentDistance = -1
const barclick = (index) => {
  let distance = sectionArr[index].offsetTop
  if (index !== 0) distance -= 44

  isClick = true
  currentDistance = distance

  navBarRef?.value?.scrollTo({
    top: distance,
    behavior: "smooth"
  })
}

const tabControlRef = ref()
watch(scrollTop, (newValue) => {
  if (Math.abs(newValue - currentDistance) < 2) {
    isClick = false
  }
  if (isClick) return

  const values = []
  for (const item in sectionArr) {
    values.push(sectionArr[item].offsetTop)
  }
  // 根据newValue匹配想要的索引
  let index = values.length - 1
  for (let i = 0; i < values.length; i++) {
    if (values[i] > newValue + 44) {
      index = i - 1
      break
    }
  }

  tabControlRef.value.currentIndex = index
})


</script>

<style lang="less" scoped>
.nav-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 44px;
  display: flex;
  z-index: 9;
  background-color: #fff;


}
</style>
