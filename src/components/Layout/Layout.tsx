import type { ReactElement } from "react"
import classes from "./Layout.module.scss"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

interface LayoutProps {
  children: ReactElement
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  )
}
