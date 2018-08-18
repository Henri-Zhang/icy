import rest from './Rest'

export default class WeekUpdate {
  static fetchUpdates = async (urlParams = {}) => {
    const response = await rest.get('/week-updates', { params: urlParams })
    return response.data
  }
}
