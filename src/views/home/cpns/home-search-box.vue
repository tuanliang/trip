<template>
  <div class="search">
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class=text>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <div class="section" @click="showCalander = true">
      <div class="start">
        <div class="date">
          <span class="tip">入驻</span>
          <span class="time">{{ startDate }}</span>
        </div>
      </div>
      <div class="stay">
        共{{ stayDay }}晚
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">入驻</span>
          <span class="time">{{ endDate }}</span>
        </div>
      </div>
    </div>
    <van-calendar v-model:show="showCalander" type="range" @confirm="onConfirm" :round="false" />

    <div class="info section">
      <div class="price">
        价格不限
      </div>
      <div class="people">
        人数不限
      </div>
    </div>
    <div class="hotel section">
      关键/字位置/民宿名
    </div>

    <div class="hot-suggest">
      <template v-for="(item, index) in hotSuggest.data" :key="index">
        <div class="item" :style="{ color: item.tagText.color, background: item.tagText.background.color }">
          {{ item?.tagText?.text }}
        </div>
      </template>
    </div>

    <div class="search-btn" @click="btnClick">
      <div class="btn">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import useCityStore from '@/store/modules/city';
import { formatMonthDay, getDiffDay } from '@/utils/format_day';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import useHomeStore from '@/store/modules/home'

const positionClick = () => {
  navigator.geolocation.getCurrentPosition((res) => {
    console.log("获取位置", res)
  }, err => {
    console.log(err)
  })
}

// 跳转到城市
const router = useRouter()
const cityClick = () => {
  router.push("/city")
}

const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

const nowDate = new Date()
const startDate = ref(formatMonthDay(nowDate))
const newDate = new Date().setDate(nowDate.getDate() + 1)
const endDate = ref(formatMonthDay(newDate))
const stayDay = ref(getDiffDay(nowDate, newDate))

const showCalander = ref(false)

const onConfirm = (value) => {
  const selectStart = value[0]
  const seleEnd = value[1]
  startDate.value = formatMonthDay(selectStart)
  endDate.value = formatMonthDay(seleEnd)
  showCalander.value = false
  stayDay.value = getDiffDay(selectStart, seleEnd)
}

const homeStore = useHomeStore()
const { hotSuggest } = storeToRefs(homeStore)

const btnClick = () => {
  router.push({
    path: "/search",
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityName
    }
  })
}
</script>

<style lang="less" scoped>
.search {
  --van-calendar-popup-height: 100%;
}

.location {
  display: flex;
  align-items: center;
  height: 2.75rem;
  padding: 0 1.25rem;

  .city {
    flex: 1;
  }

  .position {
    display: flex;
    align-items: center;
    width: 4.625rem;

    // vertical-align: top;
    .text {
      font-size: .75rem;
    }

    img {
      width: 1.125rem;
      height: 1.125rem;
      margin-left: .125rem;
    }
  }
}

.section {
  display: flex;
  justify-content: space-between;
  padding: 0 18px;
  height: 44px;
  flex-wrap: wrap;
  align-items: center;


  .stay {
    position: relative;
    top: 2px;
  }

  .end {
    margin-right: 25px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 2px;
      color: #000;
    }
  }
}

.info {
  color: #999;

  .people {
    padding-right: 28px;
  }
}

.hotel {
  color: #999;
}

.hot-suggest {
  display: flex;
  padding: 0 18px;
  height: auto;
  flex-wrap: wrap;
  align-items: center;

  .item {
    font-size: 12px;
    margin: 4px;
    padding: 2px 8px;
    border-radius: 4px;
  }
}

.search-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  margin-top: 5px;

  .btn {
    width: 342px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    color: #fff;

    font-size: 16px;
    background-color: var(--primary-color);
    border-radius: 12px;
  }
}
</style>
