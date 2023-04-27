import { useDispatch } from "react-redux"
import { AxiosResponse } from "axios"

import { addTodosData } from "../todoSlice"
import { TodoType } from "../types"
import { fetch } from "@/modules/util"

const UseTodoDispatch = () => {
  const dispatch = useDispatch()

  // add new todo
  const addTodoHandler = async (todo: TodoType): Promise<void> => {
    await fetch.apiPost("/todos/", todo)
    const res: AxiosResponse<TodoType> = await fetch.apiGet(`/todos`)
    dispatch(addTodosData({ data: res }))
    return new Promise<void>((resolve) => {
      resolve()
    })
  }

  // toggle completed
  const toggleCompletedHandler = async (todo: TodoType): Promise<void> => {
    const body = {
      ...todo,
      completed: !todo.completed,
    }
    await fetch.apiPut(`/todos/${todo.id}`, body)
    const res: AxiosResponse<TodoType> = await fetch.apiGet(`/todos`)
    dispatch(addTodosData({ data: res }))
    return new Promise<void>((resolve) => {
      resolve()
    })
  }

  // edit todo
  const editTodoHandler = async (todo: TodoType): Promise<void> => {
    const { id, ...body } = todo
    await fetch.apiPut(`/todos/${todo.id}`, body)
    const res: AxiosResponse<TodoType> = await fetch.apiGet(`/todos`)
    dispatch(addTodosData({ data: res }))
    return new Promise<void>((resolve) => {
      resolve()
    })
  }

  // delete todo
  const deleteTodoHandler = async (todo: TodoType): Promise<void> => {
    await fetch.apiDelete(`/todos/${todo.id}`)
    const res: AxiosResponse<TodoType> = await fetch.apiGet(`/todos`)
    dispatch(addTodosData({ data: res }))
    return new Promise<void>((resolve) => {
      resolve()
    })
  }

  return {
    addTodoHandler,
    toggleCompletedHandler,
    editTodoHandler,
    deleteTodoHandler,
  }
}

export default UseTodoDispatch
