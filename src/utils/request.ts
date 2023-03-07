/* eslint-disable @typescript-eslint/no-explicit-any */
import qs from 'qs'
import type { InternalAxiosRequestConfig, CancelTokenStatic } from 'axios'

export class CancelRequest {
  public cancelReqMap

  constructor(map: Map<any, any>) {
    this.cancelReqMap = this.isMap(map) ? map : new Map()
  }

  isMap(data: Map<any, any>) {
    if (Object.prototype.toString.call(data) === '[object Map]') return true
  }

  generateCancelReqKey(config: InternalAxiosRequestConfig) {
    const { url, method, params, data } = config
    return [url, method, qs.stringify(params), qs.stringify(data)].join('&')
  }

  addCancelReqKey(config: InternalAxiosRequestConfig, cancelToken: CancelTokenStatic) {
    const cancelReqKey = this.generateCancelReqKey(config)
    config.cancelToken =
      config.cancelToken ||
      new cancelToken((cancel) => {
        if (!this.cancelReqMap.has(cancelReqKey)) {
          this.cancelReqMap.set(cancelReqKey, cancel)
        }
      })
  }

  cancelReq(config: InternalAxiosRequestConfig) {
    const cancelReqKey = this.generateCancelReqKey(config)
    if (this.cancelReqMap.has(cancelReqKey)) {
      const cancel = this.cancelReqMap.get(cancelReqKey)
      cancel(cancelReqKey)
      this.removeRequestKey(config)
    }
  }

  removeRequestKey(config: InternalAxiosRequestConfig) {
    const cancelReqKey = this.generateCancelReqKey(config)
    this.cancelReqMap.delete(cancelReqKey)
  }
}

export const checkStatus = (state: number): string => {
  let msg = ''
  switch (state) {
    case 400:
      msg = '请求错误！'
      break
    case 401:
      msg = '未授权，请重新登录！'
      break
    case 403:
      msg = '拒绝访问！'
      break
    case 404:
      msg = '请求出错！'
      break
    case 500:
      msg = '服务器错误！'
      break
    case 501:
      msg = '服务未实现！'
      break
    case 502:
      msg = '网络错误！'
      break
    case 503:
      msg = '服务不可用！'
      break
    default:
      msg = `连接出错(${state})!`
  }

  return `${msg}+,请联系管理员！`
}
