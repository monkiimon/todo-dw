import useSWR from "swr"

import { fetcher } from "./helpers"

// url must have id ex. /todos/:id
const UserTodo = (url: string) => {
  const { data } = useSWR(url, fetcher)
  return [data]
}

export default UserTodo
