import axios from 'axios'
import Cookies from 'js-cookie'

const customApi = axios.create({
  baseURL: 'http://localhost:9091/api',
  withCredentials: true,
  timeout: 3000,
})

customApi.interceptors.request.use((request) => {})
