import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import TodoPage from "./TodoPage"

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
  test("it shows Progress bar section , Task section, Add todo input field and Todo section", () => {
    const result = render(<TodoPage />)

    const progressSection = result.getByText("Progress")
    const tasksSection = result.getByText("Tasks")
    const todoInput = result.getByPlaceholderText("Add your todo...")
    const todoSection = result.container.querySelector("#todo-section")

    expect(progressSection).toBeInTheDocument()
    expect(tasksSection).toBeInTheDocument()
    expect(todoInput).toBeInTheDocument()
    expect(todoSection).toBeInTheDocument()
  })
})
