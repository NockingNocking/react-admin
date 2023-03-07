interface MenuProps {
  onToggle: () => void
  isOnToggle: boolean
}

const Menu = ({ onToggle, isOnToggle }: MenuProps) => {
  return (
    <div className="menu-container">
      <div className="toggle-icon">
        {isOnToggle ? (
          <div
            onClick={() => onToggle()}
            className="menu-toggle-close iconfont icon-xitongguanli"></div>
        ) : (
          <div
            onClick={() => onToggle()}
            className="menu-toggle-open iconfont icon-zidianxiang"></div>
        )}
      </div>
      <div className="menu-list"></div>
    </div>
  )
}

export default Menu
