/* eslint-disable @typescript-eslint/no-explicit-any */
import qs from 'qs'
import type { InternalAxiosRequestConfig, CancelTokenStatic } from 'axios'

export default class CancelRequest {
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
