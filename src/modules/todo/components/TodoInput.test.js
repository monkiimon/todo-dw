import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import TodoInput from "./TodoInput"

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(() => []),
}))

describe("check UI render", () => {
  test("it shows 1 form and 1 input field", async () => {
    render(<TodoInput />)

    const form = screen.getByRole("form", {
      name: /add new todo/i,
    })
    const textInput = screen.getAllByRole("textbox")

    expect(form).toBeInTheDocument()
    expect(textInput).toHaveLength(1)
  })
})
