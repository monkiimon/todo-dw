import React from "react"

import styles from "./Todolist.module.scss"
import Todo from "./Todo"
import { UseTodosRedux, UseTodoDispatch } from "../hooks"
import { TodoType } from "../types"

type Props = {
  todos: TodoType[]
}
const Todolist = ({ todos }: Props) => {
  const { deleteTodoHandler, editTodoHandler, toggleCompletedHandler } =
    UseTodoDispatch()
  const rederTodos = () => {
    if (!todos) {
      return <div></div>
    }
    return (
      <>
        {todos.map((d) => (
          <Todo
            key={d.id}
            todo={d}
            toggleCompleted={toggleCompletedHandler}
            editTodoHandler={editTodoHandler}
            deleteTodoHandler={deleteTodoHandler}
          />
        ))}
      </>
    )
  }
  return <div className={styles.container}>{rederTodos()}</div>
}

export default Todolist
