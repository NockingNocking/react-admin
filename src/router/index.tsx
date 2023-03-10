import { autoHandleRoutes } from '@/utils'
import { NonIndexRouteObject } from 'react-router-dom'

import HomePage from '@/views/homePage'
import LoginPage from '@/views/loginPage'
import FcfPage from '@/views/error/404'

const routerArray = autoHandleRoutes(import.meta.glob('./modules/*.tsx', { eager: true }))

const routes: Array<NonIndexRouteObject> = [
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/main',
    element: <HomePage />,
    children: [...routerArray]
  },
  {
    path: '*',
    element: <FcfPage />
  }
]

export default routes
