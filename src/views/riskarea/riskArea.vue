<template>
  <div class="bg">
    <!-- <img src="@/assets/images/area.png" alt="" class="bgimage">
    <div class="container">
      <div class='high' v-if='this.high.length > 0'>
        <div class="title">
          <img src="@/assets/images/high.png" alt="">
          高风险地区{{ this.high.length }}个
        </div>
        <ul >
          <li v-for='(item, index) in high' :key='index + 1'>
            {{ item }}
          </li>
        </ul>
      </div>
      <div class='mid' v-if='this.mid.length > 0'>
        <div class="title">
          <img src="@/assets/images/mid.png" alt="">
          中风险地区{{ this.mid.length }}
        </div>
        <ul >
          <li v-for='(item, index) in mid' :key='index'>
            {{ item }}
          </li>
        </ul>
      </div>
    </div> -->
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item :title="'高风险地区'+this.high.length+'个'" name="1">
        <div v-for='(item, index) in high' :key='index + 1' class="list">
            {{ item }}
        </div>
      </van-collapse-item>
      <van-collapse-item :title="'高风险地区'+this.mid.length+'个'" name="2">
        <li v-for='(item, index) in mid' :key='index'>
            {{ item }}
        </li>
      </van-collapse-item>
    </van-collapse>
  </div>

</template>

<script>
import api from '@/api/index'

export default {
  data () {
    return {
      high: {
        type: Array,
        default: function () {
          return []
        }
      },
      mid: [],
      activeName: '1'
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  },
  created () {
    api.getCovInfo().then(res => {
      const data = res.data.newslist[0].riskarea
      this.high = data.high
      this.mid = data.mid
    })
  }
}
</script>

<style lang='less' scoped>
.bgimage {
  width: 100%;
  z-index: 3;
}
.list{
  margin: 0.2rem;
}
.container {
    background: #fff;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    padding: 0.2rem;
    border-radius: 0.2rem;
    margin-top: -3.5rem;
    z-index: 2;
    .title {
      font-size: 0.3rem;
      margin-bottom: 0.2rem;
      img {
        width: 0.4rem;
        vertical-align:bottom;
      }
    }
    .mid{
      margin-top: 0.3rem;
    }
    li{
      color: #333;
      background: #f7f7f7;
      padding: 0.1rem;
      border-radius: 0.1rem;
      letter-spacing: 0.01rem;
    }
  }
</style>
