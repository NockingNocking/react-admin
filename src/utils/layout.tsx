import { IMenuList } from '@/types'
import type { MenuProps } from 'antd/es/menu'
export type MenuItem = Required<MenuProps>['items'][number]
export type TMenuItem = MenuItem & { auth: boolean }

import React from 'react'
import {
  UserOutlined,
  PieChartOutlined,
  AccountBookOutlined,
  NotificationOutlined,
  AreaChartOutlined
} from '@ant-design/icons'

interface IIcons {
  [propName: string]: any
}

export const handleSideMenus = (list: Array<IMenuList>): Array<MenuItem> => {
  const icons: IIcons = {
    UserOutlined: UserOutlined,
    PieChartOutlined: PieChartOutlined,
    AccountBookOutlined: AccountBookOutlined,
    NotificationOutlined: NotificationOutlined,
    AreaChartOutlined: AreaChartOutlined
  }

  const tempMenu = list.map((menu) => {
    return {
      label: menu.label,
      key: menu.path,
      children: menu.children,
      icon: icons[menu.icon] ? React.createElement(icons[menu.icon]) : null,
      auth: menu.auth
    } as MenuItem
  })

  return tempMenu as unknown as Array<MenuItem>
}
