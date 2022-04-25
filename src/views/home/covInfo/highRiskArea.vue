<template>
  <div class="bg">
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item :title="'高风险地区 ' + this.high.length + ' 个' " name="1">
        <li v-for='(item, index) in high' :key='index + 1' class="list">
            {{ item }}
        </li>
      </van-collapse-item>
      <van-collapse-item :title="'中风险地区 ' + this.mid.length + ' 个'" name="2">
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
      activeName: ''
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
.bg{
  margin-top: 0.24rem;
}
.list{
  margin: 0.2rem;
}
</style>
