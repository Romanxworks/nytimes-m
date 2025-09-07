import { useGetNewsQuery } from "../../services/api"
import classes from "./News.module.scss"
import NewsBlock from "./NewsBlock/NewsBlock"

export default function News() {
  const { data } = useGetNewsQuery({ year: 2025, month: 9 })

  console.log(data.response)
  return (
    <div className={classes.newsContainer}>
      <ul className={classes.newsBlockList}>
        <NewsBlock />
        <NewsBlock />
        <NewsBlock />
      </ul>
    </div>
  )
}
