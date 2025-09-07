import clsx from "clsx"
import classes from "./NavigateMenu.module.scss"
import { Link } from "react-router-dom"
import type { TNavItem } from "../../types"

interface NavigateMenuProps {
  isOpen: boolean
  openHandler: () => void
}

const navItems: TNavItem[] = [
  {
    title: "SCIENCE",
    link: "/"
  },
  {
    title: "GENERAL",
    link: "/"
  },
  {
    title: "ENTERTAINMENT",
    link: "/"
  },
  {
    title: "TECHNOLOGY",
    link: "/"
  },
  {
    title: "BUSINESS",
    link: "/"
  },
  {
    title: "HEALTH",
    link: "/"
  },
  {
    title: "SPORTS",
    link: "/"
  }
]

export default function NavigateMenu({ isOpen, openHandler }: NavigateMenuProps) {
  return (
    <nav className={clsx(classes.mainNav, isOpen && classes.mainNav_hide)}>
      <div className={classes.navHeader}>
        <button type="button" className={classes.menuToggle} onClick={openHandler}>
          <span className="hidden">Close menu</span>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L1 1M21 1L1 21" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className={classes.navBody}>
        <ul>
          {navItems.map((item, ind) => (
            <li key={`${ind}-${item.title}`}>
              <Link to={item.link} className={classes.menuItem}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
