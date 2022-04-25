<template>
  <div class="home">
    <img src="@/assets/images/1.jpg" width='100%' class='img1' alt="">
    <covInfo :newsList='this.news' :number='dataSta'></covInfo>
    <dataSta :number='dataSta'></dataSta>
    <covLink></covLink>
    <areaRisk></areaRisk>
  </div>
</template>

<script>
import covInfo from './covInfo/covInfo.vue'
import dataSta from './covInfo/dataSta.vue'
import dayjs from 'dayjs'
import api from '@/api/index'
import covLink from '@/views/home/covInfo/covLink.vue'
import areaRisk from './covInfo/highRiskArea.vue'
export default {
  name: 'HomeView',
  components: {
    covInfo,
    dataSta,
    covLink,
    areaRisk
  },
  data () {
    return {
      news: [],
      dataSta: {}
    }
  },
  methods: {
    add (n) {
      if (n === undefined) {
        return '+0'
      } else if (n >= 0) {
        return '+' + n
      } else {
        return n
      }
    }
  },
  created () {
    api.getCovInfo().then(res => {
      // console.log(res)
      const covNews = res.data.newslist
      // console.log(covNews[0].news)
      this.news = covNews[0].news
      const covData = covNews[0].desc
      this.dataSta = {
        currentConfirmedCount: covData.currentConfirmedCount.toLocaleString(),
        confirmedCount: covData.confirmedCount.toLocaleString(),
        suspectedCount: covData.suspectedCount.toLocaleString(),
        curedCount: covData.curedCount.toLocaleString(),
        deadCount: covData.deadCount.toLocaleString(),
        seriousCount: covData.seriousCount.toLocaleString(),
        currentConfirmedIncr: this.add(covData.currentConfirmedIncr),
        suspectedIncr: this.add(covData.suspectedIncr),
        curedIncr: this.add(covData.curedIncr),
        deadIncr: this.add(covData.deadIncr),
        seriousIncr: this.add(covData.seriousIncr),
        yesterdayConfirmedCountIncr: this.add(covData.yesterdayConfirmedCountIncr),
        yesterdaySuspectedCountIncr: this.add(covData.yesterdaySuspectedCountIncr),
        modifyTime: dayjs(covData.modifyTime).format('YYYY-MM-DD HH:mm:ss')
      }
      // currentConfirmedCount 现存确诊人数
      // confirmedCount 累计确诊人数
      // suspectedCount 累计境外输入人数
      // curedCount 累计治愈人数
      // deadCount 累计死亡人数
      // seriousCount 现存无症状人数
      // suspectedIncr 新增境外输入人数
      // currentConfirmedIncr 相比昨天现存确诊人数
      // confirmedIncr 相比昨天累计确诊人数
      // curedIncr 相比昨天新增治愈人数
      // deadIncr 相比昨天新增死亡人数
      // seriousIncr 相比昨天现存无症状人数
      // yesterdayConfirmedCountIncr 相比昨天新增累计确诊人数
      // yesterdaySuspectedCountIncr 相比昨天境外输入确诊人数
    }
    )
  }
}
</script>

<style lang="less" scoped>
</style>
