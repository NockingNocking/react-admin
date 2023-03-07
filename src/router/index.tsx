import { autoHandleRoutes } from '@/utils'
import { NonIndexRouteObject } from 'react-router-dom'

import HomePage from '@/views/homePage'
import FcfPage from '@/views/error/404'

const routerArray = autoHandleRoutes(import.meta.glob('./modules/*.tsx', { eager: true }))

const routes: Array<NonIndexRouteObject> = [
  {
    path: '/',
    element: <HomePage />
  },
  ...routerArray,
  {
    path: '*',
    element: <FcfPage />
  }
]

export default routes
