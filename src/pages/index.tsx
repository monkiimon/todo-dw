import Head from "next/head"

import { TodoPage } from "@/modules/todo"

export default function Home() {
  return (
    <>
      <Head>
        <title>TodoList App</title>
        <meta
          name="description"
          content="TodoList app is a simple app to manage your to-does"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TodoPage />
    </>
  )
}
