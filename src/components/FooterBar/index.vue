<template>
  <van-tabs class="footer-bar" v-model="active" :line-width="lineWidth">
    <van-tab title="STYLE"></van-tab>
    <van-tab title="ICON"></van-tab>
    <van-tab title="SHOP"></van-tab>
    <van-tab title="ME"></van-tab>
  </van-tabs>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant'
Vue.use(Tab).use(Tabs)

export default {
  data() {
    return {
      active: 0,
      lineWidth: 30
    }
  }
}
</script>

<style lang="scss">
  .footer-bar {
    position: fixed;
    bottom: -.12rem;
    width: 100%;
    height: 1.4rem;
    padding: 0;
    line-height: 1.4rem;
    background-color: white;
    color: black;
    font-size: 2rem;
    z-index: 200;

    .van-tab {
      color: #aaa;
      width: 25%;
      height: 1.4rem;
      text-align: center;
      cursor: pointer;
      position: relative;

      .van-ellipsis {
        font-size: .5rem;
        color: #aaa;
      }
    }

    .van-tab--active span {
      color: black !important;
    }

    .van-tabs__line {
      height: .1rem;
      background-color: black !important;
    }
  }
</style>