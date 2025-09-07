export type TNavItem = {
  title: string
  link: string
}
export type TNews = {
  _id: string
  abstract: string
  web_url: string
  multimedia: {
    height: number
    width: number
    url: string
  }[]
  pub_date: string
  source: string
}
