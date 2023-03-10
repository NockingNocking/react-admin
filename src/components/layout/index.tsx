import React, { useEffect, useState, useCallback } from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { test } from '@/api/modules/test'
import { handleSideMenus, MenuItem } from '@/utils'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
const { Header, Content, Sider } = Layout
import { useAppSelector } from '@/hooks'
import { useUpdateEffect } from 'ahooks'
import '@/style/components/mainLayout.less'

const MainLayout: React.FC = () => {
  // 初始化菜单
  const [menus, setMenus] = useState<Array<MenuItem>>([])
  const testClick = useCallback(async () => {
    const { data } = await test()
    const tep = handleSideMenus(data)
    console.log(tep)

    setMenus(tep)
  }, [])
  useEffect(() => {
    testClick()
  }, [])
  // 菜单点击事件
  const navigate = useNavigate()
  const onMenuClick = (key: string) => {
    navigate(key)
  }
  // 重置活跃路由
  const [activeKey, setActiveKey] = useState('/main/dashbord')
  const locatin = useLocation()

  useUpdateEffect(() => {
    setActiveKey(locatin.pathname)
  }, [locatin.pathname])

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
              defaultSelectedKeys={[activeKey]}
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
