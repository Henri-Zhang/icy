<template>
  <div>
    <div class="header">
      <div class="common-title left">
        <p class="title">{{ title }}</p>
        <p class="line"></p>
      </div>
      <div v-if="viewMore" class="right">
        <p class="more">查看更多</p>
      </div>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    viewMore: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;

    p {
      margin: 0;
    }

    .common-title {
      .title {
        font-size: .8rem;
        color: #333;
        font-weight: 700;
      }

      .line {
        margin-top: .6rem;
        background: #ffaf90;
        height: 4px;
        width: 1rem;
      }
    }

    .more {
      margin-top: .2rem;
      font-size: .5rem;
      padding-right: .2rem;
      color: #999;
    }
  }
</style>
