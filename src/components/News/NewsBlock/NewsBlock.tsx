import NewsItem from "../NewsItem/NewsItem"
import classes from "./NewsBlock.module.scss"

export default function NewsBlock() {
  return (
    <li className={classes.newsBlock}>
      <h3 className={classes.title}>News for 16.06.2023</h3>
      <ul className={classes.newsList}>
        <li>
          <NewsItem />
        </li>
        <li>
          <NewsItem />
        </li>
      </ul>
    </li>
  )
}
