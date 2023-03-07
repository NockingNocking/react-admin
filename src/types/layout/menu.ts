export interface MenuList {
  icon: string
  path: string
  auth: boolean
  title: string
  children?: Array<MenuList>
}
