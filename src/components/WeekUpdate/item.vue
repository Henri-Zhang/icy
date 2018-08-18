<template>
  <div class="content">
    <div v-if="goodsCount" class="goods-count">
      <p class="big-font">含{{ goodsCount }}</p>
      <p>件单品</p>
    </div>
    <div>
      <img :src="pic" />
    </div>
    <div class="common-word">
      <p class="title">{{ title }}</p>
      <p class="sub-title">{{ subTitle }}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    pic: String,
    title: String,
    subTitle: String,
    goodsCount: Number
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
    margin-bottom: 1rem;
    position: relative;

    img {
      width: 100%;
    }
  }

  .goods-count {
    position: absolute;
    top: .7rem;
    left: .5rem;
    z-index: 1;
    color: #fff;
    font-size: .5rem;
    background: rgba(0,0,0,.2);
    padding: .15rem .12rem;
    border: 2px solid #fff;

    .big-font {
      font-weight: 600;
      font-size: .7rem;
      margin-bottom: .1rem;
      letter-spacing: .1rem;
    }

    p {
      margin: 0;
    }
  }

  .common-word {
    font-size: .6rem;
    color: #474747;
    font-weight: 700;

    .sub-title {
      font-size: .4rem;
      color: #999;
      margin-top: .5rem;
    }
  }
</style>
