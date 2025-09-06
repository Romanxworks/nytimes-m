import classes from "./NewsItem.module.scss"
import Image from "../../../assets/image.png"
import { Link } from "react-router-dom"

export default function NewsItem() {
  return (
    <Link to={"/"}>
      <article className={classes.news}>
        <h3 className={classes.title}>CNN</h3>
        <img className={classes.img} src={Image} alt="" width={99} height={74} />
        <p className={classes.description}>
          Why TikTok is taking months to delete personal US user data from servers outside its Project Texas firewalls,
          even as its political standing sours
        </p>
        <span className={classes.date}>Feb 26, 2023, 16.32 PM</span>
      </article>
    </Link>
  )
}
