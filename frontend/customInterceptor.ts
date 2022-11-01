import axios from 'axios'

const customInterceptor = axios.create({
  baseURL: 'http://localhost:9091/api',
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  timeout: 3000,
})

customInterceptor.interceptors.request.use(
  (config) => {
    console.log('before send request!')
    return config
  },
  (error) => {
    console.log('error occured!', error)
    return Promise.reject(error)
  }
)

export default customInterceptor
