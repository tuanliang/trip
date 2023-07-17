<template>
  <div class="search">
    <div class="location">
      <div class="city" @click="cityClick">北京</div>
      <div class="position" @click="positionClick">
        <span class=text>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

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
</script>

<style lang="less" scoped>
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
</style>
