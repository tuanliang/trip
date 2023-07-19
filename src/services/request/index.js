import useMainStore from '@/store/modules/main.js'
import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config.js'

const mainStore = useMainStore()
class HYRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    this.instance.interceptors.request.use(config => {
      mainStore.isloading = true
      return config
    }, err => {
      return err
    })
    this.instance.interceptors.response.use(res => {
      mainStore.isloading = false
      return res
    }, err => {
      mainStore.isloading = false
      return err
    })
  }

  request (config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get (config) {
    return this.request({ ...config, method: 'get' })
  }

  post (config) {
    return this.request({ ...config, method: 'post' })
  }
}

export default new HYRequest(BASE_URL, TIMEOUT)