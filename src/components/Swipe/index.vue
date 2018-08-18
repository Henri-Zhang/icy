<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload } from 'vant'

Vue.use(Swipe).use(SwipeItem).use(Lazyload)

export default {
  data() {
    return {
      images: [
        'https://image3.ichuanyi.cn/ai-admin/6dddea7ed9f2e9966a4df9b601982dfc.png?imageMogr2/thumbnail/675x498.6/format/webp/interlace/1',
        'https://image3.ichuanyi.cn/ai-admin/9ae2c5d60f6f9298524d9ffbf92575f4.jpeg?imageMogr2/thumbnail/675x621/format/webp/interlace/1',
        'https://image3.ichuanyi.cn/ai-admin/da8c1309dcebd8011ae3cf9564d9fc25.jpeg?imageMogr2/thumbnail/675x621/format/webp/interlace/1'
      ]
    }
  }
}
</script>

<style lang="scss">
.van-swipe-item {
  img {
    width: 100%;
  }
}
</style>
