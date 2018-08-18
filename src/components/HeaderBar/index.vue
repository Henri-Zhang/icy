<template>
  <van-nav-bar v-if="show" class="top-header" title="标题" left-text="返回" left-arrow fixed :z-index="200">
    <van-search placeholder="请输入搜索关键词" v-model="searchValue" slot="title" />
    <van-icon name="shopping-cart" slot="right" />
  </van-nav-bar>
</template>

<script>
import Vue from 'vue'
import { NavBar, Search, Icon } from 'vant'
import _ from 'lodash'

Vue.use(NavBar).use(Search).use(Icon)

export default {
  mounted() {
    window.addEventListener('scroll', _.throttle(this.handleScroll, 200))
  },
  data() {
    return {
      show: true,
      searchValue: '连衣裙'
    }
  },
  methods: {
    handleScroll: function() {
      if (document.documentElement.scrollTop < 100) {
        this.show = false;
      } else {
        this.show = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.top-header {
  left: auto;
  width: 100%;
}
</style>
