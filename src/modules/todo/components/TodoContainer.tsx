import React, { useState } from "react"

import styles from "./TodoContainer.module.scss"
import TodoDropdown from "./TodoDropdown"
import Todolist from "./Todolist"
import TodoInput from "./TodoInput"
import { TodoType } from "../types"

type Props = {
  todos: TodoType[]
}

const TodoContainer = ({ todos }: Props) => {
  const [filter, setFilter] = useState<string>("All")
  const filterHandler = (filter: string) => setFilter(filter)

  const todosDisplay = () => {
    if (filter == "Done") {
      return todos.filter((t) => t.completed)
    } else if (filter == "Undone") {
      return todos.filter((t) => !t.completed)
    } else {
      return todos
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Tasks</div>
        <div className={styles.filter}>
          <TodoDropdown filterHandler={filterHandler} />
        </div>
      </div>
      <div className={styles.body}>
        <Todolist todos={todosDisplay()} />
      </div>
      <div className={styles.footer}>
        <TodoInput />
      </div>
    </div>
  )
}

export default TodoContainer
