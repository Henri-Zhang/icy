<template>
  <div id="app">
    <header-bar />
    <van-list v-model="loading" :finished="finished" @load="onLoad" :loading="false" :offset="50" :immediate-check="false">
      <van-cell>
        <swipe />
      </van-cell>
      <van-cell>
        <week-update />
      </van-cell>
      <van-cell v-if="showComments">
        <comments />
      </van-cell>
    </van-list>
    <footer-bar />

  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, FooterBar, WeekUpdate, Comments, HeaderBar } from '@/components'
import { List, Cell } from 'vant'

Vue.use(List).use(Cell)

export default {
  components: {
    HeaderBar,
    WeekUpdate,
    Comments,
    Swipe,
    FooterBar
  },
  data() {
    return {
      loading: false,
      finished: false,
      showComments: false
    }
  },
  methods: {
    onLoad: function() {
      this.loading = false
      this.finished = true
      this.showComments = true
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  margin: 0 auto;
}
</style>
