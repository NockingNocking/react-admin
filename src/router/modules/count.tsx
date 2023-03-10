import { lazy } from 'react'
import lazyLoad from '../layzload'

const countRoutes = [
  {
    path: '/main/count',
    element: lazyLoad(lazy(() => import('@/views/count')))
  }
]

export default countRoutes
