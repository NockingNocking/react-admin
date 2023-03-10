import { lazy } from 'react'
import lazyLoad from '../layzload'

const dashbordRoutes = [
  {
    path: '/main/dashbord',
    element: lazyLoad(lazy(() => import('@/views/dashbord')))
  }
]

export default dashbordRoutes
