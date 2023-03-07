import { IMenuList } from '@/types'

interface POpenMenu {
  list: Array<IMenuList>
}

const OpenMenu = ({ list }: POpenMenu) => {
  return (
    <>
      {list.map((item) => {
        return (
          <div className="menu-item" key={item.path}>
            <span className={item.icon}></span>
            <span className="menue-title">{item.title}</span>
            <span className="menue-expand"></span>
          </div>
        )
      })}
    </>
  )
}

export default OpenMenu
