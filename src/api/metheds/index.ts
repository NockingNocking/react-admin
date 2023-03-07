import instance from '@/api/request'
const http = {
  get: (url: string, params = {}) => instance.get(url, { params: params }),
  post: (url: string, data = {}) => instance.post(url, data)
}
export default http
