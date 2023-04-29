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
    if (!input || input === "") {
      return
    }
    setIsLoading(true)
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
      <form aria-label="add new todo" onSubmit={submitFormHandler}>
        <input
          value={input}
          onChange={onChangeHandler}
          className={styles.input}
          type="text"
          placeholder="Add your todo..."
          disabled={isLoading}
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
