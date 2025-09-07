import dayjs from "dayjs"
import type { NewsBlockItems } from "../News"
import NewsItem from "../NewsItem/NewsItem"
import classes from "./NewsBlock.module.scss"

interface NewsBlockProps {
  newsBlok: NewsBlockItems
}

export default function NewsBlock({ newsBlok }: NewsBlockProps) {
  const dayTitle = `${newsBlok.dayNum}.${dayjs(newsBlok.items[1].pub_date).format("MM.YYYY")}`

  return (
    <li className={classes.newsBlock}>
      <h3 className={classes.title}>News for {dayTitle} </h3>
      <ul className={classes.newsList}>
        {newsBlok.items.map((item, ind) => (
          <li key={item._id + ind}>
            <NewsItem news={item} />
          </li>
        ))}
      </ul>
    </li>
  )
}
