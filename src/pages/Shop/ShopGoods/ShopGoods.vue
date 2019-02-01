<template>
  <section>
    商家货物
  </section>
</template>
<script>
import {mapState} from 'vuex'
export default {
  mounted () {
    // 获取商家商品信息
    this.$store.dispatch('getShopGoods')
  },
  computed: {
    ...mapState(['goods'])
  }
}
</script>
