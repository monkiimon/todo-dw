import React from "react"

import styles from "./TodoSection.module.scss"
import ProgressBar from "./ProgressBar"
import TodoContainer from "./TodoContainer"
import { TodoType } from "../types"

interface Props {
  todos: TodoType[]
}
const TodoSection = ({ todos }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ProgressBar todos={todos} />
        <TodoContainer todos={todos} />
      </div>
    </div>
  )
}

export default TodoSection
