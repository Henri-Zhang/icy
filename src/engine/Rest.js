import axios from 'axios'
import _ from 'lodash'
import { Toast } from 'vant'

const api = 'https://www.easy-mock.com/mock/5b78bbc8c8ce472d34912f4a'

export const init = () => {
  axios.interceptors.request.use((config = {}) => {
    _.merge(config, {
      url: api + config.url,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    Toast.loading({
      mask: false,
      duration: 0,
      message: '加载中...'
    })

    return config
  })

  axios.interceptors.response.use((data = {}) => {
    Toast.clear()

    return data
  })
}

export default axios
