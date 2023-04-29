import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { AppState } from "@/store/store"

import { TodoSliceProps } from "../todoSlice"

const UseTodoRedux = () => {
  const { data }: TodoSliceProps = useSelector((state: AppState) => state.todo)
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => {
    setMounted(true)
  }, [data])
  if (mounted) {
    return [data]
  }
  return []
}

export default UseTodoRedux
