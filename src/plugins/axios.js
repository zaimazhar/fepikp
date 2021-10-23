import axios from "axios";
import { Promise } from "es6-promise";



const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL ?? 'http://localhost:3000',
  timeout: 5000
})

axiosInstance.interceptors.request.use(
  config => {
    if(localStorage.getItem('token')) {
      config.headers.authorization = 'Bearer ' + localStorage.getItem('token')
    }

    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

export default axiosInstance