<template>
  <div class="parent">
    parent
    <hr>
    <demo ref="child"></demo>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import demo from './demo.vue'

const child = ref()
console.log(child.currentDemo)
console.log(child.value)
console.log(child.currentDemo)
</script>

<style lang="less" scoped></style>
