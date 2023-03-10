import { lazy } from 'react'
import lazyLoad from '../layzload'

const analysisRoutes = [
  {
    path: '/main/analysis',
    element: lazyLoad(lazy(() => import('@/views/analysis')))
  }
]

export default analysisRoutes
