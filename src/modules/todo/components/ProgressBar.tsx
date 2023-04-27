import React from "react"

import styles from "./ProgressBar.module.scss"
import { TodoType } from "../types"

type Props = {
  todos: TodoType[]
}

const ProgressBar = ({ todos }: Props) => {
  const noAllTodos = todos.length
  const noCompletedTodos = todos.filter((t) => t.completed).length
  const ratioTodos = (noCompletedTodos / noAllTodos) * 100 + "%"
  return (
    <div className={styles.progressbar_container}>
      <div className={styles.title}>Progress</div>
      <div className={styles.bar_wrapper}>
        <div className={styles.bar_container}>
          <div className={styles.bar} style={{ width: ratioTodos }}></div>
        </div>
      </div>
      <div className={styles.completed}>{`${
        noCompletedTodos || 0
      } completed`}</div>
    </div>
  )
}

export default ProgressBar
