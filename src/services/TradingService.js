import apiClient from '@/services/AxiosClient.js'

export default {
  getUser(id) {
    return apiClient.get('/user/' + id)
  },
  getCoinGenerate() {
    return apiClient.get('/coin/generate')
  },
  sellCoin(id, coin) {
    return apiClient.post('/user/' + id + '/sell ', coin)
  },
  buyCoin(id, amount) {
    return apiClient.post('/user/' + id + '/buy', amount)
  },
  checkCoins() {
    return apiClient.get('/coin/amount')
  }
}