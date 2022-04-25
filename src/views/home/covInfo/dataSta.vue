<template>
  <div class="content">
    <div class="title">截至{{ number.modifyTime }}全国数据统计</div>
    <ul class="wrap">
      <li>
        <strong>现存确诊</strong>
        <div class="bold">{{ number.currentConfirmedCount }}</div>
        <div class="number">
          <span>较昨日</span>
          {{ number.currentConfirmedIncr }}
        </div>
      </li>
      <li>
        <strong>境外输入</strong>
        <div class="bold">{{ number.suspectedCount }}</div>
        <div class="number">
          <span>较昨日</span>
          {{ number.yesterdaySuspectedCountIncr }}
        </div>
      </li>
      <li>
        <strong>现存无症状</strong>
        <div class="bold">{{ number.seriousCount }}</div>
        <div class="number">
          <span>较昨日</span>{{ number.seriousIncr }}
        </div>
      </li>
      <li>
        <strong>累计确诊</strong>
        <div class="bold">{{ number.confirmedCount}}</div>
        <div class="number">
          <span>较昨日</span>{{ number.yesterdayConfirmedCountIncr }}
        </div>
      </li>
      <li>
        <strong>累计死亡</strong>
        <div class="bold">{{ number.deadCount }}</div>
        <div class="number">
          <span>较昨日</span>{{ number.deadIncr }}
        </div>
      </li>
      <li>
        <strong>累计治愈</strong>
        <div class="bold">{{ number.curedCount }}</div>
        <div class="number">
          <span>较昨日</span> {{ number.curedIncr }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'dataSta',
  props: {
    number: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>
<style lang="less" scoped>
.content {
  .title {
    color: rgb(152, 150, 150);
    display: block;
    font-size: 0.2rem;
    padding: 0.1rem;
    margin-top: 0.1rem;
    margin-left: 0.1rem;
  }
  .wrap {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    border-radius: 0.1rem;
    box-shadow: 0 0 3px 2px rgba(177, 174, 174, 0.2);
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    li {
      width: 33.3333333%;
      margin-bottom: 0.1rem;
      font-size: 0.26rem;
      div {
        margin: 0.05rem;
      }
    }
    li:nth-child(1) {
      .bold {
        color: red;
      }
      .number {
        color: red;
      }
    }
    li:nth-child(2) {
      .bold {
        color: rgb(3, 194, 3);
      }
      .number {
        color: rgb(3, 194, 3);
      }
    }
    li:nth-child(3) {
      .bold {
        color: blue;
      }
      .number {
        color: blue;
      }
    }
    li:nth-child(4) {
      .bold {
        color: purple;
      }
      .number {
        color: purple;
      }
    }
    li:nth-child(5) {
      .bold {
        color: aqua;
      }
      .number {
        color: aqua;
      }
    }
    li:nth-child(6) {
      .bold {
        color: rgb(170, 255, 0);
      }
      .number {
        color: rgb(170, 255, 0);
      }
    }
    span {
      color: black;
    }
  }
}
</style>
