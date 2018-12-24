<template>
  <div>
    <span class="guide_item" :class="{on: '/msite'===$route.path}" @click="goTo('/msite')">
      <span class="item_icon">
      <i class="iconfont icon-waimai"></i>
      </span>
        <span>外卖</span>
      </span>
  </div>
</template>
<script>
</script>
<style>
</style>
