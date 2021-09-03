import axios from 'axios'

const host = localStorage.getItem('gateway')

const appAxios = axios.create({
  baseURL: 'http://' + host,
  timeout: 5000
})

appAxios.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

appAxios.interceptors.response.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default appAxios
