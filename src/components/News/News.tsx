import { useEffect, useState } from "react"
import { useGetNewsQuery } from "../../services/api"
import classes from "./News.module.scss"
import NewsBlock from "./NewsBlock/NewsBlock"
import type { TNews } from "../types"
import Loader from "../Loader/Loader"
import dayjs from "dayjs"

export type NewsBlockItems = {
  dayNum: string
  items: TNews[]
}

const newsByDays: NewsBlockItems[] = Array.from({ length: 31 }).map((_, index) => ({
  dayNum: `${index + 1}`,
  items: []
}))

export default function News() {
  const { data, isFetching, isLoading } = useGetNewsQuery({ year: 2025, month: 5 }, { pollingInterval: 30000 })
  // const [allNews, setAllNews] = useState<TNews[]>([])
  const [allNewsByDays, setAllNewsByDays] = useState<NewsBlockItems[]>([])

  useEffect(() => {
    if (!data) return
    // setAllNews(data.response.docs)
    const resPart = data.response.docs.slice(0, 100)

    resPart.forEach((news) => {
      newsByDays.forEach((day) => {
        if (dayjs(news.pub_date).format("D") == day.dayNum) {
          day.items.push(news)
        }
      })
    })

    setAllNewsByDays(newsByDays.filter((day) => day.items.length > 0))
  }, [data])

  return (
    <div className={classes.newsContainer}>
      {(isFetching || isLoading) && <Loader />}
      <ul className={classes.newsBlockList}>
        {allNewsByDays.map((day) => (
          <NewsBlock newsBlok={day} key={day.dayNum} />
        ))}
      </ul>
    </div>
  )
}
