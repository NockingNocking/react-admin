import http from '../metheds'

export const getCardDatas = () => {
  return http.get('/dashbord/card')
}
