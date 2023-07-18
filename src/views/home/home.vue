<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>

    <home-search-box></home-search-box>

    <home-categories></home-categories>
    <home-content></home-content>
    <button @click="moreHouse">加载更多</button>
  </div>
</template>

<script setup>
import useHomeStore from '@/store/modules/home';
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from './cpns/home-search-box.vue'
import homeCategories from './cpns/home-categories.vue';
import HomeContent from './cpns/home-content.vue'
import useScroll from '@/hooks/usescroll';
import { watch } from 'vue';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
homeStore.fetchHomeSuggest()
homeStore.fetchCategories()
homeStore.fetchHomeList()

const moreHouse = () => {
  console.log("jiazai")
  homeStore.fetchHomeList()
}


const { isBottom } = useScroll()

watch(isBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHomeList().then(() => {
      isBottom.value = false
    })
  }
})

</script>

<style lang="less" scoped>
.home {
  box-sizing: border-box;
  padding-bottom: 60px;
  // height: 100vh;
  // overflow-y: auto;

  .banner {
    img {
      width: 100%;
    }
  }


}
</style>
