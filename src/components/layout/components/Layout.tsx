import React, { useEffect, useState, useCallback } from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { test } from '@/api/modules/test'
import { handleSideMenus, MenuItem } from '@/utils'
const { Header, Content, Sider } = Layout
const CLayout: React.FC = () => {
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
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={menus}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 700 }}></Content>
        </Layout>
      </Content>
    </Layout>
  )
}

export default CLayout
