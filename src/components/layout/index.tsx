import { useState } from 'react'
import Header from './components/header'
import Menu from './components/menu'

const MainLayout = () => {
  const [isToggle, setIsToggle] = useState(false)

  const onMenuToggle = () => setIsToggle((pre) => !pre)

  return (
    <div className="main-layout">
      <aside className="main-aside" style={{ width: isToggle ? '230px' : '70px' }}>
        <Menu onToggle={onMenuToggle} isOnToggle={isToggle} />
      </aside>
      <main className="main">
        <header className="main-header">
          <Header />
        </header>
        <section className="main-section">{/* 内容区域 */}</section>
        {/* <footer className='main-footer'>

        </footer> */}
      </main>
    </div>
  )
}

export default MainLayout
