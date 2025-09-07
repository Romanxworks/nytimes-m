import classes from "./NewsItem.module.scss"
import Image from "../../../assets/image.png"
import { Link } from "react-router-dom"
import type { TNews } from "../../types"
import { IMAGES_URL } from "../../../constants"
import dayjs from "dayjs"

interface NewsItemProps {
  news: TNews
}

export default function NewsItem({ news }: NewsItemProps) {
  const urlImage = news.multimedia[3]?.url ? IMAGES_URL + news.multimedia[3]?.url : Image
  return (
    <Link to={news.web_url}>
      <article className={classes.news}>
        <h3 className={classes.title}>{news.source}</h3>
        <img className={classes.img} src={urlImage} alt={news.source} width={99} height={74} />
        <p className={classes.description}>{news.abstract}</p>
        <span className={classes.date}>{dayjs(news.pub_date).format("MMM D, YYYY, hh.mm A")}</span>
      </article>
    </Link>
  )
}
