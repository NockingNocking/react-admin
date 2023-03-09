import http from '../metheds'

export const test = () => {
  return http.get('/test/menu')
}

export const testMock = () => {
  return http.get('/test')
}
