import classes from "./News.module.scss"
import NewsBlock from "./NewsBlock/NewsBlock"

export default function News() {
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
