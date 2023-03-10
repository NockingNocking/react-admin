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

  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[{ title: 'home' }, { title: 'list' }, { title: 'app' }]}
        ></Breadcrumb>
        <Layout style={{}}>
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['/main/dashbord']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={menus}
              onClick={({ key }) => onMenuClick(key)}
            />
          </Sider>
          <Content
            style={{
              background: colorBgContainer,
              padding: '24px',
              minHeight: 803,
              marginLeft: '10px'
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}

export default MainLayout
