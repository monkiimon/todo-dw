import { useEffect } from "react"
import { useDispatch } from "react-redux"
import useSWR from "swr"

import { fetcher } from "./helpers"
import { addTodosData } from "../todoSlice"

const UserTodos = () => {
  const { data } = useSWR("/todos", fetcher)

  const dispatch = useDispatch()
  useEffect(() => {
    if (data) {
      dispatch(addTodosData({ data }))
    }
  }, [data])

  if (data) {
    return [data]
  }

  return []
}

export default UserTodos
