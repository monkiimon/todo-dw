import React, { useEffect } from "react"
import useSWR from "swr"
import axios from "axios"
import { useDispatch } from "react-redux"

import TodoSection from "./TodoSection"
import { addTodosData } from "@/modules/todo/todoSlice"
import { UseTodos, UseTodosRedux } from "../hooks"
import { Loading } from "@/modules/shared"
import { fetcher } from "../hooks/helpers"

// const fetcher = (url: string) => axios.get(url).then((res) => res.data)
export default function TodoPage() {
  // const { data, error } = useSWR("/todos", fetcher)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   if (data) {
  //     dispatch(addTodosData({ data }))
  //   }
  // }, [data])

  const [data] = UseTodos()
  const [todos] = UseTodosRedux()

  return <main>{data ? <TodoSection todos={todos} /> : <Loading />}</main>
}
