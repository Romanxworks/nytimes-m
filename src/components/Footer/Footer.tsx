import { Link } from "react-router-dom"
import classes from "./Footer.module.scss"
import Logo from "../../assets/footer_logo.png"
import type { TNavItem } from "../types"

const navItems: TNavItem[] = [
  {
    title: "Log In",
    link: "/"
  },
  {
    title: "About Us",
    link: "/"
  },
  {
    title: "Publishers",
    link: "/"
  },
  {
    title: "Sitemap",
    link: "/"
  }
]

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <nav className={classes.footerNav}>
        <ul>
          {navItems.map((item, ind) => (
            <li key={`${ind}-${item.title}`}>
              <Link to={item.link} className={classes.menuItem}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={classes.logo}>
        <span>Powered by</span>
        <img src={Logo} alt="News API" width={85} height={25} />
      </div>
      <span className={classes.copyright}>© 2023 Besider. Inspired by Insider</span>
    </footer>
  )
}
