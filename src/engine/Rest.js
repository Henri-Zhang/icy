import axios from 'axios'
import _ from 'lodash'

// const api = 'https://www.easy-mock.com/mock/5b78bbc8c8ce472d34912f4a'

export const init = () => {
  axios.interceptors.request.use((config = {}) => {
    _.merge(config, {
      url: `/api${config.url}`,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return config
  })
}

export default axios
