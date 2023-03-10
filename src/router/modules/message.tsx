import { lazy } from 'react'
import lazyLoad from '../layzload'

const messageRoutes = [
  {
    path: '/main/message',
    element: lazyLoad(lazy(() => import('@/views/message')))
  }
]

export default messageRoutes
