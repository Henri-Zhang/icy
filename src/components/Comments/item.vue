<template>
  <div class="content">
    <div class="left">
      <img class="product-pic" :src="productPic" />
    </div>
    <div class="right">
      <header>
        <span>{{ name }}</span>
        <span class="time">{{ time }}</span>
      </header>
      <p class="comment">{{ comment }}</p>
      <footer>
        <div class="comment-image" v-for="(pic, index) in pics" :key="index">
          <img :src="pic" />
      </div>
      </footer>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    productPic: String,
    name: String,
    comment: String,
    time: String,
    pics: Array
  }
}
</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    .left {
      position: relative;
      width: 30%;
      overflow: hidden;

      .product-pic {
        width: 100%;
        height: 100%;
      }
    }

    .right {
      font-size: .4rem;
      width: 65%;

      header {
        display: flex;
        justify-content: space-between;

        .time {
          color: #999;
        }
      }

      .comment {
        color: #333;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      footer {
        margin-top: .5rem;
        display: flex;

        .comment-image {
          position: relative;
          width: 1.5rem;
          height: 1.8rem;
          margin-right: .1rem;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>
