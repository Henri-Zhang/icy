<template>
  <container :title="title" :view-more="true">
    <div slot="content">
      <div v-for="(item, index) in items" :key="index">
        <item
          :product-pic="item.productPic"
          :name="item.name"
          :comment="item.comment"
          :time="item.time"
          :pics="item.pics"
          />
      </div>
    </div>
  </container>
</template>

<script>
import Container from './../Container'
import Item from './item'
import { Comments } from '@/engine'

export default {
  components: {
    Container,
    Item
  },
  mounted() {
    this.fetchComments()
  },
  data() {
    return {
      title: '大家说',
      items: []
    }
  },
  methods: {
    fetchComments: async function() {
      const result = await Comments.fetchAll()
      this.items = result
    }
  }
}
</script>
