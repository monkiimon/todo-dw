import React, { useState } from "react"

import styles from "./Todo.module.scss"
import { TodoType } from "../types"
import { LoadingSmall } from "@/modules/shared"

interface Props {
  todo: TodoType
  toggleCompleted: (todo: TodoType) => Promise<void>
  editTodoHandler: (todo: TodoType) => Promise<void>
  deleteTodoHandler: (todo: TodoType) => Promise<void>
}

const Todo = ({
  todo,
  toggleCompleted,
  editTodoHandler,
  deleteTodoHandler,
}: Props) => {
  const { title, completed } = todo
  const [toggleAction, setToggleAction] = useState<boolean>(false)
  const [toggleEdit, setToggleEdit] = useState<boolean>(false)
  const [input, setInput] = useState<string>(todo.title)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const toggleActionHandler = () => setToggleAction(!toggleAction)
  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement
    setInput(value)
  }
  const onTogleCompletedHandler = async () => {
    setIsLoading(true)
    await toggleCompleted(todo)
    setIsLoading(false)
  }
  const onDeleteHandler = async () => {
    setToggleAction(false)
    setIsLoading(true)
    await deleteTodoHandler(todo)
    setIsLoading(false)
  }
  const onSaveHandler = async () => {
    if (input === todo.title) {
      setToggleAction(false)
      setToggleEdit(false)
      return
    }
    if (!input || input === "") {
      return
    }
    setIsLoading(true)
    const editedTodo = {
      ...todo,
      title: input,
    }
    await editTodoHandler(editedTodo)
    setToggleAction(false)
    setToggleEdit(false)
    setIsLoading(false)
  }

  const completedStyle = completed ? "completed" : ""
  return (
    <div className={styles.container}>
      <div className={styles.wrapper_select}>
        {toggleEdit ? (
          <input
            className={styles.input}
            type="text"
            onChange={onChangeHandler}
            value={input}
            disabled={isLoading}
          />
        ) : (
          <label className={`container-select ${completedStyle}`}>
            <div className="select-title">{title}</div>
            <input
              name="todo-completed"
              type="checkbox"
              onChange={onTogleCompletedHandler}
              checked={completed}
            />
            <span className="checkmark"></span>
          </label>
        )}
      </div>
      <div className={styles.dots_container}>
        <div className={styles.dots}>
          {toggleEdit ? (
            <button className={styles.savebtn} onClick={onSaveHandler}>
              Save
            </button>
          ) : (
            <span onClick={toggleActionHandler}>...</span>
          )}
          {toggleAction && !toggleEdit && (
            <div className={styles.action_container}>
              <div
                className={styles.action_hover}
                onClick={() => setToggleEdit(true)}
              >
                Edit
              </div>
              <div
                className={`${styles.action_hover} ${styles.action_delete}`}
                onClick={onDeleteHandler}
              >
                Delete
              </div>
            </div>
          )}
        </div>
      </div>
      {isLoading && (
        <div className={styles.loading_container}>
          <LoadingSmall />
        </div>
      )}
    </div>
  )
}

export default Todo
