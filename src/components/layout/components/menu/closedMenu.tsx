import { IMenuList } from '@/types'

interface ClosedMenu {
  list: Array<IMenuList>
}

const ClosedMenu = ({ list }: ClosedMenu) => {
  return (
    <>
      {list.map((item) => {
        return (
          <div className="menu-item" key={item.path}>
            <span className={item.icon}></span>
          </div>
        )
      })}
    </>
  )
}

export default ClosedMenu
