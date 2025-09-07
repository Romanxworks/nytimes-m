import type { TNews } from "../components/types"

export type GetNewsResponse = {
  copyright: string
  response: {
    docs: TNews[]
  }
}
export type GetNewsRequest = {
  year: number
  month: number
}
