import TodoSection from "./TodoSection"
import { UseTodos, UseTodosRedux } from "../hooks"
import { Loading } from "@/modules/shared"

export default function TodoPage() {
  const [data] = UseTodos()
  const [todos] = UseTodosRedux()

  return <main>{data ? <TodoSection todos={todos} /> : <Loading />}</main>
}
