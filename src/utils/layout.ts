import { IMenuList } from '@/types'
import type { MenuProps } from 'antd/es/menu'
export type MenuItem = Required<MenuProps>['items'][number]

export const handleSideMenus = (list: Array<IMenuList>): Array<MenuItem> => {
  const tempMenu = list.map((menu) => {
    return {
      label: menu.label,
      key: menu.path,
      children: menu.children,
      // icon: menu.icon,
      auth: menu.auth
    } as MenuItem
  })

  return tempMenu
}
