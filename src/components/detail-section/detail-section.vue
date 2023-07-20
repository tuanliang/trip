<template>
  <div class="section">
    <div class="header">
      <h2>{{ title }}</h2>
    </div>
    <div class="content">
      <slot>
        我是默认插槽
      </slot>
    </div>
    <div class="footer">{{ moreText }}<van-icon name="arrow" /></div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "默认内容"
  },
  moreText: {
    type: String,
    default: "查看内容"
  }
})
</script>

<style lang="less" scoped>
.section {
  padding: 18px;
  border-top: 8px solid #f2f2f2;

  .header {
    height: 50px;
    line-height: 50px;
  }

  .footer {
    display: flex;
    height: 44px;
    line-height: 44px;
    justify-content: flex-end;
    align-items: center;
    color: #ff9854;
  }
}
</style>
