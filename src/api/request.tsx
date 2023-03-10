import axios from 'axios'
import { CancelRequest, checkStatus, GlobalLoading } from '@/utils/request'
import qs from 'qs'
import { message, Spin } from 'antd'
import { TAxiosResponse } from '@/types'
import React from 'react'
import { delay } from '@/utils'

const instance = axios.create({
  baseURL: '/api',
  timeout: 50000,
  headers: {
    post: {
      // 'Content-Type': 'application/json;charset=UTF-8'
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      // 'Content-Type': 'multipart/form-data;charset=UTF-8'
    }
  }
})

// 实例化取消请求对象
const cancelRequest = new CancelRequest(new Map())
const globalLoading = new GlobalLoading()

instance.interceptors.request.use(
  (config) => {
    // 全局loading
    globalLoading.addRequest()
    if (globalLoading.isLoading) {
      React.createElement(Spin)
    }

    // 序列化post请求数据
    config.data = qs.stringify(config.data)
    // 取消重复请求
    // TODO:在这里要处理取消请求后删减loding的一条请求
    cancelRequest.cancelReq(config)
    cancelRequest.addCancelReqKey(config, axios.CancelToken)

    return config
  },
  (err) => {
    message.error(err)
    globalLoading.delateReuest()
  }
)

instance.interceptors.response.use(
  (response: TAxiosResponse) => {
    // 这里检查请求的全局错误
    const { status } = response

    if (status == 200) {
      cancelRequest.removeRequestKey(response.config)
      globalLoading.delateReuest()
      return response.data
    } else {
      const errMsg = checkStatus(status)
      message.error(errMsg)
      globalLoading.delateReuest()
      return Promise.reject(errMsg)
    }
  },
  (err) => {
    // 移除失败的请求记录
    cancelRequest.removeRequestKey(err.config || {})
    if (axios.isCancel(err)) {
      message.warning('重复请求信息：' + err.message)
    }
    globalLoading.delateReuest()
    return Promise.reject(err)
  }
)

export default instance
