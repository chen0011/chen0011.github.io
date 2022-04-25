<template>
  <div class="travel">
    <div class="title">
      <h2>出行防疫政策查询</h2>
    </div>
    <div class="fromwhere">
      <van-field
        v-model="fromcity"
        is-link
        readonly
        label="地区"
        placeholder="请选择出发地区"
        @click="show1 = true"
      />
      <van-popup v-model="show1" round position="bottom">
        <van-cascader
          v-model="cascaderValue"
          title="请选择出发地区"
          :options="options"
          @close="show1 = false"
          @finish="fromFinish"
        />
      </van-popup>
    </div>
    <div class="towhere">
      <van-field
        v-model="tocity"
        is-link
        readonly
        label="地区"
        placeholder="请选择目的地"
        @click="show2 = true"
      />
      <van-popup v-model="show2" round position="bottom">
        <van-cascader
          v-model="cascaderValue2"
          title="请选择目的地"
          :options="options"
          @close="show2 = false"
          @finish="toFinish"
        />
      </van-popup>
    </div>
    <div>
      <van-button type="primary" size="large" @click="search"
        >查询防疫政策</van-button
      >
    </div>
    <div v-if="flag">
      <div class="policy">
        <div>
          <h3>出行城市：</h3>
          <div class='content'>
           {{ this.from_info }}
          </div>
        </div>
        <div>
          <h3>目的城市：</h3>
          <div class='content'>
            {{ this.to_info }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'

export default {
  name: 'travelPolicy',
  data () {
    return {
      show1: false,
      show2: false,
      fieldValue: '',
      cascaderValue: '',
      cascaderValue2: '',
      fromcity: '',
      tocity: '',
      fromid: '',
      toid: '',
      from_info: '',
      to_info: '',
      flag: false,
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: '浙江省',
          value: '330000',
          children: [{ text: '杭州市', value: '330100' }]
        },
        {
          text: '江苏省',
          value: '320000',
          children: [{ text: '南京市', value: '320100' }]
        }
      ]
    }
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    fromFinish ({ value, selectedOptions, tabIndex }) {
      this.fromid = value
      this.show1 = false
      this.fromcity = selectedOptions.map((option) => option.text).join('/')
    },
    toFinish ({ value, selectedOptions, tabIndex }) {
      this.toid = value
      this.show2 = false
      this.tocity = selectedOptions.map((option) => option.text).join('/')
    },
    search () {
      api.getPolicy({
        from: this.fromid,
        to: this.toid
      }).then((res) => {
        this.from_info = res.data.result.from_info.low_in_desc.replace('“”', '')
        this.to_info = res.data.result.to_info.low_in_desc.replace('“”', '')
      })
      this.flag = true
    }
  },
  created () {
    api.getCity().then(res => {
      // console.log(res.data.result)
      const result = res.data.result
      const temparr = []
      result.forEach(element => {
        const obj = {}
        obj.text = element.province
        obj.value = element.province_id
        obj.children = []
        element.citys.forEach(ele => {
          const child = {}
          child.text = ele.city
          child.value = ele.city_id
          obj.children.push(child)
        })
        temparr.push(obj)
      })
      console.log('----' + temparr)
      this.options = temparr
    })
  }
}
</script>

<style lang="less" scoped>
.travel {
  .title {
    background: url('@/assets/images/travelPolicy.png');
    background-repeat: no-repeat;
    background-size: contain;
    height: 2rem;
    width: 100%;
    margin: 0px;
    h2 {
      color: #fff;
      margin: 0;
      padding: 0.5rem;
    }
  }
  h3 {
    color: rgb(190, 31, 31);
    margin: 0.2rem;
  }

  h3::before {
    content: "";
    border-left: 0.1rem solid rgb(9, 60, 202);
    font-size: 0.26rem;
    margin-left: 0.1rem;
    margin-right: 0.2rem;
  }

  .content {
    margin: 0.1rem;
    border: 0.2rem rgb(148, 146, 146);
    padding: 0.2rem;
    color: #666;
    margin: 0;
  }
}
</style>
