import { IMenuList } from '@/types'
import { handleSideMenus } from '@/utils'
import { MenuItem } from '@/utils'
import { Menu } from 'antd'
import { useEffect, useState } from 'react'

import { CaretRightOutlined } from '@ant-design/icons'

interface SideMenuProps {
  menulist: Array<IMenuList>
}

const SideMenu = ({ menulist }: SideMenuProps) => {
  const [menus, setMenus] = useState<Array<MenuItem>>([])
  const [menuWidth, setMenuWidth] = useState(150)

  useEffect(() => {
    const tem = handleSideMenus(menulist)
    setMenus(tem)
  }, [menulist])

  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
    if (collapsed) {
      setMenuWidth(150)
    } else {
      setMenuWidth(70)
    }
  }

  return (
    <div className="menu-container">
      <div className="toggle-icon">
        {collapsed ? (
          <div
            onClick={() => toggleCollapsed()}
            className="menu-toggle-open iconfont icon-zidianxiang"></div>
        ) : (
          <div
            onClick={() => toggleCollapsed()}
            className="menu-toggle-close iconfont icon-xitongguanli"></div>
        )}
      </div>
      <div className="menu-list">
        <Menu
          items={menus}
          inlineCollapsed={collapsed}
          mode="inline"
          theme="light"
          style={{ width: menuWidth }}
        />
      </div>
    </div>
  )
}

export default SideMenu
