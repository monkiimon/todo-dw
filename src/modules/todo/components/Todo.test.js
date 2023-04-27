import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import user from "@testing-library/user-event"

import Todo from "./Todo"

const todo = {
  id: "5fe3f4ca-193c-4170-83c1-cb5a19908601",
  title: "Buy food for dinner",
  completed: true,
}

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(() => []),
}))

describe("check UI render", () => {
  test("it shows checkbox , title and action button", () => {
    const result = render(
      <Todo
        todo={todo}
        toggleCompleted={() => {}}
        editTodoHandler={() => {}}
        deleteTodoHandler={() => {}}
      />
    )

    const todoCheckbox = screen.getAllByRole("checkbox")
    const todoText = result.getByText("Buy food for dinner")
    const actionBtn = result.getByText("...")

    expect(todoCheckbox).toHaveLength(1)
    expect(todoText).toBeInTheDocument()
    expect(actionBtn).toBeInTheDocument()
  })

  test("it shows edit and delete when action button clicked", async () => {
    const result = render(
      <Todo
        todo={todo}
        toggleCompleted={() => {}}
        editTodoHandler={() => {}}
        deleteTodoHandler={() => {}}
      />
    )

    const actionBtn = result.getByText("...")
    await user.click(actionBtn)
    const editBtn = result.getByText("Edit")
    const deleteBtn = result.getByText("Delete")

    expect(editBtn).toBeInTheDocument()
    expect(deleteBtn).toBeInTheDocument()
  })

  test("it shows input box, save button and not show checkbox when edit button clicked", async () => {
    const result = render(
      <Todo
        todo={todo}
        toggleCompleted={() => {}}
        editTodoHandler={() => {}}
        deleteTodoHandler={() => {}}
      />
    )

    const actionBtn = result.getByText("...")
    await user.click(actionBtn)
    const editBtn = result.getByText("Edit")
    await user.click(editBtn)
    const todoInput = screen.getByRole("textbox")
    const saveBtn = result.getByText("Save")
    const todoCheckbox = screen.queryByRole("checkbox")

    expect(todoInput).toBeInTheDocument()
    expect(saveBtn).toBeInTheDocument()
    expect(todoCheckbox).not.toBeInTheDocument()
  })
})
