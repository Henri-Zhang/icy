import rest from './Rest'

export default class Swipe {
  static fetchImages = async (urlParams = {}) => {
    const response = await rest.get('/swipe-images', { params: urlParams })
    return response.data
  }
}
