import { lazy } from 'react'
import lazyLoad from '../layzload'
const baseRoutes = [
  {
    path: '/config',
    element: lazyLoad(lazy(() => import('@/views/configPage')))
  }
]

export default baseRoutes
