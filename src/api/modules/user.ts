import http from '../metheds'
import type { UserLogin } from '@/types'

export const doLogin = (data: UserLogin) => {
  return http.post('/user/login', data)
}
