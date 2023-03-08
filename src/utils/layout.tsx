import { IMenuList } from '@/types'
import type { MenuProps } from 'antd/es/menu'
export type MenuItem = Required<MenuProps>['items'][number]
import React from 'react'
import {
  UserOutlined,
  PieChartOutlined,
  AccountBookOutlined,
  NotificationOutlined
} from '@ant-design/icons'

interface IIcons {
  [propName: string]: any
}

export const handleSideMenus = (list: Array<IMenuList>): Array<MenuItem> => {
  const icons: IIcons = {
    UserOutlined: UserOutlined,
    PieChartOutlined: PieChartOutlined,
    AccountBookOutlined: AccountBookOutlined,
    NotificationOutlined: NotificationOutlined
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

  return tempMenu
}
