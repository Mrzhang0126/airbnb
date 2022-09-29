import axios from "axios";
import { BASE_URL, TIMEOUT } from './config'

class HttpRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.request.use((config) => {
      return config
    }, (err) => {
      return Promise.reject(err)
    })

    this.instance.interceptors.response.use((response) => {
      return response.data
    }, (err) => {
      return Promise.reject(err)
    })
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: 'GET' })
  }

  post(config) {
    return this.request({ ...config, method: 'POST' })
  }

  put(config) {
    return this.request({ ...config, method: 'PUT' })
  }

  delete(config) {
    return this.request({ ...config, method: 'DELETE' })
  }
}

export default new HttpRequest(BASE_URL, TIMEOUT)
