import { Link } from "react-router-dom"
import classes from "./Header.module.scss"
import NavigateMenu from "./NavigateMenu/NavigateMenu"
import { useState } from "react"

export default function Header() {
  const [isOpen, setOpen] = useState<boolean>(false)

  const openMenuHandler = () => {
    setOpen(!isOpen)
  }
  return (
    <header className={classes.header}>
      <button type="button" className={classes.menuToggle} onClick={openMenuHandler}>
        <span className="hidden">Menu</span>
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="2.25" fill="black" />
          <rect y="6.75" width="20" height="2.25" fill="black" />
          <rect y="13.5" width="20" height="2.25" fill="black" />
        </svg>
      </button>
      <div className={classes.logo}>
        <Link to={"/"}>BESIDER</Link>
      </div>
      <NavigateMenu isOpen={isOpen} openHandler={openMenuHandler} />
    </header>
  )
}
