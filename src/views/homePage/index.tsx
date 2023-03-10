import MainLayout from '@/components/layout'
import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/main') {
      navigate('/main/dashbord')
    }
  }, [location])
  return (
    <>
      <MainLayout />
    </>
  )
}

export default HomePage
