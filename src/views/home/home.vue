<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>

    <home-search-box></home-search-box>

    <home-categories></home-categories>

    <div v-if="isSearchBar" class="search-bar">
      <search-bar />
    </div>
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
import SearchBar from '@/components/search-bar/search-bar.vue'
import { watch, computed } from 'vue';


const homeStore = useHomeStore()
homeStore.fetchHomeSuggest()
homeStore.fetchCategories()
homeStore.fetchHomeList()

const moreHouse = () => {
  console.log("jiazai")
  homeStore.fetchHomeList()
}


const { isBottom, scrollTop } = useScroll()

watch(isBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHomeList().then(() => {
      isBottom.value = false
    })
  }
})

const isSearchBar = computed(() => {
  return scrollTop.value >= 100
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

  .search-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    line-height: 45px;
    background-color: #fff;
    padding: 16px 16px 10px;
    box-sizing: border-box;
    z-index: 9;
  }

}
</style>
