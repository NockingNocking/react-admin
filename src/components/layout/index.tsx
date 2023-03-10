import React, { useEffect, useState, useCallback } from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { test } from '@/api/modules/test'
import { handleSideMenus, MenuItem } from '@/utils'
import { Outlet, useNavigate } from 'react-router-dom'
import '@/style/components/mainLayout.less'

const { Header, Content, Sider } = Layout

const MainLayout: React.FC = () => {
  // 初始化菜单
  const [menus, setMenus] = useState<Array<MenuItem>>([])

  const getMenus = useCallback(async () => {
    const { data } = await test()
    const tep = handleSideMenus(data)
    setMenus(tep)
  }, [])
  useEffect(() => {
    getMenus()
  }, [])
  // 菜单点击事件
  const navigate = useNavigate()
  const onMenuClick = (key: string) => {
    navigate(key)
  }
  // 布局
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  const [contentLeft, setContentLeft] = useState(200)
  const [collapsed, setCollapsed] = useState(false)

  const operationMenus = (value: boolean) => {
    setCollapsed(value)
    if (value) {
      setContentLeft(100)
    } else {
      setContentLeft(200)
    }
  }

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          style={{ position: 'fixed', minHeight: '100vh' }}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => operationMenus(value)}
        >
          <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
          <Menu
            onClick={({ key }) => onMenuClick(key)}
            theme="dark"
            defaultSelectedKeys={['/main/dashbord']}
            mode="inline"
            items={menus}
          />
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: contentLeft, transition: 'all 0.5s' }}>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                overflowY: 'scroll'
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default MainLayout
