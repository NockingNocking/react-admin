import axios from 'axios'
import CancelRequest from '@/utils/request'
import qs from 'qs'

const instance = axios.create({
  baseURL: '',
  timeout: 50000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    post: {
      'Content-Type': 'application/json'
    }
  }
})

// 实例化取消请求对象
const cancelRequest = new CancelRequest(new Map())

instance.interceptors.request.use(
  (config) => {
    // 添加token
    config.headers.Authorization = 'xxxxx'
    // 序列化post请求数据
    config.data = qs.stringify(config.data)

    // 超频请求
    cancelRequest.cancelReq(config)
    cancelRequest.addCancelReqKey(config, axios.CancelToken)

    return config
  },
  (err) => {
    console.log(err)
  }
)

instance.interceptors.response.use(
  (response) => {
    cancelRequest.removeRequestKey(response.config)
    return response.data
  },
  (err) => {
    // 移除失败的请求记录
    cancelRequest.removeRequestKey(err.config || {})
    if (axios.isCancel(err)) {
      console.log('重复请求信息：' + err.message)
    }
    return Promise.reject(err)
  }
)

export default instance
