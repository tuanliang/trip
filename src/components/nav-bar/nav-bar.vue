<template>
  <div class="nav-bar">
    <template v-for="(item, index) in title" :key="index">
      <div class="item" @click="itemClick(index)" :class="{ active: index === currentIndex }">
        <span class="text">{{ item }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  title: {
    type: Array,
    default: () => []
  }
})
const currentIndex = ref(0)
const emit = defineEmits(["baritemClick"])
const itemClick = (index) => {
  currentIndex.value = index
  emit("baritemClick", index)
}


</script>

<style lang="less" scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-sizing: border-box;
  align-items: center;

  .item {
    flex: 1;

    &.active span {
      border-bottom: 3px solid #ff9854;
      border-radius: 3px;
      padding: 8px;
    }
  }
}
</style>
