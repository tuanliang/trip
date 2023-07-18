<template>
  <div class="categories">
    <template v-for="item in categories.data" :key="item.id">
      <div class="list">
        <img :src="item.pictureUrl" alt="">
        <div class="text">
          {{ item.title }}
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/store/modules/home';
import { storeToRefs } from 'pinia';


const homeStore = useHomeStore()

const { categories } = storeToRefs(homeStore)

</script>

<style lang="less" scoped>
.categories {
  display: flex;
  overflow-x: auto;
  height: 80px;

  &::-webkit-scrollbar {
    display: none;
  }

  .list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    flex-direction: column;
    width: 70px;

    img {
      width: 32px;
      height: 32px;
    }
  }

}
</style>
