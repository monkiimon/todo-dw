import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import TodoSection from "./TodoSection"

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

describe("check UI render", () => {
  test("it shows Progress bar section , Task section and Add todo input field", () => {
    const result = render(<TodoSection todos={todos} />)

    const progressSection = result.getByText("Progress")
    const tasksSection = result.getByText("Tasks")
    const todoInput = result.getByPlaceholderText("Add your todo...")

    expect(progressSection).toBeInTheDocument()
    expect(tasksSection).toBeInTheDocument()
    expect(todoInput).toBeInTheDocument()
  })
})
