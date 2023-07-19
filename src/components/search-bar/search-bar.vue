<template>
  <div class="search">
    <div class="left">
      <div class="select-time">
        <div class="tip">住</div>
        <div class="time">{{ startDateStr }}</div>
      </div>
      <div class="select-time">
        <div class="tip">离</div>
        <div class="time">{{ endDateStr }}</div>
      </div>
    </div>
    <div class="center">
      <input type="text" placeholder="关键字/位置/民宿">
    </div>
    <div class="right">
      <div class="icon"></div>
    </div>

  </div>
</template>

<script setup>
import useMainStore from '@/store/modules/main'
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { formatMonthDay } from '@/utils/format_day'

const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)

const startDateStr = computed(() => formatMonthDay(startDate.value, "MM.DD"))
const endDateStr = computed(() => formatMonthDay(endDate.value, "MM.DD"))
</script>

<style lang="less" scoped>
.search {
  display: flex;
  align-items: center;
  height: 45px;
  line-height: 45px;
  color: #999;
  box-sizing: border-box;
  background-color: #f2f4f6;
  border-radius: 6px;
  padding: 0 10px;
  z-index: 9;

  .left {

    display: flex;
    flex-direction: column;
    font-size: 12px;
    padding: 2px 4px;

    .select-time {

      display: flex;
      flex-direction: row;
      line-height: normal;
      align-items: center;
      padding-right: 6px;

      .tip {
        padding-right: 4px;
      }

      .time {
        color: #333;
      }
    }
  }

  .center {
    input {
      border: 0px;
      height: 45px;

      background-color: #f2f4f6;
    }
  }

  .right {
    width: 150px;
    // position: absolute;

    .icon {
      width: 24px;
      height: 24px;
      display: flex;
      // position: relative;
      top: 6px;
      background-image: url(../../assets/img/home/home-sprite.png);
      background-position: -29px -151px;
      background-size: 207px 192px;
      margin-left: 75px;
    }
  }
}
</style>
