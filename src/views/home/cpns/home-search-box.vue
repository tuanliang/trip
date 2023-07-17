<template>
  <div class="search">
    <div class="location">
      <div class="city">城市</div>
      <div class="position" @click="positionClick">
        <span class=text>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
const positionClick = () => {
  navigator.geolocation.getCurrentPosition((res) => {
    console.log("获取位置", res)
  }, err => {
    console.log(err)
  })
}
</script>

<style lang="less" scoped>
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
  }

  .position {
    display: flex;
    align-items: center;
    width: 74px;

    // vertical-align: top;
    .text {
      font-size: 12px;
    }

    img {
      width: 18px;
      height: 18px;
      margin-left: 2px;
    }
  }
}
</style>
