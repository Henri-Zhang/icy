import axios from 'axios'
import _ from 'lodash'

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
