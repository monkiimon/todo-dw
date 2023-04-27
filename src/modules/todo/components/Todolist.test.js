import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import Todolist from "./Todolist"

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
  test("it shows 3 todos", async () => {
    render(<Todolist todos={todos} />)

    const todoList = screen.getAllByRole("checkbox")

    expect(todoList).toHaveLength(3)
  })
})
