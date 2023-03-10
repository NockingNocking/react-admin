import { lazy } from 'react'
import lazyLoad from '../layzload'

const baseRoutes = [
  {
    path: '/main/base',
    element: lazyLoad(lazy(() => import('@/views/basePage')))
  }
]

export default baseRoutes
