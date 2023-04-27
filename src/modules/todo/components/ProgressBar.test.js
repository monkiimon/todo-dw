import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import ProgressBar from "./ProgressBar"

const todos = [
  {
    id: "5fe3f4ca-193c-4170-83c1-cb5a19908601",
    title: "Buy food for dinner",
    completed: true,
  },
  {
    id: "f619466c-a016-4281-b584-7db2795d103d",
    title: "Call Marie at 10.00 PM",
    completed: true,
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
  test("it shows Progress bar title section , 2 completed todo and 1 progress bar", () => {
    const result = render(<ProgressBar todos={todos} />)

    const progressSection = result.getByText("Progress")
    const noCompleted = result.getByText("2 completed")
    const progressBar = result.container.querySelector("#progress-bar")

    expect(progressSection).toBeInTheDocument()
    expect(noCompleted).toBeInTheDocument()
    expect(progressBar).toBeInTheDocument()
  })
})
