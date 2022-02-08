import apiClient from '@/services/AxiosClient.js'

export default {
  getUser(id) {
    return apiClient.get('/user/' + id)
  },
  getCoinGenerate() {
    return apiClient.get('/coin/generate')
  },
  sellCoin(coin) {
    return apiClient.put('/user/{id}/sell', coin)
  },
  buyCoin(id,amount) {
    return apiClient.post('/user/' + id + '/buy', amount)
  },
}
