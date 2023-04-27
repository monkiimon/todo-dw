import React, { FormEvent, useState } from "react"

import styles from "./TodoInput.module.scss"
import { UseTodoDispatch } from "../hooks"
import { LoadingSmall } from "@/modules/shared"

const TodoInput = () => {
  const [input, setInput] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { addTodoHandler } = UseTodoDispatch()

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement
    setInput(value)
  }
  const submitFormHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    if (!input || input === "") {
      return
    }
    const body = {
      title: input,
      completed: false,
    }
    await addTodoHandler(body)
    setInput("")
    setIsLoading(false)
  }
  return (
    <div className={styles.container}>
      <form onSubmit={submitFormHandler}>
        <input
          value={input}
          onChange={onChangeHandler}
          className={styles.input}
          type="text"
          placeholder="Add your todo..."
        />
      </form>
      {isLoading && (
        <div className={styles.loading_container}>
          <LoadingSmall />
        </div>
      )}
    </div>
  )
}

export default TodoInput