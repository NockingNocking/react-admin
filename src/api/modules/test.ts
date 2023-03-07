import http from '../metheds'

export const test = () => {
  return http.get('/test/menu')
}
