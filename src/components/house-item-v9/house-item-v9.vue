<template>
  <div class="house-item">
    <div class="inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="info">
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="tip">
          <van-rate :model-value="Number(itemData.commentScore)" :size="14" color="#fff" readonly allow-half />
          <div class="price">￥{{ itemData.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.house-item {
  width: 50%;

  .inner {
    margin: 5px;
    position: relative;

    .cover {
      img {
        width: 100%;
        border-radius: 10px;
      }
    }

    .info {
      position: absolute;
      bottom: 0;
      padding: 8px 10px;
      color: #fff;
      font-size: 12px;

      .name {
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .tip {
        display: flex;

        .price {
          margin-left: 4px;
        }
      }
    }
  }
}
</style>
