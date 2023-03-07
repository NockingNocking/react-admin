export interface IMenuList {
  icon: string
  path: string
  auth: boolean
  title?: string
  label: string
  children?: Array<IMenuList>
}
