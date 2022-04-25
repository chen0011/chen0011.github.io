<template>
  <div class="title">
    <div class="hot">
      <img class="icon" src="@/assets/images/hot.png" width="80px" alt="" />
      <a href="https://search.cctv.com/search.php?qtext=%E7%96%AB%E6%83%85&type=web">查看更多<img src="@/assets/images/more.png" alt="" /></a>
    </div>
    <ul >
      <li v-for='item in newsList' :key="item.id">
        <a :href="item.sourceUrl">
          <span>最新</span>{{ item.title }}
          <img src="@/assets/images/right.png" width='15px' alt="">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'covInfo',
  props: {
    newsList: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style lang='less' scoped>
.title {
  padding: 0.2rem;
  .hot {
    a {
      float: right;
      img {
        width: 15px;
      }
    }
  }
  ul {
    a {
      color: #666;
    }
    li {
      margin-top: 0.2rem;
      font-size: 0.3rem;
      span {
        background: #ff5555;
        color: #fff;
        font-size: 0.3rem;
        padding: 0.02rem 0.06rem;
        border-radius: 0.06rem;
        margin-right: 0.2rem;
      }
    }
    img {
      float: right;
    }
  }
}
</style>
