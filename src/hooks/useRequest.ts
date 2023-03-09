import instance from '@/api/request'
import { AxiosRequestConfig } from 'axios'
import { useAppSelector } from '@/hooks'

export const useRequest = () => {
  const userInfo = useAppSelector((state) => state)

  const configs: AxiosRequestConfig = {
    headers: {
      Authorization: userInfo.userInfo.token ? userInfo.userInfo.token : null
    }
  }

  const get = (url: string, params = {}, config: AxiosRequestConfig = configs) =>
    instance.get(url, { params: params, ...config })

  const post = (
    url: string,
    data = {},
    config: AxiosRequestConfig<unknown> | undefined = configs
  ) => instance.post(url, data, config)

  return [get, post]
}
