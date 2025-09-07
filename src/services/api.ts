import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import { createApi } from "@reduxjs/toolkit/query/react"
import { API_KEY } from "../constants"

const URL_Prefix = "/svc/archive/v1/"

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["News"],
  baseQuery: fetchBaseQuery({
    baseUrl: "/api"
  }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: (body) => ({
        url: URL_Prefix + `${body.year}/${body.month}.json`,
        method: "GET",
        params: {
          "api-key": API_KEY
        }
      }),
      providesTags: ["News"]
    })
  })
})
export const { useGetNewsQuery, useLazyGetNewsQuery } = api
