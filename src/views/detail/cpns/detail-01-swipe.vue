<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="item in swipeData">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>

      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <template v-for="(value, key, index) in swipeGroup" :key="key">
            <div class="item" :class="{ active: swipeData[active]?.enumPictureCategory == key }">
              <span class="text">{{ getname(value[0].title) }}</span>
              <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                {{ getIndex(swipeData[active]) }}/{{ value.length }}
              </span>
            </div>
          </template>
        </div>
      </template>
    </van-swipe>

  </div>
</template>

<script setup>
const props = defineProps({
  swipeData: {
    type: Array,
    default: () => []
  }
})

const swipeGroup = {}
for (const item of props.swipeData) {
  let swipeArr = swipeGroup[item.enumPictureCategory]
  if (!swipeArr) {
    swipeArr = []
    swipeGroup[item.enumPictureCategory] = swipeArr
  }
  swipeArr.push(item)
}
const getname = (item) => {
  return item.replace("：", "").replace("【", "").replace("】", "")
}

const getIndex = (item) => {
  const curArr = swipeGroup[item.enumPictureCategory]
  return curArr.findIndex(data => data === item) + 1
}
</script>

<style lang="less" scoped>
.swipe {
  .swipe-list {
    .item {
      img {
        width: 100%;
      }
    }
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    display: flex;
    font-size: 12px;
    color: #fff;
    background: rgba(0, 0, 0, 0.7);

    .item {
      margin-left: 5px;

      &.active {
        padding: 0 3px;
        border-radius: 2px;
        background-color: #fff;
        color: #333;
      }
    }
  }
}
</style>
