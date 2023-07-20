<template>
  <div class="landlord">
    <detail-section title="房东介绍" more-text="查看房东主页">
      <div class="header">
        <img :src="landlordData.topScroll" alt="">
      </div>
      <div class="content">
        <div class="left">
          <div class="avator">
            <img :src="landlordData.hotelLogo" alt="">
          </div>
          <div class="infos">
            <div class="name">{{ landlordData.hotelName }}</div>
            <div class="info">
              <template v-for="(item, index) in landlordData.hotelTags" :key="index">
                <div class="item">
                  {{ item.tagText.text }}<span v-if="index !== landlordData.hotelTags.length - 1" class="line">|</span>
                </div>
              </template>
            </div>
          </div>

        </div>
        <div class="right">
          <div class="btn">
            联系房东
          </div>
        </div>
      </div>
      <div class="bottom">
        <template v-for="(item, index) in landlordData.hotelSummary" :key="index">
          <div class="item">
            <div class="rate">{{ item.title }}</div>
            <div class="count">{{ item.introduction }}</div>
            <div class="text">{{ item.tip }}</div>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/detail-section.vue'

defineProps({
  landlordData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.landlord {
  .header {
    img {
      width: 100%;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;

      .avator {
        img {
          width: 54px;
          height: 54px;
        }
      }

      .infos {
        margin-top: 5px;
        padding: 4px 10px;

        .name {
          font-size: 16px;
          font-weight: 700;
        }

        .info {
          display: flex;

          .item {
            color: #333;
            font-size: 12px;
            margin-top: 4px;

            .line {
              margin: 0 2px;
            }
          }
        }
      }
    }

    .right {
      .btn {
        padding: 0 12px;
        border-radius: 6px;
        height: 24px;
        line-height: 24px;
        background-color: #fa8c1d;
        color: #fff;
        margin-top: 10px;
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding: 5px 10px;

    .item {
      .rate {
        color: #999;
        font-size: 12px;
      }

      .count {
        font-size: 16px;
        font-size: 700;
        margin: 4px 0;
      }

      .text {
        color: #999;
        font-size: 12px;
      }
    }
  }
}
</style>
