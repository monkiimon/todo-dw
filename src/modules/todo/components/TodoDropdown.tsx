import React from "react"
import Dropdown from "react-dropdown"
import "react-dropdown/style.css"

type Props = {
  filterHandler: (filter: string) => void
}

const TodoDropdown = ({ filterHandler }: Props) => {
  const options = ["All", "Done", "Undone"]
  const defaultOption = options[0]
  return (
    <Dropdown
      className="mydropdown"
      options={options}
      onChange={(e) => filterHandler(e.value)}
      value={defaultOption}
      placeholder="Select an option"
    />
  )
}

export default TodoDropdown
