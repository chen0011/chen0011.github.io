import axios from 'axios'
import base from './base'

const api = {
  getCovInfo () {
    return axios.get(base.host + base.covInfo)
  },
  getSwiper () {
    return axios.get(base.swiper)
  },
  getCity () {
    return axios.get(base.travelCity)
  },
  getPolicy (params) {
    return axios.get(base.travelPolicy, {
      params
    })
  }
}

export default api
