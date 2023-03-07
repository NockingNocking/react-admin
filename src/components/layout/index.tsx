import { useEffect, useState } from 'react'
import Header from './components/header'
import SideMenu from './components/menu'
import { test } from '@/api/modules/test'

const MainLayout = () => {
  const [menus, setMenus] = useState([])

  const testClick = async () => {
    const { data } = await test()
    setMenus(data)
  }

  useEffect(() => {
    testClick()
  }, [])

  return (
    <div className="main-layout">
      <aside className="main-aside">
        <SideMenu menulist={menus} />
      </aside>
      <main className="main">
        <header className="main-header">
          <Header />
        </header>
        <section className="main-section">
          {/* 内容区域 */}
          <button onClick={() => testClick()}>Test</button>
        </section>
        {/* <footer className='main-footer'>

        </footer> */}
      </main>
    </div>
  )
}

export default MainLayout
