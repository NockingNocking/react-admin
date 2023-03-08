import axios from 'axios'
import { CancelRequest, checkStatus } from '@/utils/request'
import qs from 'qs'
import { message } from 'antd'

const instance = axios.create({
  baseURL: '',
  timeout: 50000,
  headers: {
    post: {
      'Content-Type': 'application/json;charset=UTF-8'
      // application/x-www-form-urlencoded;charset=UTF-8
      // multipart/form-data;charset=UTF-8
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
    message.error(err)
  }
)

instance.interceptors.response.use(
  (response) => {
    console.log(response)

    const {
      data: { code }
    } = response

    if (code == 200) {
      cancelRequest.removeRequestKey(response.config)
      return response.data
    } else {
      const errMsg = checkStatus(code)
      message.error(errMsg)
      return Promise.reject(errMsg)
    }
  },
  (err) => {
    // 移除失败的请求记录
    cancelRequest.removeRequestKey(err.config || {})
    if (axios.isCancel(err)) {
      message.warning('重复请求信息：' + err.message)
    }
    return Promise.reject(err)
  }
)

export default instance
