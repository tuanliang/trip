<template>
  <div class="house-item">
    <div class="inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="">
          <div class="lname">
            {{ itemData.location }}
          </div>
        </div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="price">
          <div class="new">￥{{ itemData.finalPrice }}</div>
          <div class="old">￥{{ itemData.productPrice }}</div>
          <div class="tip">{{ itemData?.priceTipBadge?.text }}</div>
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

    .cover {
      img {
        width: 100%;
        border-radius: 5px;
      }
    }

    .info {
      padding: 0 5px;
      color: #666;
      font-size: 12px;
    }

    .location {
      display: flex;
      align-items: center;
      margin-top: 8px;

      img {
        width: 12px;
        height: 12px;
      }
    }

    .name {
      color: #000;
      font-size: 14px;
      margin-top: 3px;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .summary {
      margin-top: 4px;
      font-size: 13px;
      color: #333;
      margin-top: 4px;
    }

    .price {
      display: flex;
      margin-top: 8px;

      .new {
        color: var(--primary-color);

      }

      .old {
        margin: 0 4px;
        text-decoration: line-through;
      }

      .tip {
        background-color: #f66;
        color: #fff;
        padding: 0 6px;
        border-radius: 8px;

      }
    }
  }

}
</style>
