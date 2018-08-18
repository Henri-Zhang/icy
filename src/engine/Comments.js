import rest from './Rest'

export default class Comments {
  static fetchAll = async (urlParams = {}) => {
    const response = await rest.get('/comment-updates', { params: urlParams })
    return response.data
  }
}
