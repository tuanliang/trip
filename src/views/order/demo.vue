<template>
  <div class="demo">
    <h2>{{ currentDemo }}</h2>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentDemo = ref(0)

defineExpose({
  currentDemo
})
</script>

<style lang="less" scoped></style>
