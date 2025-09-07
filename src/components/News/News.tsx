import { useEffect, useState } from "react"
import { useGetNewsQuery } from "../../services/api"
import classes from "./News.module.scss"
import NewsBlock from "./NewsBlock/NewsBlock"
import type { TNews } from "../types"
import Loader from "../Loader/Loader"
import dayjs from "dayjs"
import { useAppSelector } from "../../store/redux"
import { PART_COUNT } from "../../constants"

export type NewsBlockItems = {
  dayNum: string
  items: TNews[]
}

export default function News() {
  // const currentMonth = dayjs().month() + 1
  const currentYear = dayjs().year()
  // Формируем календарь с пустыми новостями
  const newsByDays: NewsBlockItems[] = Array.from({ length: 31 }).map((_, index) => ({
    dayNum: `${index + 1}`,
    items: []
  }))

  // const { data, isFetching, isLoading } = useGetNewsQuery({ year: currentYear, month: currentMonth }, { pollingInterval: 30000 })
  const { data, isFetching, isLoading } = useGetNewsQuery({ year: currentYear, month: 5 }, { pollingInterval: 30000 })
  const [allNewsByDays, setAllNewsByDays] = useState<NewsBlockItems[]>([])
  const [countItem, setCountItem] = useState<number>(1)

  // Получаем флаг обновления списка новостей
  const { isNeedUpdate } = useAppSelector((state) => state.newsReducer)

  useEffect(() => {
    if (isNeedUpdate) setCountItem((prev) => prev + 1)
  }, [isNeedUpdate])

  useEffect(() => {
    if (!data) return
    const resPart = [...data.response.docs].slice(0, PART_COUNT * countItem)

    //Заполняем календарь нвостями по их датам
    resPart.forEach((news) => {
      newsByDays.forEach((day) => {
        if (dayjs(news.pub_date).format("D") == day.dayNum) {
          day.items.push(news)
        }
      })
    })

    setAllNewsByDays(newsByDays.filter((day) => day.items.length > 0))
  }, [data, countItem])

  return (
    <div className={classes.newsContainer}>
      {(isFetching || isLoading) && <Loader />}
      <ul className={classes.newsBlockList}>
        {allNewsByDays.map((day, ind) => (
          <NewsBlock newsBlok={day} key={day.dayNum + day.items[ind]._id} />
        ))}
      </ul>
    </div>
  )
}
