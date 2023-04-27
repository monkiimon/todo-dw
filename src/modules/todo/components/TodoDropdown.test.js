import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import user from "@testing-library/user-event"

import TodoDropDown from "./TodoDropdown"

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(() => []),
}))

describe("check UI render", () => {
  test("it shows default is All", async () => {
    render(<TodoDropDown filterHandler={() => {}} />)

    const defaultIsAll = screen.getByText("All")

    expect(defaultIsAll).toBeInTheDocument()
  })

  test("it shows 3 options when clicked", async () => {
    render(<TodoDropDown filterHandler={() => {}} />)

    const defaultIsAll = screen.getByText("All")
    await user.click(defaultIsAll)
    const options = screen.getAllByRole("option")

    expect(options).toHaveLength(3)
  })
})
