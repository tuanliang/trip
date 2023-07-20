<template>
  <div class="infos">
    <div class="name">{{ infoData.houseName }}</div>
    <div class="tags">
      <template v-for="item in infoData?.houseTags">
        <span class="text" :style="{ color: item.tagText?.color, background: item.tagText?.background.color }">{{
          item.tagText?.text
        }}</span>
      </template>
    </div>
    <div class="comment">
      <div class="left">
        <span class="left-rate">{{ infoData?.commentBrief?.overall }}</span>
        <span class="left-great">{{ infoData?.commentBrief?.scoreTitle }}</span>
        <span class="left-info">{{ infoData?.commentBrief?.commentBrief }}</span>
      </div>
      <div class="right">{{ infoData?.commentBrief?.totalCountStr }}条评论<van-icon name="arrow" /></div>
    </div>
    <div class="position">
      <span class="left">{{ infoData?.nearByPosition?.address }}</span>
      <span class="right">地图·周边<van-icon name="arrow" /></span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  infoData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.infos {
  padding: 16px;

  .name {
    font-size: 20px;
    font-weight: 700;
  }

  .tags {
    margin: 4px 0;

    .text {
      font-size: 12px;
      margin: 0 2px;
      padding: 0 2px;
    }
  }

  .comment {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    font-size: 14px;
    background-color: #f2f2f2;
    padding: 4px 4px;

    .left {
      .left-rate {
        font-weight: 700;
        font-size: 16px;
      }

      .left-great {
        margin: 0 4px;
      }
    }

    .right {
      color: #ff9854;
    }
  }

  .position {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    font-size: 14px;
    background-color: #f2f2f2;
    padding: 4px 4px;

    .right {
      color: #ff9854;
    }
  }
}
</style>
