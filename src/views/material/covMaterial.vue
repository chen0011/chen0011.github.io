<template>
  <div>
    <img src="../../assets/images/wuzi.png" alt="">
    <van-tabs type="card" animated>
      <van-tab v-for="item in arr" :title="item.title" :key='item.title'>
        <img :src="item.img" alt="">
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import alcohol from '../../assets/images/jiujing.png'
import mask from '@/assets/images/kouzhao.png'

export default {
  name: 'covMaterial',
  data () {
    return {
      arr: [
        {
          img: alcohol,
          title: '酒精'
        },
        {
          img: mask,
          title: '口罩'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
img{
  width: 100%;
}
</style>
