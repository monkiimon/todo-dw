import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import TodoContainer from "./TodoContainer"

const todos = [
  {
    id: "5fe3f4ca-193c-4170-83c1-cb5a19908601",
    title: "Buy food for dinner",
    completed: true,
  },
  {
    id: "f619466c-a016-4281-b584-7db2795d103d",
    title: "Call Marie at 10.00 PM",
    completed: false,
  },
  {
    id: "5fe3f4ca-193c-4170-83c1-cb5a19908602",
    title: "Write a react blog post",
    completed: false,
  },
]

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(() => []),
}))

jest.mock("../hooks", () => ({
  UseTodos: jest.fn(() => [todos]),
  UseTodosRedux: jest.fn(() => [todos]),
  UseTodoDispatch: jest.fn(() => ({
    addTodoHandler: jest.fn(),
    toggleCompletedHandler: jest.fn(),
    editTodoHandler: jest.fn(),
    deleteTodoHandler: jest.fn(),
  })),
}))

describe("check UI render", () => {
  test("it shows Task header, 1 dropdown ,3 todos and 1 input field", () => {
    const result = render(<TodoContainer todos={todos} />)

    const tasksSection = result.getByText("Tasks")
    const defaultDDIsAll = screen.getByText("All")
    const todoList = screen.getAllByRole("checkbox")
    const todoInput = result.getByPlaceholderText("Add your todo...")

    expect(todoInput).toBeInTheDocument()
    expect(defaultDDIsAll).toBeInTheDocument()
    expect(todoList).toHaveLength(3)
    expect(tasksSection).toBeInTheDocument()
  })
})
