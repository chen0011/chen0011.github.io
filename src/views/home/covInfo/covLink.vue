<template>
  <div>
    <ul>
      <li>
        <div @click="alertmes">
          <img src="@/assets/images/riskarea.png" alt="" />
          <div>风险地区</div>
        </div>
      </li>
      <li>
        <router-link to="/covMaterial">
          <img src="@/assets/images/material.png" alt="" />
          <div>防疫物资</div>
        </router-link>
      </li>
      <li>
        <router-link to="/travel">
          <img src="@/assets/images/Travel.png" alt="" />
          <div>出行政策</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  name: 'covLink',
  methods: {
    alertmes () {
      Dialog.alert({
        title: '此功能已停用',
        message: ''
      })
    }
  }
}
</script>

<style lang="less" scoped>
ul {
  padding-top: 0.2rem;
  display: flex;
  // text-align: center;
  li {
    width: 33.3%;
    text-align: center;
    // border: 0.1rem solid white;
    div {
      color: black;
    }
    img {
      width: 0.8rem;
      margin: 0.2rem;
    }
  }
}
</style>
