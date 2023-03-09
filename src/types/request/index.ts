/* eslint-disable @typescript-eslint/no-explicit-any */
import { CancelTokenStatic, InternalAxiosRequestConfig, AxiosResponse } from 'axios'

export interface IRequest {
  new (map: Map<any, any>): () => any
  cancelReqMap: Map<any, any>
  generateCancelReqKey: (config: InternalAxiosRequestConfig) => string
  addCancelReqKey: (config: InternalAxiosRequestConfig, cancelToken: CancelTokenStatic) => void
  cancelReq: (config: InternalAxiosRequestConfig) => void
  removeRequestKey: (config: InternalAxiosRequestConfig) => void
}

export interface IResData {
  code: number
  data: Array<any>
  msg: string
}

type Code = {
  code?: number
}

export type TAxiosResponse = AxiosResponse & Code
