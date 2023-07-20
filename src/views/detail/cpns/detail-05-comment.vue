<template>
  <div class="comment">
    <detail-section title="热门评论" :more-text="`查看全部${commentData.totalCount}评论`">
      <div class="header">
        <div class="left">
          <div class="score">
            <div class="text">{{ commentData.overall }}</div>
            <div class="line"></div>
          </div>
          <div class="infos">
            <div class="title">{{ commentData.scoreTitle }}</div>
            <div class="info">{{ commentData.totalCount }}</div>
            <div class="count">
              <van-rate v-model="commentData.overall" readonly allow-half size="12" color="#ff9854" />
            </div>
          </div>
        </div>
        <div class="right">
          <template v-for="item in commentData.subScores">
            <div class="item">
              {{ item }}
            </div>
          </template>
        </div>
      </div>
      <div class="content">
        <template v-for="item in commentData.commentTagVo">
          <div class="item">
            {{ item.text }}
          </div>
        </template>
      </div>
      <div class="bottom">
        <div class="brief">
          <img :src="commentData?.comment?.userAvatars" alt="">
          <div class="info">
            <div class="name">{{ commentData?.comment?.userName }}</div>
            <div class="time">{{ commentData?.comment?.checkInDate }}</div>
          </div>
        </div>
        <div class="comment">
          {{ commentData?.comment?.commentDetail }}
        </div>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';

defineProps({
  commentData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.comment {
  .header {
    display: flex;
    justify-content: space-between;
    padding: 4px;
    align-items: center;

    .left {
      display: flex;

      .score {
        font-size: 40px;
        font-weight: 700;

        .line {
          border: 3px solid #ff9854;
          margin-top: -9px;
          border-radius: 3px;
        }
      }

      .infos {
        color: #999;
        margin-left: 16px;

        .title {
          font-size: 12px;
        }

        .info {
          font-size: 10px;
        }
      }
    }

    .right {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      justify-content: flex-end;

      .item {
        font-size: 12px;
        color: #ccc;
      }
    }
  }

  .content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 4px;

    .item {
      font-size: 12px;
      background-color: #f7f9fb;
      padding: 3px 5px;
      margin-top: 5px;
    }
  }

  .bottom {
    .brief {
      display: flex;
      margin: 20px 0;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      .info {
        padding: 2px 10px;

        .time {
          color: #ccc;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
