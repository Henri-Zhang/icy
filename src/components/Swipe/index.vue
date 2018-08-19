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
import { Swipe as SwipeEngine } from '@/engine'

Vue.use(Swipe).use(SwipeItem).use(Lazyload)

export default {
  mounted() {
    this.fetchImages()
  },
  data() {
    return {
      images: []
    }
  },
  methods: {
    fetchImages: async function() {
      this.images = await SwipeEngine.fetchImages({ count: 3 })
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
