import Routes from '@/router'
import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

function App() {
  return (
    <>
      <Suspense>{useRoutes(Routes)}</Suspense>
    </>
  )
}

export default App
