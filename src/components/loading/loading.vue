<template>
  <div class="loading" v-if="mainStore.isloading" @click="cancelClick">
    <div class="bg">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/store/modules/main'

const mainStore = useMainStore()
const cancelClick = () => {
  mainStore.isloading = false
}
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: rgba(0, 0, 0, .5);

  .bg {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 104px;
    height: 104px;
    background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;

    img {
      width: 70px;
      height: 70px;
      margin-bottom: 10px;
    }
  }
}
</style>
