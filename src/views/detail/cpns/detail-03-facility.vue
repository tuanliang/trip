<template>
  <div class="facility">
    <detail-section title="房屋设置" more-text="查看更多房屋设施">
      <div class="facility-inner">
        <template v-for="(item, index) in facilityData.houseFacilitys" :key="index">
          <div class="item" v-if="facilityData.facilitySort?.includes(index)">
            <div class="head">
              <img :src="item.icon" alt="">
              <span class="text">{{ item.groupName }}</span>
            </div>
            <div class="list">
              <template v-for="(iten, indxy) in item.facilitys.slice(0, 4)" :key="indxy">
                <div class="iten">
                  <i class="icon_check"></i>
                  <span class="text">{{ iten.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from '../../../components/detail-section/detail-section.vue';

defineProps({
  facilityData: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style lang="less" scoped>
.facility-inner {
  .item {
    display: flex;
    margin: 25px 0;

    .head {
      width: 90px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 3px;

      img {
        width: 20px;
        height: 20px;
      }

      .text {
        margin-top: 2px;
        font-size: 12px;
      }
    }

    .list {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      flex: 1;

      .iten {
        display: flex;
        align-items: center;
        width: 50%;

        .text {
          margin-left: 6px;
        }
      }
    }
  }
}
</style>
