<template>
  <container :title="title">
    <div slot="content">
      <div v-for="(item, index) in items" :key="index">
        <item :title="item.title" :pic="item.pic" :goods-count="item.goodsCount" :sub-title="item.subTitle" />
      </div>
    </div>
  </container>
</template>

<script>
import Container from './../Container'
import Item from './item'
import { WeekUpdate } from '@/engine'

export default {
  components: {
    Container,
    Item
  },
  mounted() {
    this.fetchUpdates()
  },
  data() {
    return {
      title: '本周更新',
      items: []
    }
  },
  methods: {
    fetchUpdates: async function() {
      this.items = await WeekUpdate.fetchUpdates({ count: 7 })
    }
  }
}
</script>
